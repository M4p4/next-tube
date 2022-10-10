/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import { Tag } from 'types/types';
import ActionButton from '../ActionButton';
import PanelTag from '../Tag';

type Props = {
  tag: Tag;
  deleteHandler: (id: string) => Promise<void>;
  editHandler: (id: string) => void;
  changeRoleHandler: (id: string) => void;
  priorityUpHandler: (id: string) => Promise<void>;
  priorityDownHandler: (id: string) => Promise<void>;
};

const TagTableRow: FC<Props> = ({
  tag,
  deleteHandler,
  editHandler,
  priorityUpHandler,
  priorityDownHandler,
  changeRoleHandler,
}) => {
  return (
    <tr className="bg-slate-800 hover:bg-slate-700/80 text-gray-400 hover:text-gray-300 text-sm">
      <td className="px-4 py-3">
        <div className="flex flex-row space-x-2 justify-start items-center">
          {tag.priority && <PanelTag label="priority" color="yellow" />}
          <PanelTag label={tag.role} color="gray" />
          <div className="font-thin text-xs">{tag.id}</div>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex flex-row md:space-x-2 items-center">
          <img
            className="hidden md:flex w-12 h-12 rounded-md"
            src={tag.image ? tag.image : '/images/placeholder-actor.png'}
            alt={tag.name}
          />
          <div className="font-semibold">{tag.name}</div>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="font-semibold">{tag.relatedTags.length}</div>
      </td>
      <td className="px-4 py-3">
        <div className="flex flex-row items-center">
          {tag.priority ? (
            <ActionButton
              actionMode="priorityDown"
              actionHandler={priorityDownHandler.bind(null, tag.id)}
            />
          ) : (
            <ActionButton
              actionMode="priorityUp"
              actionHandler={priorityUpHandler.bind(null, tag.id)}
            />
          )}
          <ActionButton
            actionMode="changeRole"
            actionHandler={changeRoleHandler.bind(null, tag.id)}
          />
          <ActionButton
            actionMode="edit"
            actionHandler={editHandler.bind(null, tag.id)}
          />
          <ActionButton
            actionMode="delete"
            actionHandler={deleteHandler.bind(null, tag.id)}
          />
        </div>
      </td>
    </tr>
  );
};

export default TagTableRow;
