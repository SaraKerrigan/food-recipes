import React from "react";
import styles from "./Meal.module.scss";
import { Link } from "react-router-dom";

export default function Meal({ id, title, image, categoryName }) {
  return (
    <div className="card large">
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="card-content">
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div className="card-action">
        <Link to={`/category/${categoryName}/${id}`}>Watch Recipe</Link>
      </div>
    </div>
  );
}
