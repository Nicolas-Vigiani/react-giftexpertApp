import React, { useState } from 'react';
import PropTypes from 'prop-types'



export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // para evitar que al apretar enter actualice la pag
       
        
        //console.log('submit hecho')
        // el if de abajo es para que agregue solamente si escribi algo en el input , es decir no agregue espacios vacios en milista o busqueda
        if( inputValue.trim().length > 2){
            setCategories((categorias) => [inputValue,...categorias]);
            setinputValue(''); // esta linea sirve para dejar vacio el input luego depresionar enter y evitar que se guardedos veces elvalor pordefecto

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}