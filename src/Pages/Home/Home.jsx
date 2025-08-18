import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import styles from "./Home.module.scss";
import Preloader from "../../components/Preloader/Preloader";
import { useLocation, useNavigate } from "react-router-dom";
import GoBack from "../../components/GoBack/GoBack";

export default function Home() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [filteredCategoriesList, setFilteredCategoriesList] = useState([]);
  const [status, setStatus] = useState(true);

  const { pathname, search } = useLocation();
  // pathname - адрес текущей страницы, в search - записываются значения из строки 26
  const navigate = useNavigate();

  function searchCategory(inputValue) {
    if (inputValue) {
      setFilteredCategoriesList(
        categoriesList.filter((el) =>
          el.strCategory.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
      navigate({
        pathname,
        search: `?search=${inputValue}`,
      });
    }
  }

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesList(data.categories);
        if (search) {
          setFilteredCategoriesList(
            data.categories.filter((el) =>
              el.strCategory
                .toLowerCase()
                .includes(search.slice(8, search.length).toLowerCase())
            )
          );
        } else {
          setFilteredCategoriesList(data.categories);
        }
        setStatus(false);
      });
  }, [search]);

  return (
    <div className={styles.wrapper}>
      <Search
        searchCategory={searchCategory}
        filteredCategoriesList={filteredCategoriesList}
      />
      {search ? <GoBack /> : ""}

      {status === true ? (
        <Preloader />
      ) : (
        <Categories
          categoriesList={categoriesList}
          filteredCategoriesList={filteredCategoriesList}
        />
      )}
    </div>
  );
}
