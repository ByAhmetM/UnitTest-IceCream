import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card";
import axios from "axios";

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4500/scoops").then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div className="container my-5 ">
      <h1>Dondurma Çeşitleri</h1>
      <p>
        Tanesi : <span className="text-success"> 20 ₺</span>
      </p>
      <h3>
        Çeşitler Ücreti{" "}
        <span className="text-success">{basket.length * 20} ₺</span>
      </h3>

      <div className="row gap-5 justify-content-between mt-4 p-3">
        {data?.map((item, i) => (
          <Card setBasket={setBasket} basket={basket} key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
