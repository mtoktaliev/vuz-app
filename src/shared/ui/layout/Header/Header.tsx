import classNames from 'classnames';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, className = '' }) => {
  

  const headerClass = classNames(
    
    className
  );

  return <div className={headerClass}>{children}</div>;
};
