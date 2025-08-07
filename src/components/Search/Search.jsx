import React, { useState } from "react";
import styles from "./Search.module.scss";

export default function Search() {
  const [inputValue, setInputValue] = useState("");

  function handleSearch(event) {
    setInputValue(event.target.value);
  }

//   1.отрисовать код (взять из библиотеки или самому)
//   2. useState - для отслеживания изменений в input
//   3. в разметку ввести value={inputValue}
//   4. написать функцию для отслеживания изменений в input
//   5. добавить в разметку onChange={handleSearch}

  return (
    <>
      <form action="#">
        <div className={`input-field ${styles.block}`}>
          <button className={`btn ${styles.btn}`}>
            <span>Search</span>
          </button>
          <input
            type="text"
            onChange={handleSearch}
            value={inputValue}
            placeholder="Введите название категории"
          />
        </div>
      </form>
    </>
  );
}
