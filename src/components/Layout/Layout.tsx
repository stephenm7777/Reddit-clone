import React, {ReactNode} from 'react';
import NavBar from '../NavBar/NavBar';

interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <NavBar />
        {children}
      </>
    );
  };
  
  export default Layout;