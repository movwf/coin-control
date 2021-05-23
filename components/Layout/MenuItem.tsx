import { useRouter } from 'next/router';
import { memo } from 'react';

import { HomeIcon } from '@heroicons/react/outline';

interface IMenuItem {
  name: string;
  icon: string;
  href: string;
}

const IconProp = 'w-5 h-5';
const Icons = {
  home: <HomeIcon className={IconProp} />
};

function MenuItem({ name, icon, href }: IMenuItem) {
  const router = useRouter();
  return (
    <li>
      <a
        href={href}
        className={`h-10 mb-3 flex items-center justify-center transition-colors rounded-md hover:bg-primary-100 dark:hover:bg-primary stroke-current ${
          router.asPath == href
            ? 'bg-primary-light text-white hover:text-primary-dark dark:bg-primary dark:text-white dark:hover:text-primary-dark'
            : 'text-black hover:text-primary-light'
        }`}
        role="button"
        aria-label={name}
      >
        {Icons[icon]}
      </a>
    </li>
  );
}

export default memo(MenuItem);
