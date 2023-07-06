import React from 'react'
import MealImage from '../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
function Header(props) {
  return (
    <>
    <header className={classes.header}>
        <h1>Falcon Meals</h1>
        <HeaderCartButton />
    </header>
    <div className={classes['main-image']}><img src={MealImage} alt=''/></div>
    </>
  )
}

export default Header