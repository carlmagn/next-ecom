import UseStyles from './header.styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import {ReactComponent as MenuIcon} from '@icons/hamburger-menu.svg'

type HeaderProps = {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const classes = UseStyles();

  return (
    <div className={classNames(className, classes.root)} >
      <AppBar className={classes.appBar} position="fixed">
        <IconButton className={classes.appBar}>
          <MenuIcon className={classes.menuIcon}/>
        </IconButton>
      </AppBar>
    </div>
  )
}

export default Header;