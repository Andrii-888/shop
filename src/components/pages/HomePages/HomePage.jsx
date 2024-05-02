"use client";
import fetchProductsAsync from "@/store/slices/fetchProductsSliceAsync";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProductsAsync());
  });
  return <div>HomePage</div>;
};

export default HomePage;
