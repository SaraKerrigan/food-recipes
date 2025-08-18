import React from 'react'
import styles from "./item.module.scss"

export default function Item({title}) {
  return (
    <div className={styles.item}>{title}</div>
  )
}
