import React from "react";
import "./Filter.css";

export default function Filter({ state, handleChange,setSort }) {
  return (
    <div className="col-md-3">
      <h2 style={{ margin: "5% 0" }}>Filters</h2>

      <h4>Category</h4>
      <ul className="Filter-list">
        <li>
          <input
            type="checkbox"
            name="men"
            checked={state.men}
            onChange={(e) => handleChange(e, "men")}
          />
          <label htmlFor="men"> Men's Clothing</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="jewelery"
            checked={state.jewelery}
            onChange={(e) => handleChange(e, "jewelery")}
          />
          <label htmlFor="jewelery"> Jewelery</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="electronics"
            checked={state.electronics}
            onChange={(e) => handleChange(e, "electronics")}
          />
          <label htmlFor="electronics"> Electronics</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="women"
            checked={state.women}
            onChange={(e) => handleChange(e, "women")}
          />
          <label htmlFor="women"> Women's Clothing</label>
        </li>
      </ul>
      <h4>Sort By</h4>
      <ul className="Filter-list">
        <li>
         
          <button  onClick={() => setSort('name')}>Name</button>
        </li>
        <li>
         
          <button onClick={() => setSort('price')} > Price</button>
        </li>
       
      </ul>
    </div>
  );
}
