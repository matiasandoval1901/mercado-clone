//aqui el import de estilos
type ProductCardProps = {
  title: string;
  price: number;
  description: string;
  image: string;
  freeShipping?: boolean;
}

function ProductCard (props: ProductCardProps) {
  const {
    title,
    price,
    description,
    image,
    freeShipping = false
  } = props;
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        <p className='product-description'>{description} </p>
        {freeShipping && (
          <span className="free-shipping"> Envío gratis</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
