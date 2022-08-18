import React from 'react';
import './styles.css';

export const Fatal = (props) => {
  return (
    <div>
        <h1>404 Error Page</h1>
        <p className="zoom-area">{props.message}</p>
        <section className="error-container">
            <span>4</span>
            <span><span className="screen-reader-text">0</span></span>
            <span>4</span>
        </section>
    </div>
  )
}
