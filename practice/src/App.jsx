import ProductCard from "./ProductCard"

function App() {
  const productName="biscuit"
    const price=30
    const isAvailable=false
  

  return (
    <>
      <ProductCard name={productName} p={price} aval={isAvailable}/>
    </>
  )
}

export default App
