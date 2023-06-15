import * as React from 'react';
import { JSX } from 'react/jsx-runtime';

export const SearchIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="m24.708 23.236-6.213-6.213a10.425 10.425 0 1 0-1.472 1.472l6.213 6.213a1.041 1.041 0 0 0 1.472-1.472ZM10.44 18.768a8.327 8.327 0 1 1 8.327-8.327 8.336 8.336 0 0 1-8.327 8.327Z"
    />
  </svg>
);
