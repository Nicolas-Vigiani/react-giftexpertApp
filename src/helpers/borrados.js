// va en gifGrid
return (
    <>
        <h3> {category} </h3>
        <div className="card-grid">

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

// va en gifGrid
return (
    <>
        <h3> {category} </h3>
      { loading ? "Cargando..." : "Data Cargada"} 
    </>
)