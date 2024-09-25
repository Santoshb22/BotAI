import React from 'react';
import styles from "./RatingFilter.module.css";
const RatingFilter = ({onChange}) => {
  return (
    <div className={styles.ratingContainer}>
        <label htmlFor="ratings">Filter by ratings: </label>
        <select name='ratings' id='ratings' onChange={onChange}>
            <option value="" defaultChecked>All</option>
            <option value="1">1 ★</option>
            <option value="2">2 ★</option>
            <option value="3">3 ★</option>
            <option value="4">4 ★</option>
            <option value="5">5 ★</option>
        </select>
  </div>
  )
}

export default RatingFilter;