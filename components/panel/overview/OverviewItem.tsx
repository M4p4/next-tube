import {
  CollectionIcon,
  HashtagIcon,
  UsersIcon,
  VideoCameraIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  title: string;
  count: number;
  href: string;
};

const getIcon = (icon: string) => {
  const map: Record<string, any> = {
    Videos: (
      <VideoCameraIcon className="w-10 h-10 text-black duration-500 group-hover:transition-all group-hover:rotate-12" />
    ),
    Tags: (
      <HashtagIcon className="w-10 h-10 text-black duration-500 group-hover:transition-all group-hover:rotate-12" />
    ),
    Categories: (
      <CollectionIcon className="w-10 h-10 text-black duration-500 group-hover:transition-all group-hover:rotate-12" />
    ),
    Actors: (
      <UsersIcon className="w-10 h-10 text-black duration-500 group-hover:transition-all group-hover:rotate-12" />
    ),
  };

  return (
    map[icon] ?? (
      <ViewGridIcon className="w-10 h-10 text-black duration-500 group-hover:transition-all group-hover:rotate-12" />
    )
  );
};

const OverviewItem: FC<Props> = ({ title, count, href }) => {
  return (
    <Link href={href}>
      <a className="w-full">
        <div className="bg-slate-800 text-gray-100 p-3 rounded-md w-full flex flex-row justify-between items-center border-b-4 border-slate-700 group">
          <div className="rounded-full p-2 bg-slate-100">{getIcon(title)}</div>
          <div className="flex flex-col items-center justify-center w-24 md:w-auto">
            <div className="text-2xl font-semibold text-indigo-500">
              {count}
            </div>
            <div className="font-semibold text-base">{title}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default OverviewItem;
