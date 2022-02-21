import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function AddCategory({setCategories}) {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = e => {
        setInputValue(e.target.value) // asi permite cambiar el valor del input
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        setCategories(c => [ inputValue , ...c])
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


