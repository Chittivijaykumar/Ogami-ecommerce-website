import Header from "./components/header";
import Navbar from "./components/navbar";
import Body from "./components/body";
import { useEffect, useState } from 'react';
import Features from "./components/features";
import Bestseller from "./components/bestseller";
import Newproducts from "./components/new-products";
import Boxesdiv from "./components/boxesdiv";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/signin";
import Signup from "./components/signup";
import ProductDetails from "./components/productDetails";
import Cartpage from "./components/cartpage";

const url = "https://ogami-api.vercel.app/api/product";


function App() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [count, setcount] = useState({
    products: [],
    totalPrice: 0

  });
  const fetchProducts = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchProducts();

  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Navbar />
          <Body />
          <Features data={products} cart={count} setcount={setcount} wishlist={wishlist} setWishlist={setWishlist} />
          <Bestseller data={products} />
          <Newproducts data={products} />
          <Boxesdiv />
          <Footer />
        </div>
      )
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/:productId",
      element: <ProductDetails />,
    },
    {
      path: "/cart",
      element: <Cartpage cart={count} setCart={setcount} />,
    }
  ])

  return (
    <div>
      <RouterProvider  router={router}  />

    </div>
  );
}
export default App;

// *****************************
