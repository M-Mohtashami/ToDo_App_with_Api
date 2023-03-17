import { El } from '@/library';

export const Formoption = ({ value, ...optionProps }) => {
  return El({
    element: 'option',
    className: `px-1 py-2 outline-none border rounded-md`,
    innerText: value,
    value,
    ...optionProps,
  });
};
