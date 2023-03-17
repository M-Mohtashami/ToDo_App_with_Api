import { El } from '@/library';

export const Textfield = ({ label, name, ...inputProps }) => {
  return El({
    element: 'div',
    className: 'relative',
    children: [
      El({
        element: 'label',
        for: 'outlined_success',
        className:
          'absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1',
        children: label || '',
      }),
      El({
        element: 'input',
        type: 'text',
        name: name,
        id: 'outlined_success',
        className:
          'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer',
        placeholder: ' ',
        ...inputProps,
      }),
    ],
  });
};
