import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import './AddProduct.css'
import toast, {Toaster} from 'react-hot-toast'


const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      desc: '',
      image:"",
      price: ''
    },
    onSubmit: (values, { resetForm }) => {
      if (!values.desc ||!values.price) {
        toast.error("Boşluqları doldurun");
        return;
      }
      axios.post('http://localhost:8082/products', { ...values })
        .then(res => {
          console.log(res);
          resetForm();
          toast.success("Successfully added");
        })
        
    }
  });

  return (
    <div className="div-container">
      <form onSubmit={formik.handleSubmit}>
        <label className="form-label" htmlFor="desc">Description</label><br />
        <input className="input-field" id="desc" name="desc" type="text" onChange={formik.handleChange} value={formik.values.desc} /><br />
        <label className="form-label" htmlFor="image">Image</label><br />
        <input className="input-field" id="image" name="image" type="text" onChange={formik.handleChange} value={formik.values.image} />
        <label className="form-label" htmlFor="price">Price</label><br />
        <input className="input-field" id="price" name="price" type="number" onChange={formik.handleChange} value={formik.values.price} /><br />

        <button className="submit-button" type="submit">Submit</button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddProduct;