import "./ProductCard.css"
function ProductCard(items){
    
    return(
        <div className="container">
            <p className="title">Name of product:{items.productName}</p>
            <p className="price">PRICE:₹{items.price}</p> 
            {items.isAvailable===true?<p className="stock1">In sock</p>:<p className="stock2">Out of stock</p>}     
        </div>
    )
}
export default ProductCard;