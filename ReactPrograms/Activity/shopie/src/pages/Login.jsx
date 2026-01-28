import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password required"),
});

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {

      // ✅ ADMIN LOGIN
      if (values.email === "admin@neostore.com" && values.password === "admin123") {
        login({ email: values.email, role: "admin" }); // 👑 ADMIN ROLE
        navigate("/products", { replace: true });
        return;
      }

      // ✅ USER LOGIN
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (u) => u.email === values.email && u.password === values.password
      );

      if (user) {
        login({ email: user.email, role: "user" }); // 👤 USER ROLE
        navigate("/", { replace: true });
      } else {
        alert("❌ Invalid email or password");
      }
    },
  });

  return (
    <div className="max-w-md mx-auto mt-32 bg-white/20 p-6 rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full p-2 rounded text-black"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="w-full p-2 rounded text-black"
        />

        <button className="w-full bg-yellow-400 text-black font-bold py-2 rounded">
          Login
        </button>
      </form>

      <p className="text-center mt-4 text-white">
        New user?{" "}
        <Link to="/signup" className="text-cyan-300 font-bold">
          Signup here
        </Link>
      </p>
    </div>
  );
}
