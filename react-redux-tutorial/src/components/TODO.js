import React from 'react';

const ToDoItem = ({ toDo, onToggle, onRemove }) => {
  console.log(toDo.done);
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(toDo.id)}
        checked={toDo.done}
        readOnly
        name=""
        id=""
      />
      <span style={{ textDecoration: toDo.done ? 'line-through' : 'none' }}>
        {toDo.text}
      </span>
      <button onClick={() => onRemove(toDo.id)}>❌</button>
    </div>
  );
};
const TODO = ({ input, toDos, onChange, onInsert, onToggle, onRemove }) => {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChange('');
  };
  const onchange = e => {
    onChange(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={onchange}
          type="text"
          placeholder="Write to do"
        />
        <button>Add</button>
      </form>
      <div className="list">
        {toDos.map(toDo => (
          <ToDoItem
            toDo={toDo}
            key={toDo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  );
};

export default TODO;
