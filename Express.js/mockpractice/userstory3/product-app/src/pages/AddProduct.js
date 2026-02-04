import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/ProductContext";

function AddProduct() {
  const { addProduct } = useContext(ProductContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      price: Yup.number().required("Required")
    }),
    onSubmit: (values, { resetForm }) => {
      fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
        .then((res) => res.json())
        .then((data) => {
          addProduct(data);
          resetForm();
        });
    }
  });

  return (
    <div>
      <h2>Add Product</h2>

      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <p>{formik.errors.name}</p>

        <input
          name="price"
          placeholder="Price"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <p>{formik.errors.price}</p>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
