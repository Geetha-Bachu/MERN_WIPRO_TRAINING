import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password required"),
});

export default function Signup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const exists = users.find((u) => u.email === values.email);
      if (exists) {
        alert("User already exists ❌");
        return;
      }

      users.push({ email: values.email, password: values.password, role: "user" });
      localStorage.setItem("users", JSON.stringify(users));

      alert("✅ Registration successful! Please login.");
      navigate("/login");
    },
  });

  return (
    <div className="max-w-md mx-auto mt-32 bg-white/20 p-6 rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full p-2 rounded text-black"
        />
        {formik.errors.email && <p className="text-red-400">{formik.errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="w-full p-2 rounded text-black"
        />
        {formik.errors.password && <p className="text-red-400">{formik.errors.password}</p>}

        <button className="w-full bg-green-500 text-white font-bold py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
