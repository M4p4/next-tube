import { SearchIcon } from '@heroicons/react/outline';
import DropDown from '@ui/Dropdown';
import { TAG_ROLES_DROPDOWN } from 'constants/panel';
import useQueryPush from 'hooks/useQueryPush';
import React, { FC, useState } from 'react';
import { TagRole, TagStateType } from 'types/types';

type Props = {
  role: TagRole | null;
  search: string;
  state: TagStateType;
};

const defaultRoleQuery = null;

const roleItems = [
  {
    label: 'All Roles',
    query: defaultRoleQuery,
  },
  ...TAG_ROLES_DROPDOWN,
];

const defaultStateQuery = null;

const stateItems = [
  {
    label: 'All States',
    query: defaultStateQuery,
  },
  {
    label: 'Priority',
    query: 'priority',
  },
  {
    label: 'Normal',
    query: 'normal',
  },
];

const TagsFilters: FC<Props> = ({ role, search, state }) => {
  const [searchQuery, setSearchQuery] = useState(search);
  const [selectedRoleFilterQuery, setSelectedRoleFilterQuery] = useState(role);
  const [selectedStateFilterQuery, setSelectedStateFilterQuery] =
    useState(state);

  const queryPush = useQueryPush();

  const updateStateFilterQuery = (newQuery: string | null) => {
    setSelectedStateFilterQuery(newQuery as TagStateType);
    queryPush.setQueryParam({ state: newQuery });
  };

  const updateRoleFilterQuery = (newQuery: string | null) => {
    setSelectedRoleFilterQuery(newQuery as TagRole | null);
    queryPush.setQueryParam({ role: newQuery });
  };

  return (
    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center w-full rounded-lg bg-slate-800 px-4 py-3 mb-4">
      <div className="flex w-full md:w-auto">
        <input
          value={searchQuery}
          className="bg-slate-700 text-gray-300 focus:outline-none w-full md:w-72 rounded-l-md px-4 py-2 md:py-3 text-sm font-medium"
          type="text"
          placeholder="Search in titles..."
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button
          onClick={() => {
            queryPush.setQueryParam({ search: searchQuery });
          }}
          className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-r-md"
        >
          <SearchIcon className="h-5 w-5 text-white" />
        </button>
      </div>

      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 w-full md:w-auto">
        <DropDown
          items={stateItems}
          selectedQuery={selectedStateFilterQuery as string}
          updateFilterQuery={updateStateFilterQuery}
        />
        <DropDown
          items={roleItems}
          selectedQuery={selectedRoleFilterQuery as string}
          updateFilterQuery={updateRoleFilterQuery}
        />
      </div>
    </div>
  );
};

export default TagsFilters;
