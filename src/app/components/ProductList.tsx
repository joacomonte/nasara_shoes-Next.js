import ProductCard from './ProductCard';
import products from '../data/products.json'; // Path to your JSON file

const ProductList = () => {
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', marginBottom:'50px'}}>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </section>
  );
}

export default ProductList;