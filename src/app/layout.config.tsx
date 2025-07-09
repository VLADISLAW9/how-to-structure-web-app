import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg aria-label='Logo' height='24' width='24' xmlns='http://www.w3.org/2000/svg'>
          <circle cx={12} cy={12} fill='currentColor' r={12} />
        </svg>
        How structure web app
      </>
    )
  },
  links: []
};
