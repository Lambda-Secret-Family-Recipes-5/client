import React from "react";

export default function Recipe({category, ingredients, instructions, source, title}) {
  const editRecipe = () => {

  };

  return (
    <div className="recipe-container">
      <h4>{title}</h4>
      {/* <ul> */}
      {/*   { */}
      {/*     category.map(cat => { */}
      {/*       return ( */}
      {/*         <li>{cat}</li> */}
      {/*       ); */}
      {/*     }) */}
      {/*   } */}
      {/* </ul> */}
      {/* <ul> */}
      {/*   { */}
      {/*     ingredients.map(ingredient => { */}
      {/*       return ( */}
      {/*         <li>{ingredient}</li> */}
      {/*       ); */}
      {/*     }) */}
      {/*   } */}
      {/* </ul> */}
      <p>{instructions}</p>
      <p>{source}</p>
      <button onClick={editRecipe}>Edit Recipe</button>
    </div>
  );
};
