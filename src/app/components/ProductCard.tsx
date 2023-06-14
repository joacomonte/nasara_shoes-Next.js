import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className='productCard-Container'>
        <div className='productCard-Container__image'>
            <Image src={`${product.image}`}alt={product.name} width={300} height={300} />
        </div>
      <h1>{product.name}</h1>
      <h4>{product.description1}</h4>
      <h4>{product.description2}</h4>
      <div style={{display: 'flex', justifyContent: 'space-around', paddingRight:'20px',alignItems:'center', marginTop:'20px'}}>
      <h3>{product.price}</h3>
      <button>Preguntar Stock</button>
      </div>
    </div>
  );
}

  
  export default ProductCard;