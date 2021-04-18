import UseStyles from './product-card.styles'
import classNames from 'classnames'

const ProductCard = ({className, product}) => {
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