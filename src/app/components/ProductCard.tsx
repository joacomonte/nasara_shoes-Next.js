import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  description1: string;
  description2: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

  const whatsAppMessage = encodeURIComponent(`Consulta sobre el stock de ${product.name}`);

  const handleButtonClick = () => {
    window.location.href = "https://wa.link/8gwob4";
  };
  return (
    <div className="productCard-Container">
      <div className="productCard-Container__image">
        <Image
          src={`${product.image}`}
          alt={product.name}
          width={300}
          height={300}
        />
      </div>
      <h1>{product.name && product.name}</h1>

      {product.description1 && <h4>{product.description1}</h4>}

      {product.description2 && <h4>{product.description2}</h4>}

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingRight: "20px",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {product.price && <h3>{product.price}</h3>}
        <Link href={`https://api.whatsapp.com/send?phone=5491130347719&text=${whatsAppMessage}`}>
          <button>Preguntar Stock</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
