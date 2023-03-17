import { El } from '@/library';

export const Button = ({ element = 'button', ...rest }) => {
  return El({
    element,
    ...rest,
  });
};
