import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Filter from "./components/Filter";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [state, setState] = useState({
    men: false,
    women: false,
    jewelery: false,
    electronics: false,
  });
  const [sort,setSort] = useState('');

  const handleChange = (e, name) => {
    const checked = e.target.checked;
    setState((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //   {
  //     "id": 1,
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     "price": 109.95,
  //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     "rating": {
  //         "rate": 3.9,
  //         "count": 120
  //     }
  // }

  return (
    <div className="App">
      <Navbar />
      <Search search={search} setSearch={setSearch} />
      <div className="row">
        <Filter state={state} handleChange={handleChange} setSort={setSort} />

        <div className="col-md-9">
          {data
            .filter(
              (d) =>
                d.title.toLowerCase().includes(search.toLowerCase()) &&
                {
                  /* state.men
                ? d.category === "men's clothing"
                : state.women
                ? d.category === "women's clothing"
                : state.jewelery
                ? d.category === "jewelery"
                : state.electronics
                ? d.category === "electronics"
                : d.category.includes("") */
                }
            )
            .filter(
              (d) =>
                (state.men && d.category === "men's clothing") ||
                (state.women && d.category === "women's clothing") ||
                (state.jewelery && d.category === "jewelery") ||
                (state.electronics && d.category === "electronics") ||
                (!state.men &&
                  !state.women &&
                  !state.jewelery &&
                  !state.electronics &&
                  d.category.includes(""))
            )
            .sort( (a, b) => (sort === 'name' &&( a.title > b.title ? 1 : -1)) || (sort === 'price' &&(a.price > b.price ? 1 : -1)))
            .map((d) => (
              <Card
                id={d.id}
                key={d.id}
                title={d.title}
                price={d.price}
                description={d.description}
                image={d.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
