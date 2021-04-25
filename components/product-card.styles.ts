import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    width: 300,
    height: 400,
    flexDirection: 'column',
    padding: 16,
    background: 'white',
    margin: 20,
    borderRadius: 8,
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 8,
    borderBottom: '1px solid #cccccc',
    paddingBottom: 8,
  },
  image: {
    width: 220,
    height: 220,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceAndButtonContainer: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between'
  },
  price: {
    fontSize: 32,
    display: 'flex',
    alignItems: 'baseline',
  },
  currency: {
    fontSize: 24,
    display: 'flex',
  },
  addToCartIcon: {
    height: 30,
    width: 30,
  },
}), {
  name: 'ProductCard',
});