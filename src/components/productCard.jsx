export default function ProductCard(props){

  console.log(props)
  
  return (
    <div>
      <img src={props.src} />
      <button>Add to cart</button>
      <h1>{props.name}</h1>
      <h2>Price: {props.price}</h2>      
    </div>

  )
}

