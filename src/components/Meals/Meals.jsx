import React from "react";
import Meal from "../Meal/Meal";
import styles from "./Meals.module.scss";

export default function Meals({ mealsList, categoryName }) {
  return (
    <div className={styles.content}>
      {mealsList.map((el) => {
        return (
          <Meal
            key={el.idMeal}
            //   key - не является пропсом и в Meal не принимается
            id={el.idMeal}
            title={el.strMeal}
            image={el.strMealThumb}
            categoryName={categoryName}
          />
        );
      })}
    </div>
  );
}
