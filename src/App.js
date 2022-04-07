import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import products from "./products.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Basket from "./components/Basket";
import Basketitem from "./components/Basketitem";

function App() {
  const [money, setMoney] = useState(500);
  const [basket, setBasket] = useState([]); //1. ilk olarak bir sepet tanımladık.
  const [total, SetTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  /*reduce() metodu, dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür.
Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır. */
  useEffect(() => {
    SetTotal(
      basket.reduce((acc, item) => {
        //acc toplam degeri tutan parametre
        return (
          acc +
          item.amount *
            products.find((products) => products.id === item.id).price
        );
      }, 0) //reduce metod parametresıne baslangıc degerı verebılıyoruz bızde 0 verdık.
    );
  });

  return (
    <div className="App">
      <Header total={total} money={money}></Header>

      {products.map((products) => (
        <Products
          total={total}
          money={money}
          key={products.id}
          products={products}
          basket={basket}
       
          setBasket={setBasket}
        ></Products>
        //2.satın al bastıgımız zaman basketı guncellemek ıcın gonderıyoryz.
      ))}

   
      <Basket resetbasket={resetBasket} basket={basket} products={products} total={total}></Basket>
     
    </div>
  );
}

export default App;
