// You do not need to change any code in this file for MVP
import React from "react";

const SearchBar = (props) => {
  const{setSearchTerm}=props
  const changeHandler = event =>{
    setSearchTerm(event.target.value)
  }
  return (
    <div className="search-bar-wrapper">
      <div className="social">📷</div>
      <form className="search-form">
        {/* <input onChange={setSearchTerm} type="text" placeholder="Search for a post..." /> */}
        <input onChange={changeHandler} type="text" placeholder="Search for a post..." />
      </form>
      <div className="social-wrapper">
        <div className="social">🫶</div>
        <div className="social">💛</div>
        <div className="social">⭕</div>
      </div>
    </div>
  );
};

export default SearchBar;
