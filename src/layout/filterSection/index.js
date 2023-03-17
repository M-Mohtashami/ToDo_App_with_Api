import { El, filterHandler, showFilter } from '@/library';
import { Formoption } from '@/component';

export const filterSection = () => {
  return El({
    element: 'div',
    id: 'filterSec',
    eventListener: [
      {
        event: 'click',
        callback: showFilter,
      },
    ],
    className:
      'w-full h-full fixed bg-opacity-0 right-[-10000px] scale-100 transition ease-linear delay-700 border-l border-gray-200 shadow-sm',
    children: [
      El({
        element: 'div',
        className:
          'w-[300px] h-full float-right bg-white border border-gray-400 shadow-sm',
        children: [
          El({
            element: 'form',
            id: 'add-form',
            className:
              'w-full h-full bg-white relative flex gap-12 flex-col items-center justify-start pt-16 px-4',
            eventListener: [
              {
                event: 'change',
                callback: filterHandler,
              },
            ],
            children: [
              El({
                element: 'div',
                className: 'w-full flex flex-col gap-2',
                children: [
                  El({
                    element: 'lable',
                    innerText: 'Priority:',
                  }),
                  El({
                    element: 'select',
                    name: 'priority',
                    className:
                      'w-full text-gray-500 px-1 py-2 outline-none border rounded-md focus:border-2 focus:border-[#6100E8]',
                    children: [
                      Formoption({
                        value: 'All',
                        selected: true,
                      }),
                      Formoption({
                        value: 'Low',
                      }),
                      Formoption({
                        value: 'Medium',
                      }),
                      Formoption({
                        value: 'High',
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'w-full flex flex-col gap-2',
                children: [
                  El({
                    element: 'lable',
                    innerText: 'Status:',
                  }),
                  El({
                    element: 'select',
                    name: 'status',
                    className:
                      'w-full text-gray-500 px-1 py-2 outline-none border rounded-md focus:border-2 focus:border-[#6100E8]',
                    children: [
                      Formoption({
                        value: 'All',
                        selected: true,
                      }),
                      Formoption({
                        value: 'ToDo',
                      }),
                      Formoption({
                        value: 'Doing',
                      }),
                      Formoption({
                        value: 'Done',
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'w-full flex flex-col gap-2',
                children: [
                  El({
                    element: 'lable',
                    innerText: 'Date:',
                  }),
                  El({
                    element: 'input',
                    className:
                      'w-full text-gray-500 px-1 py-2 outline-none border rounded-md focus:border-2 focus:border-[#6100E8] float-left',
                    // id: 'deadline',
                    name: 'deadline',
                    type: 'date',
                    // value: 'YY/MM/DD',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
