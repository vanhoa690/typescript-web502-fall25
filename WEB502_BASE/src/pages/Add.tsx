import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  image: string;
}
function Add() {
  // react hook form
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (values: FormData) => {
    console.log("submit", values);
    await axios.post("http://localhost:3000/products", values);
    toast.success("them thanh cong");
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
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            {...register("image")} // value, onChange ....
            type="text"
            className="form-control"
            id="image"
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
