import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../../api/authApi";

const schema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
});

type RegisterForm = z.infer<typeof schema>;

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: RegisterForm) => {
    await registerUser(data);

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 shadow rounded w-96"
      >
        <h2 className="text-2xl font-bold mb-6">Register</h2>

        <input
          placeholder="Name"
          {...register("name")}
          className="border p-2 w-full mb-2"
        />

        <p className="text-red-500 text-sm">{errors.name?.message}</p>

        <input
          placeholder="Email"
          {...register("email")}
          className="border p-2 w-full mb-2"
        />

        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="border p-2 w-full mb-2"
        />

        <p className="text-red-500 text-sm">{errors.password?.message}</p>

        <button
          type="submit"
          className="bg-green-600 text-white w-full py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
