import UseStyles from './index-layout.styles'
import classNames from 'classnames'

type IndexLayoutProps = {
  className?: string;
}

const IndexLayout: React.FC<IndexLayoutProps> = ({ className, children }) => {
  const classes = UseStyles();

  return (
    <div className={classNames(className, classes.root)} >
      {children}
    </div>
  )
}

export default IndexLayout;