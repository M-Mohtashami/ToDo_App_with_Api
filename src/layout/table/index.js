import { El, handleTable } from '@/library';

export const tableOfContents = () => {
  return El({
    element: 'table',
    className: 'w-full text-sm text-gray-700',
    children: [
      El({
        element: 'thead',
        children: [
          El({
            element: 'tr',
            children: [
              El({
                element: 'th',
                className: 'border-2 text-left p-4 pl-8',
                innerText: 'Task Name',
              }),
              El({
                element: 'th',
                className: 'border-2',
                innerText: 'Priority',
              }),
              El({
                element: 'th',
                className: 'border-2',
                innerText: 'Status',
              }),
              El({
                element: 'th',
                className: 'border-2',
                innerText: 'Deadline',
              }),
              El({
                element: 'th',
                className: 'border-2',
                innerText: 'Actions',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'tbody',
        id: 'tbody',
        eventListener: [
          {
            event: 'click',
            callback: handleTable,
          },
        ],
        children: [],
      }),
    ],
  });
};
