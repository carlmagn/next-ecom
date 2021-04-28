import UseStyles from './header.styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar'

type HeaderProps = {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const classes = UseStyles();

  return (
    <div className={classNames(className, classes.root)} >
      <AppBar position="fixed"> yoyoyo </AppBar>
    </div>
  )
}

export default Header;