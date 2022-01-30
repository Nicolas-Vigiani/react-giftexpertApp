import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [Categories, setCategories] = useState(['One Punch'])

    /*  const handleAdd = () => {
        // setcategories([...categories,"Suits"]); Manera rapida pero poco usada
        setcategories((categorias) => [...categories,'Suits']); // manera correcta tendremos un callback con el valor viejo del array y haemos que devuelva el valor delarraymas Suit en estecaso
        
     } */

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />


            <ol>
                {
                    Categories.map(category => {
                        return (
                            <GifGrid
                                key= {category}
                                category={category}

                            />
                        )
                    })
                }
            </ol>

        </>
    )
}

