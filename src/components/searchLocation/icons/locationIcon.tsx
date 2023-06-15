import * as React from 'react';
import { JSX } from 'react/jsx-runtime';

export const LocationIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={31}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M12.569 7.503a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
    />
    <path
      fill="#fff"
      d="M12.569 30.003a6.59 6.59 0 0 1-5.389-2.75C2.416 20.68 0 15.74 0 12.569a12.569 12.569 0 1 1 25.137 0c0 3.172-2.416 8.112-7.18 14.684a6.589 6.589 0 0 1-5.388 2.75Zm0-27.274a9.854 9.854 0 0 0-9.843 9.842c0 2.513 2.367 7.159 6.661 13.083a3.932 3.932 0 0 0 6.363 0c4.295-5.924 6.661-10.57 6.661-13.083A9.854 9.854 0 0 0 12.57 2.73Z"
    />
  </svg>
);
