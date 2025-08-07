import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories/categories";
import Search from "../../components/Search/Search";
import styles from "./Home.module.scss";
import Preloader from "../../components/Preloader/Preloader";

export default function Home() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [status, setStatus] = useState(true);

  function searchCategory() {}

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesList(data.categories);
        setStatus(false);
        //  setStatus(false) - загрузки больше нет
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Search />
      {status === true ? (
        <Preloader />
      ) : (
        <Categories categoriesList={categoriesList} />
      )}
    </div>
  );
}
