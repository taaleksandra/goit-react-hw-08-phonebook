import React, { Children } from 'react';
import { Outlet } from 'react-router-dom';

import { UserMenu } from 'components/UserMenu/UserMenu';

export const Layout = ({ children }) => {
  return (
    <main>
      <nav>
        <button>Sign in</button>
        <button>Sign up</button>
        <UserMenu />
      </nav>
      {children}
    </main>
  );
};
