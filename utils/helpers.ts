import { Query } from 'types/types';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const isEmpty = (val: any) => {
  return val === undefined || val == null || val.length <= 0 ? true : false;
};

export const slugify = (str: string) => {
  const badChars = '#!?;./`´§%&)(/$,:+';
  for (let c of badChars) {
    str = str.replaceAll(c, '');
  }
  str = str.trim().toLowerCase().replaceAll(' ', '-').replace(/-+/g, '-');
  return str;
};

export const toJson = (value: any) => {
  return JSON.parse(JSON.stringify(value));
};

export const removeEmptyParams = (obj: Query): Query => {
  return (
    Object.fromEntries(
      Object.entries(obj).filter(
        ([_, item]: any) => item != null && item.toString().trim() !== ''
      )
    ) ?? {}
  );
};
