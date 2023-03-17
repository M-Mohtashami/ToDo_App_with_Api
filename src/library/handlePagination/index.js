import { updateDataset, dataset, server } from '@/App';
import { DB, renderUi } from '@/library';
import { loader } from '@/component';

export const rowPerPage = (e) => {
  const page = document.getElementById('page');
  page.innerText = 1;
  handlePagination();
};

export const handlePagination = () => {
  const tbody = document.getElementById('tbody');
  const pageDetails = document.getElementById('rows-details');
  const page = document.getElementById('page');
  const rowPerPage = document.getElementById('row-per-page');
  // page.innerText = 1;
  let RpG = rowPerPage ? rowPerPage.value : 'All';

  if (RpG !== 'All' && +page.innerText === 1) {
    server.setEndPoint('tasks?_sort=id&_order=desc' + `&_page=1&_limit=${RpG}`);
  } else if (RpG === 'All') {
    server.setEndPoint('tasks?_sort=id&_order=desc' + `&_page=1&_limit=all`);
  }

  document.body.append(loader());
  updateDataset(server.getDB());
  dataset.then((response) => {
    renderUi(response);
  });
};
