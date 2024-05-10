import HomePage from "@/components/pages/HomePages";
// import store from "@/store";
import fetchProductsAsync from "@/store/slices/fetchProductsSliceAsync";
// import { Provider } from "react-redux";
import { wrapper } from "@/store";
export default function Home() {
  console.log(1);
  return (
   
      <HomePage />
   
  );
}
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchProductsAsync());
  
  return {
    props: {}, // will be passed to the page component as props
  };
});