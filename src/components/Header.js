import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({searchTerm}){
  const signOut = () => {
    
  };

  return (
    <header>
      <Search searchTerm={searchTerm}/>
      <Link to="/add-recipe">Add Recipe</Link>
      <button onClick={signOut}>Sign Out</button>
    </header>
  );
};
