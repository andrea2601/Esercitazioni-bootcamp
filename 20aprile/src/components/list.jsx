import { Product } from "./product";
import { useState, useEffect } from "react";

const productList = ["prodotto 1", "prodotto 2", "prodotto 3"];

export const List = () => {
  const [products, setProducts] = useState(productList);

  const getData = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/"
    );
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);



  return (
    <section>
      <ul className="grid">
        {products.map((item, index) => (
          <li key={index}>
            <Product img={item.image} title={item.title} price={item.price}/>
          </li>
        ))}
      </ul>
    </section>
  );
};
