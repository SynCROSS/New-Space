import React from 'react';

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  console.log('post:', post);
  return (
    <>
      <section>
        <h1>Post</h1>
        {loadingPost && 'Still Loading...'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
        <hr />
        <section>
          <h1>Users List</h1>
          {loadingUsers && 'Loading Users...'}
          {!loadingUsers && users && (
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  {user.username} ({user.email})
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </>
  );
};

export default Sample;
