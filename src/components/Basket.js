import React from "react";
import Basketitem from "./Basketitem";
import Products from "./Products";

const Basket = ({ basket, products,total,resetbasket }) => {
  return (
    <div>

      <div className="basket-container container">
      <h3 className="title">Alışveriş Tutarı</h3>

        {basket.map((item) => (
          <Basketitem
            products={products.find((p) => p.id === item.id)}
            item={item}
          ></Basketitem>
          
          
        ))}
        <button className="btn btn-danger" onClick={resetbasket}> Reset</button>
        <br />
        <h4 className="total">   Total :{total}</h4>
      

      


      </div>
    </div>
    //map in içinde item paramatresine attıgımız ıcın find yapıp item degıskenına atadık
  );
};

export default Basket;
