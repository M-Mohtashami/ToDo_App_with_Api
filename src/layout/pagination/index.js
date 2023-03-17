import { El, nextPage, prevPage, rowPerPage } from '@/library';
import { Formoption, Button } from '@/component';
import { next, prev } from '@/assets';

export const pagination = () => {
  return El({
    element: 'div',
    className:
      'float-right flex gap-2 items-center text-sm text-gray-600 mx-8 my-2',
    children: [
      El({
        element: 'span',
        className: 'font-semibold',
        innerText: 'Rows per Page :',
      }),
      El({
        element: 'select',
        id: 'row-per-page',
        eventListener: [
          {
            event: 'change',
            callback: rowPerPage,
          },
        ],
        className:
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block',
        children: [
          Formoption({
            value: 'All',
          }),
          Formoption({
            value: '5',
          }),
          Formoption({
            value: '10',
          }),
          Formoption({
            value: '20',
          }),
        ],
      }),
      El({
        element: 'span',
        id: 'rows-details',
        className: 'font-semibold',
        // innerText: '0 - 0',
      }),
      Button({
        id: 'prev',
        className: '[&_svg]:fill-gray-500 my-auto',
        eventListener: [
          {
            event: 'click',
            callback: prevPage,
          },
        ],
        innerHTML: prev,
      }),
      El({
        element: 'span',
        id: 'page',
        className: 'font-semibold',
        innerText: '1',
      }),
      Button({
        id: 'next',
        className: '[&_svg]:fill-gray-500 my-auto',
        eventListener: [
          {
            event: 'click',
            callback: nextPage,
          },
        ],
        innerHTML: next,
      }),
    ],
  });
};
