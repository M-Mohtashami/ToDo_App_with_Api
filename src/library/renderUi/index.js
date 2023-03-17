import { DB, El } from '@/library';
import { Button } from '@/component';
import { trash, edit, view } from '@/assets';

const Priority = {
  Low: 'bg-gray-200 text-gray-800 ',
  Medium: 'bg-yellow-300 text-gray-800 ',
  High: 'bg-red-500 text-gray-50 ',
};
const Status = {
  ToDo: 'bg-red-500 text-gray-50',
  Doing: 'bg-yellow-300 text-gray-800 ',
  Done: 'bg-green-600 text-gray-50 ',
};
export const renderUi = (dataset) => {
  const tbody = document.getElementById('tbody');
  // const pageDetails = document.getElementById('rows-details');
  // const page = document.getElementById('page');
  tbody.innerHTML = '';
  // console.log(startRow, endRow);
  // pageDetails.innerText = `${startRow}-${endRow} of ${dataset.length}`;
  // // page.innerText = pageNumber;
  let conter = 0;

  dataset.map((item) => {
    const row = El({
      element: 'tr',
      dataset: { id: item.id },
      children: [
        El({
          element: 'td',
          className: 'border-2 text-left p-4 pl-8',
          innerText: `${item.taskName}`,
        }),
        El({
          element: 'td',
          className: 'border-2 text-center',
          children: [
            El({
              element: 'span',
              className: `${
                Priority[item.priority]
              } font-semibold px-4 py-2 rounded-full`,
              innerText: `${item.priority}`,
            }),
          ],
        }),
        El({
          element: 'td',
          className: 'border-2 text-center',
          children: [
            El({
              element: 'span',
              className: `${
                Status[item.status]
              } font-semibold px-4 py-2 rounded-full`,
              innerText: `${item.status}`,
            }),
          ],
        }),
        El({
          element: 'td',
          className: 'border-2 text-center',
          children: [
            El({
              element: 'span',
              className: 'border border-blue-600 px-4 py-2 rounded-full',
              innerText: `${item.date}`,
            }),
          ],
        }),
        El({
          element: 'td',
          className: 'border-2',
          children: [
            El({
              element: 'div',
              className: 'flex gap-2 items-center justify-center',
              children: [
                Button({
                  className:
                    'bg-red-500 rounded-md p-2 [&_svg]:fill-white my-auto',
                  dataset: {
                    value: 'delete',
                  },
                  innerHTML: trash,
                }),
                Button({
                  className:
                    'bg-blue-500 rounded-md p-2 [&_svg]:fill-white my-auto',
                  dataset: {
                    value: 'edit',
                  },
                  innerHTML: edit,
                }),
                Button({
                  className:
                    'bg-gray-500 rounded-md p-2 [&_svg]:fill-white my-auto',
                  dataset: {
                    value: 'view',
                  },
                  innerHTML: view,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    conter++;
    tbody.appendChild(row);
  });
  document.getElementById('loader') &&
    document.getElementById('loader').remove();
};
