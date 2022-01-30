import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    //const [count, setCount] = useState(0);
    /* 
        const [images, setimages] = useState([])
    
        useEffect(() => {
           getGifs(category)
           .then(imgs => setimages(imgs)) // esta instruccion se ejecutara solamente la primera vez, no cada vez que se renderize el componente
        }, [category]) */
    //si la categoruia cambia se ejecutara de nuevo el use effect , gracias al [category]


    const { data:images, loading } = useFetchGifs(category); //data:images es renoombrar data por el nombre images

    
    return (
        <>
            <h3> {category} </h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid animate__animated animate__fadeIn">

                {/* <h3>{count}</h3>
                <button onClick={()=> setCount( count + 1)}></button> */}

                {
                    //images.map(({id,title}) => { //aqui dentrodelparentesis se puede poner img y luego llamar al objeto img.title e img.id pero trabjar con desestrucutracion es mejor

                    images.map(img => (

                        <GifGridItem
                            key={img.id}
                            //img={img}
                            {...img} //aqui se envia cada una de las propiedades del objeto para luegodesestructurar 
                        />

                    ))
                }


            </div >

        </>
    )


}