import React, { useEffect, useState } from "react";
import styles from "./Recipe.module.scss";
import GoBack from "../../components/GoBack/GoBack";
import { useParams } from "react-router-dom";
import Item from "../../components/Item/Item";
import Preloader from "../../components/Preloader/Preloader";

export default function Recipe() {
  const { idMeal } = useParams();

  const [recipe, setRecipe] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.meals[0]);
        setIsLoading(false);
      });
  }, [idMeal]);

  // const obj = recipe;

  // const { strIngredient1 } = obj;

  const ingredients = Object.keys(recipe)
    .filter((key) => key.startsWith("strIngredient") && recipe[key])
    .map((key) => recipe[key].trim());

  const measures = Object.keys(recipe)
    .filter((key) => key.startsWith("strMeasure") && recipe[key])
    .map((key) => recipe[key].trim());

  const v = recipe["strYoutube"];

  const fragment = v?.slice(-11);

  // 32

  // 11

  return (
    <div className={styles.container}>
      <GoBack />
      {isLoading === true ? (
        <Preloader />
      ) : (
        <div className={styles.item}>
          <img className={styles.image} src={recipe.strMealThumb} alt="" />
          <h1>{recipe.strMeal}</h1>
          {recipe.strCategory ? <h3>Category: {recipe.strCategory}</h3> : ""}
          {recipe.strArea ? <h4>{recipe.strArea}</h4> : ""}
          {/* {recipe.strArea && <h4>{recipe.strArea}</h4>} */}
          <p>{recipe.strInstructions}</p>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h4>ingredients</h4>
              {ingredients.map((el, index) => {
                return <Item key={index} title={el} />;
              })}
            </div>
            <div className={styles.column}>
              <h4>measures</h4>
              {measures.map((el, index) => {
                return <Item key={index} title={el} />;
              })}
            </div>
          </div>
          {v ? (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${fragment}`}
              // {nMyBC9staMU}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            ""
          )}

          {/* <table>
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Measure</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(recipe).map((key) => {
              if (key.includes("strIngredient") && recipe[key]) {
                return (
                  <tr key={key}>
                    <td>{recipe[key]}</td>
                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table> */}

          {/* Object.keys() */}
        </div>
      )}
    </div>
  );
}
