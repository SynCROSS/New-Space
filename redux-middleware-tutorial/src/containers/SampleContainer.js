import React from 'react';
import { connect } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const { useEffect } = React;
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  //if it is class type, use componentDidMount instead of useEffect
  // useEffect(() => {
  //   getPost(1);
  //   getUsers(1);
  // }, [getPost, getUsers]);
  useEffect(() => {
    // async function can not be the parameter of useEffect
    // so if who wanna use async function for parameter of useEffect, define inside of parameter function of useEffect like below
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

const mapStateToProps = ({ sample, loading }) => {
  return {
    post: sample.post,
    users: sample.users,
    loadingPost: loading.GETPOST,
    loadingUsers: loading.GETUSERS,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPost: () => dispatch(getPost()),
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
