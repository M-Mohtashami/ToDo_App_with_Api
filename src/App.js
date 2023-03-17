import { Drawer, loader } from '@/component';
import {
  Form,
  navbar,
  tableOfContents,
  pagination,
  filterSection,
} from '@/layout';
import { El, handlePagination, DB, renderUi } from '@/library';

export let server = new DB();
server.setEndPoint('tasks?_sort=id&_order=desc');
export let dataset = server.getDB();
export const updateDataset = (datas) => {
  dataset = datas;
};
// document.body.append(loader());
// dataset.then((response) => {
//   renderUi(response);
// });
handlePagination();
console.log(dataset);

export let isEditing = false;
export const changeEditingFlag = () => {
  isEditing = !isEditing;
};

export let totalPages;
export const updatePages = (pages) => {
  totalPages = pages;
};

export const app = () => {
  return El({
    element: 'div',
    className: 'relative w-full h-full',
    children: [
      Drawer(Form()),
      navbar(),
      filterSection(),
      tableOfContents(),
      pagination(),
    ],
  });
};
