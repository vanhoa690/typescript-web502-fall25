import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductInput } from "../interfaces/Product";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// const productInit: ProductInput ={
//   title:'',
//   category:'smartphones',
//   description:'',
//   price:0,
//   thumbnail:''
// }

function Add() {
  const productSchema = z.object({
    title: z.string().min(1, "Tên sản phẩm không được để trống"),
    price: z.number().min(1, "Giá phải lớn hơn 0"),
    thumbnail: z.string().min(1, "Vui lòng chọn danh mục"),
    description: z.string().min(1, "Vui lòng chọn danh mục"),
    category: z.string().min(1, "Vui lòng chọn danh mục"),
  });
  // const [product,setProduct] = useState<ProductInput>(productInit);

  // const handleSubmit =async (e: React.FormEvent<HTMLFormElement>)=>{
  //   e.preventDefault();
  //   // console.log(product);
  //   try {
  //     await axios.post(`http://localhost:3000/products`,product)
  //     toast.success("Thêm thành công")
  //   } catch (error) {
  //     // toast.error("Thêm thất bại")
  //     toast.error((error as AxiosError).message)
  //   }

  // }

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductInput>({
    defaultValues: {
      price: 100,
      category: "laptops",
    },
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (data: ProductInput) => {
    // console.log(data);
    try {
      await axios.post(`http://localhost:3000/products`, data);
      toast.success("Thêm thành công");
      reset();
      navigate("/admin/product");
    } catch (error) {
      // toast.error("Thêm thất bại")
      toast.error((error as AxiosError).message);
    }
  };

  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>

      <form
        // onSubmit={(e)=>{handleSubmit(e)}}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Tên sản phẩm
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            // value={product.title}
            // onChange={(e)=>{
            //   setProduct((prev: ProductInput)=>{
            //     return {
            //       ...prev, // spread
            //       title: e.target.value
            //     }
            //   })
            // }}
            {...register("title")}
          />
          {errors?.title && (
            <span className="text-danger">{errors?.title?.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Giá bán
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            {...register("price", {
              required: "Không để trống giá bán",
              min: {
                value: 0,
                message: "Cần nhập số không âm",
              },
              max: {
                value: 1000,
                message: "Giá bán nhỏ hơn 1000",
              },
              pattern: {
                value: /^\d+$/,
                message: "Sai định dạng số",
              },
            })}
          />
          {errors?.price && (
            <span className="text-danger">{errors?.price?.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Hình ảnh
          </label>
          <input
            type="text"
            className="form-control"
            id="thumbnail"
            {...register("thumbnail")}
          />
          {/* không để trống hình ảnh, độ dài tối đa 255 ký tự */}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Mô tả
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description")}
          />
          {/* Không để trống mô tả */}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Danh mục
          </label>
          <select className="form-select" {...register("category")}>
            <option value={"smartphones"}>smartphones</option>
            <option value={"laptops"}>laptops</option>
            <option value={"groceries"}>groceries</option>
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
