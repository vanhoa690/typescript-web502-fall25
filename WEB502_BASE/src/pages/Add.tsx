import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
}
function Add() {
  // react hook form
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (values: FormData) => {
    console.log("submit", values);
  };

  return (
    <div>
      <h1>Thêm mới</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")} // value, onChange ....
            type="text"
            className="form-control"
            id="name"
          />
          {/* {errors} */}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
