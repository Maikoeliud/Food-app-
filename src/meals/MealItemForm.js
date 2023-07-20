import React from 'react'
import classes from './MealItemForm.module.css'
import Input from './Input'
function MealItemForm() {
  return (
    <form className={classes.form}>
      <Input label='Amount' input={{ id:'amout',
    min:'1',max:'5',type:'number', defaultValue:'1'}}/>
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm