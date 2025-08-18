import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meals from "../../components/Meals/Meals";
import styles from "./CategoryPage.module.scss";
import GoBack from "../../components/GoBack/GoBack";
import Preloader from "../../components/Preloader/Preloader";

export default function CategoryPage() {
  const [mealsList, setMealsList] = useState([]);

  const [status, setStatus] = useState(true);

  const { name } = useParams();
  //   через useParams достается динамическое значение параметра с двоеточием с Route

  

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setMealsList(data.meals);
        setStatus(false);
      });
  }, [name]);

  return (
    <div className={styles.container}>
      <GoBack />
      {status === true ? (
        <Preloader />
      ) : (
        <Meals mealsList={mealsList} categoryName={name} />
      )}
    </div>
  );
}
