import React from "react";
import Category from "../Category/Category";
import styles from "./Categories.module.scss";

export default function Categories({ categoriesList, filteredCategoriesList }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {filteredCategoriesList.length > 0
          ? filteredCategoriesList.map((el) => {
              return (
                <Category
                  key={el.idCategory}
                  id={el.idCategory}
                  title={el.strCategory}
                  image={el.strCategoryThumb}
                  description={el.strCategoryDescription}
                />
              );
            })
          : categoriesList.map((el) => {
              return (
                <Category
                  key={el.idCategory}
                  id={el.idCategory}
                  title={el.strCategory}
                  image={el.strCategoryThumb}
                  description={el.strCategoryDescription}
                />
              );
            })}
      </div>
    </div>
  );
}
