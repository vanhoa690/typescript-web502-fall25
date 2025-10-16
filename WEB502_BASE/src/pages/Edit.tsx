import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const updateSchema = z.object({
  name: z.string().min(10, "Tên sản phẩm không được để trống"),
  image: z.string().min(1, "Hinh anh không được để trống"),
  price: z.number().min(1, "Gia không được để trống"),
  category: z.string().min(1, "Danh muc không được để trống"),
});

interface FormData {
  name: string;
  image: string;
  price: number;
  category: string;
}
function Edit() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(updateSchema),
  });

  // lay thong tin detail: id
  const { id } = useParams();
  // useParams: lay id ve
  useEffect(() => {
    const getProductById = async () => {
      const res = await axios.get("http://localhost:3000/products/" + id);
      console.log(res.data);
      reset(res.data);
    };
    if (id) {
      getProductById();
    }
  }, [id]);
  // react hook form

  const onSubmit = async (values: FormData) => {
    console.log("submit", values);
    await axios.put("http://localhost:3000/products", values);
    toast.success("them thanh cong");
  };

  return (
    <div>
      <h1>Cap nhat</h1>
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
          {errors?.name && <span>{errors.name.message}</span>}
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
          {errors?.image && <span>{errors.image.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Price
          </label>
          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
            className="form-control"
            id="price"
          />
          {/* {errors} */}
          {errors?.price && <span>{errors.price.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="selectOption" className="form-label">
            Category
          </label>
          <select className="form-select" {...register("category")}>
            <option value={"Laptop"}>Laptop</option>
            <option value={"Mobile"}>Mobile</option>
            <option value={"PC"}>PC</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Edit;
