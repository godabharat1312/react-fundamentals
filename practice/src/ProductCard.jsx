function ProductCard({name,p,aval}){
    
    return(
        <>
            <p>name of product:{name}</p>
            <p>PRICE:{p}</p>
            <p>{aval===true?"Product is Available":"product not Available"}</p>        
        </>
    )
}
export default ProductCard;