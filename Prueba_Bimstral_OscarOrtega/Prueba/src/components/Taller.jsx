

const Taller =(props)=>{
    const {nombre, nivel} = props
    console.log(props)
    return(
        <div>
            <h1><strong>{nombre}</strong></h1>
            <span>{nivel}</span>
        </div>
    )
}

export default Taller;