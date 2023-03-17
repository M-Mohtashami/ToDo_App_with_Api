import { El } from '@/library';

export const Drawer = (child) => {
  return El({
    element: 'div',
    id: 'drawer',
    className:
      'fixed top-[-10000px] h-full w-full backdrop-blur-sm flex items-center justify-center transform transition duration-200 ease-linear delay-200',
    children: [child],
  });
};
