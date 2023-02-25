import "./ProductCard.css"

const ProductCard = ({title, price=0,isRed}) => {

  //let {title, price} =props


  return (
    <div>
        <h1 className={ isRed? "red": "blue" }> {title}</h1>
        <h2>{price}</h2>
        </div>
  )
}

export default ProductCard

