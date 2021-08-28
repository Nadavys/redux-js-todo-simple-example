import React from 'react';
import { useForm } from 'react-hook-form';
import debounce from 'debounce';
import { useDispatch, useSelector } from 'react-redux'
import { add } from './TodoSlice'

function Todo() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.list);
  console.log(todoList);
  const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data, event) => {
    data.example = dispatch(add(
      { title: data.example }))

    reset({ example: "" });
  }

  console.log("watched", watch("example")); // watch input value by passing the name of it

  return (
    <>
      <h2>Todo List</h2>
      <ol>
        {
          todoList && todoList.map(
            (item) => <li>{item.title}</li>
          )
        }
      </ol>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="" {...register("example", { required: true })}
          onChange={debounce((v) => console.log("changed", v), 300)}
        />
        {errors.example && <span>* example field is required</span>}
        <br />

        <input type="submit" />
      </form>
    </>
  );


}

export default Todo;
