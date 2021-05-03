import UseStyles from './product-card.styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import {ReactComponent as AddToCartIcon} from '@icons/add-to-cart.svg'

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
      <div className={classes.imageContainer}>
        <img className={classes.image} src={product.image} />
      </div>
      <div className={classes.title}>{product.title}</div>
      <div className={classes.priceAndButtonContainer}>
        <div className={classes.price}>{product.price}<span className={classes.currency}>kr</span></div>
        <Button variant='outlined'>
          <AddToCartIcon className={classes.addToCartIcon} />
        </Button>
      </div>
    </div>
  )
}

export default ProductCard;