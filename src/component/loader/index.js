import { El } from '@/library';
export const loader = () => {
  return El({
    element: 'div',
    id: 'loader',
    className:
      'fixed left-[50%] top-[40%] px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse',
    innerText: 'loading...',
  });
};
