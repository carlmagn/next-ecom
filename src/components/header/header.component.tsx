import UseStyles from './header.styles';
import classNames from 'classnames';

type HeaderProps = {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const classes = UseStyles();

  return (
    <div className={classNames(className, classes.root)} >
    </div>
  )
}

export default Header;