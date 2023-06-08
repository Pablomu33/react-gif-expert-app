import { useState } from "react"
import PropTypes from "prop-types"

export const AddCategory = ({onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange =({target})=>{

        setInputValue(target.value)
    }

    const onSubmit= (event)=>{
        event.preventDefault()
       // console.log(inputValue)
      if(inputValue.trim().length<= 1 ) return;

      onNewCategory(inputValue.trim()) 
        //setCategories (categories => [ inputValue, ...categories])
        setInputValue('')
    }
  return (
    
    <form onSubmit={ onSubmit} aria-label="form" >
      <input
      type="text"
      placeholder="buscar Gif"
      value= {inputValue}
      onChange={ onInputChange }
      />
      
    </form>
            
      )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}