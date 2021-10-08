import React from "react";
import styles from "./Card.module.css";

function Card({ children }) {
  return <div id={styles.card}>{children}</div>;
}

export default Card;
