import UseStyles from './product-card.styles'
import classNames from 'classnames'

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

type ProductCardProps = {
  className?: string;
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ className, product}) => {
  const classes = UseStyles();

  return (
    <div className={classNames(className, classes.root)} >
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
    </div>
  )
}

export default ProductCard;