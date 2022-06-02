import React from "react";
import './Search.css'

export default function Search({setSearch,search}) {
  return (
    <div className="Search">
      <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value) }/>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}
