import type { ReactNode } from 'react';

import { HomeLayout } from 'fumadocs-ui/layouts/home';

import { baseOptions } from '@/app/layout.config';

const Layout = ({ children }: { children: ReactNode }) => {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
};

export default Layout;
