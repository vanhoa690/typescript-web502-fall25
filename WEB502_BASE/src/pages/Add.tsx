import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  name: string;
  price: number;
}
function Add() {
  // react hook form
  // const [name, setName] = useState<string>("");
  // const [price, setPrice] = useState<number>(0);
  const {
    register, //value: name, onChange: setName = e.target.value
    handleSubmit,
    formState: { errors },
  } = useForm(); // zod, joi, formik

  const onSubmit = (values: any) => {
    console.log(values);
    axios.post("http://localhost:3000/products", values);
  };
  return (
    <div>
      <h1>Thêm mới</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Text
          </label>
          <input
            {...register("name", { required: "thong tin loi", minLength: 6 })}
            type="text"
            className="form-control"
            id="text"
          />
          {/* {errors} */}
        </div>

        <div className="mb-3">
          <label htmlFor="radio" className="form-label">
            Radio
          </label>
          <div className="form-check">
            <input
              {...register("price", { min: 0 })}
              className="form-check-input"
              type="checkbox"
              id="flexCheck1"
            />
            <label className="form-check-label" htmlFor="flexCheck1">
              checkbox 1
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheck2"
            />
            <label className="form-check-label" htmlFor="flexCheck2">
              checkbox 2
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="radio" className="form-label">
            Checkbox
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadio1"
            />
            <label className="form-check-label" htmlFor="flexRadio1">
              Checkbox 1
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadio2"
            />
            <label className="form-check-label" htmlFor="flexRadio2">
              Checkbox 2
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="selectOption" className="form-label">
            Select - option
          </label>
          <select className="form-select">
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
