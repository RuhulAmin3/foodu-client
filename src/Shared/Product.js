import React from "react";
import { BsSuitHeartFill, BsMinecart } from "react-icons/bs";
import { Link } from "react-router-dom";
const Product = ({gridView}) => {
  return (
    <>
      <div className={gridView ? "product border-2 border-gray-200 rounded-2xl p-2 relative group font-JosefinSans" : "product border-2 border-gray-200 rounded-2xl p-2 relative group font-JosefinSans flex items-end justify-between"}>
        {/* image */}
        <div className="product-image basis-2/6">
          <img className="group-hover:scale-110 transition-all ease-linear duration-200 w-full" src={require("../assets/images/food_1.png")} alt="food" />
        </div>
        {/* heart icon */}
        <span className="absolute top-4 right-4 text-gray-300 text-2xl cursor-pointer hover:text-black z-20">
          <BsSuitHeartFill />
        </span>

        {/* product content */}
        <div className="content text-left p-4 pt-5 basis-4/6">
          <Link
            to="/product/asdfadf"
            className="text-2xl font-bold text-heading hover:text-primary_hover"
          >
            BBQ chicken breast
          </Link>
          <p className="text-lg text-gray-500 ">
            A mighty meaty double helping of all the reasons you love our
            burger.
          </p>
          <div className="flex items-center justify-between mt-3">
            <h3 className="text-2xl text-primary font-bold">£8.00</h3>
            <div className="cart-icon">
              <BsMinecart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
