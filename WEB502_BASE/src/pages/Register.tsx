import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface IRegister {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
const registerSchema = z
  .object({
    username: z.string().min(3, "Tên người dùng phải có ít nhất 3 ký tự"),
    email: z.string().email({ message: "Email không hợp lệ" }),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 8 ký tự"),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: IRegister) => {
    try {
      data.confirmPassword = undefined;
      await axios.post(`http://localhost:3000/register`, data);
      toast.success("Đăng ký thành công");
    } catch (error: unknown) {
      toast.error((error as AxiosError).response?.data as string);
    }
  };

  return (
    <div>
      <h1>Đăng ký</h1>
      <Link className="btn btn-primary" to={"/login"}>
        Đăng nhập
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            {...register("username")}
          />
          {errors?.username && (
            <span className="text-danger">{errors?.username?.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            {...register("email")}
          />
          {errors?.email && (
            <span className="text-danger">{errors?.email?.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", {
              required: "Không để trống password",
              minLength: {
                value: 6,
                message: "Cần tối thiểu 6 ký tự",
              },
            })}
          />
          {errors?.password && (
            <span className="text-danger">{errors?.password?.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword && (
            <span className="text-danger">
              {errors?.confirmPassword?.message}
            </span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
