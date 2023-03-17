import { renderUi, DB } from '@/library';

let dataset = new DB();
export const filterHandler = (e) => {
  const filter = {
    priority: e.currentTarget.priority.value,
    status: e.currentTarget.status.value,
    date: e.currentTarget.deadline.value,
  };
  let link = '';
  for (const key in filter) {
    if (filter[key] !== 'All' && filter[key] !== '')
      link += '&' + key + '=' + filter[key];
  }

  dataset.setEndPoint('tasks?' + link);
  dataset.getDB().then((response) => {
    renderUi(response);
  });
};

export const showFilter = (e) => {
  if (!e.target.closest('form')) {
    const filterSec = document.getElementById('filterSec');
    filterSec.classList.add('right-[-10000px]');
    filterSec.classList.remove('right-0');
  }
};
