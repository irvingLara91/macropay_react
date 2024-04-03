import {Route, Routes} from "react-router-dom";
import React from "react";
import {Home} from "../Page/Home/Home";
import {EditProduct} from "../Page/EditProduct/EditProduct";
import {AddProduct} from "../Page/AddProduct/AddProduct";
const Pages = () => {
  return(
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<EditProduct />} />
          <Route path='/product/add' element={<AddProduct />} />

      </Routes>
  )
}
export default Pages;
