import React from "react";
import styles from "./Category.module.scss";
import { Link } from "react-router-dom";

export default function Category({ title, image, description }) {
  return (
    <div className="card large">
      <div className="card-image">
        <img src={image} />
        {/* <span className={`${styles.title} card-title`}>{title}</span> */}
      </div>
      <div className="card-content">
        <h4 className={styles.title}>{title}</h4>

        {description.length > 150?(<p>{description.slice(0, 150)}...</p>):
        <p>{description}</p>}


      </div>
      <div className="card-action">
        <Link to={`/category/${title}`}>Watch Category</Link>
      </div>
    </div>
  );
}
