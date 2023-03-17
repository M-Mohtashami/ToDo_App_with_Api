import { El, handleForm } from '@/library';
import { Textfield, Formoption, Button } from '@/component';

export const Form = () => {
  return El({
    element: 'form',
    id: 'add-form',
    className:
      'w-[500px] h-auto border rounded-sm border-gray-200 shadow-sm bg-white relative',
    eventListener: [
      {
        event: 'submit',
        callback: handleForm,
      },
    ],
    children: [
      El({
        element: 'div',
        className:
          'w-full p-2 text-left text-gray-700 bg-gray-100 border-b shadow-b-sm',
        innerText: 'New Task',
      }),
      El({
        element: 'div',
        className: 'w-full p-4 bg-white',
        children: [
          El({
            element: 'div',
            className: 'relative',
            children: [
              El({
                element: 'input',
                type: 'text',
                name: 'taskName',
                id: 'taskName',
                className:
                  'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6100E8] peer',
                placeholder: ' ',
              }),
              El({
                element: 'label',
                for: 'taskName',
                className:
                  'absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#6100E8] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1',
                innerText: 'Task Name',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'w-full my-8 flex gap-4',
            children: [
              El({
                element: 'select',
                name: 'priority',
                className:
                  'w-1/3 text-gray-500 px-1 py-2 outline-none border rounded-md focus:border focus:border-[#6100E8]',
                children: [
                  Formoption({
                    value: 'Priority',
                    disabled: true,
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
              El({
                element: 'select',
                name: 'status',
                className:
                  'w-1/3 text-gray-500 px-1 py-2 outline-none border rounded-md focus:border focus:border-[#6100E8]',
                children: [
                  Formoption({
                    value: 'Status',
                    disabled: true,
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
              El({
                element: 'input',
                className:
                  'text-gray-500 px-1 py-2 outline-none border rounded-md focus:border focus:border-[#6100E8]',
                value: `YY/MM/DD`,
                // id: 'task-date',
                name: 'taskDate',
                type: 'date',
              }),
            ],
          }),
          El({
            element: 'textarea',
            name: 'details',
            className:
              'w-full text-gray-500 my-4 px-1 py-2 outline-none border rounded-md focus:border focus:border-[#6100E8]',
            placeholder: 'Ditails (optional)',
            rows: 5,
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'w-full p-2 px-4 text-gray-700 bg-gray-100 border-t shadow-t-sm flex flex-row-reverse items-center justify-between',
        children: [
          Button({
            type: 'submit',
            id: 'save-btn',
            className:
              'border-2 border-blue-600 bg-blue-600 text-white py-2 px-4 rounded-md',
            innerText: 'save',
          }),
          Button({
            type: 'submit',
            id: 'cancel-btn',
            className:
              'border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-md',
            innerText: 'cancel',
          }),
        ],
      }),
    ],
  });
};
