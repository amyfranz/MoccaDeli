import React from "react";
import "./Products.css";
import GridDisplay from "../../components/GridDisplay";
import imgs from "./ProductData";

export default function Products() {
  const gridNum = Math.floor(imgs.length / 13);
  const arr = Array.from(Array(gridNum).keys());
  return (
    <div className="products">
      {arr.map((i) => (
        <GridDisplay products={imgs.slice(i * 13, (i + 1) * 13)} key={i} />
      ))}
      <GridDisplay
        products={imgs.slice(gridNum * 13, imgs.length)}
        key={"last"}
      />
    </div>
  );
}
