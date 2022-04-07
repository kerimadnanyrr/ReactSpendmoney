import React from "react";

const Products = ({ products, setBasket, basket, total, money }) => {
  //3. basket ve setbasketi gonderıyoruz
  const basketİtem = basket.find((item) => item.id === products.id); //amount un içine yoluuyoruz

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === products.id); //eğer gonderdıgımız urun ıd ile item id eşitse
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== products.id),
        checkBasket,
      ]); //id ler eşit değilse amount için yeni product ekle yoksa ekleme
    } else {
      setBasket([
        ...basket,
        {
          id: products.id,
          amount: 1,
        },
      ]);
    }
  };

  const removefromBasket = () => {
    const checkBasket = basket.find((item) => item.id === products.id);
    checkBasket.amount -= 1;
    if (checkBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== products.id)]); //amount 0  sa basketten cıkarıyoruz.
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== products.id),
        checkBasket,
      ]); //eğer checkbasket 0 degıl ıse eksıltebılırsın
    }
  };
  return (
    <div>
      <div className="card">
        <img className="images" src={products.image} alt="" />
        <div className="card-body">
          <h4>
            {" "}
            {products.title}- ${products.price}
          </h4>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              disabled={total + products.price > money}
              onClick={addBasket}
              className="btn btn-success"
            >
              
              Satın Al
            </button>
            <span className="amount">
            <button type="button" className="btn btn-secondary"> {basketİtem ? basketİtem.amount : 0}{" "}</button> 
            </span>
            <button
              disabled={!basketİtem}
              onClick={removefromBasket}
              type="button"
              className="btn btn-danger"
            >
              İade Et
            </button>
                       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
