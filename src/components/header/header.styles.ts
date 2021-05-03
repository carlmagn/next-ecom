import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  appBar: {
  },
  iconButton: {
    width: 'fit-content'
  },
  menuIcon: {
    width: 48,
    height: 48,
  }
}), {
  name: 'Header',
});