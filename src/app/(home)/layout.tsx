import type { ReactNode } from 'react';

import { HomeLayout } from 'fumadocs-ui/layouts/home';

import { baseOptions } from '@/app/layout.config';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => <HomeLayout {...baseOptions}>{children}</HomeLayout>;

export default Layout;
