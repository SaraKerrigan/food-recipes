import React, { useState } from "react";
import styles from "./Search.module.scss";

export default function Search({ searchCategory }) {
  const [inputValue, setInputValue] = useState("");

  const [isEmpty, setIsEmpty] = useState(false);

  function swither() {
    if (inputValue) {
      searchCategory(inputValue);
     
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }

  function handleSearch(event) {
    setInputValue(event.target.value);
     setIsEmpty(false);
  }

  //   1.отрисовать код (взять из библиотеки или самому)
  //   2. useState - для отслеживания изменений в input
  //   3. в разметку ввести value={inputValue}
  //   4. написать функцию для отслеживания изменений в input
  //   5. добавить в разметку onChange={handleSearch}

  return (
    <div className={styles.container}>
      {/* <form action="#"> */}
      <div className={`input-field ${styles.block}`}>
        <button className={`btn ${styles.btn}`} onClick={swither}>
          <span>Search</span>
        </button>
        <input
          type="text"
          onChange={handleSearch}
          value={inputValue}
          placeholder="Введите название категории"
        />
      </div>
      {isEmpty === true ? (
        <div className={styles.tooltip}>
          поле для ввода поиска не должно быть пустым
        </div>
      ) : (
        ""
      )}

      {/* </form> */}
    </div>
  );
}
