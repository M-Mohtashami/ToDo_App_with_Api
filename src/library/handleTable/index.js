import { DB, renderUi, showModal, handlePagination } from '@/library';
import {
  isEditing,
  changeEditingFlag,
  dataset,
  updateDataset,
  server,
} from '@/App';

export let targetId;
export const handleTable = (e) => {
  if (!e.target.closest('[data-value]')) return;

  const action = e.target.closest('[data-value]').dataset.value;
  targetId = +e.target.closest('[data-id]').dataset.id;
  if (action === 'delete') {
    server.setEndPoint('tasks');
    let deleteReq = server.deleteItem(targetId);
    deleteReq.then(() => {
      handlePagination();
    });
  } else if (action === 'view') {
    const form = document.getElementById('add-form');

    dataset.then((response) => {
      response.map((item) => {
        if (item.id === targetId) {
          form.taskName.value = item.taskName;
          form.taskName.disabled = true;

          form.priority.value = item.priority;
          form.priority.disabled = true;

          form.status.value = item.status;
          form.status.disabled = true;

          form.taskDate.value = item.date;
          form.taskDate.disabled = true;

          form.details.value = item.details;
          form.details.disabled = true;

          const save = form.querySelector('#save-btn');
          save.disabled = true;
          save.classList.add('bg-gray-400', 'text-gray-800', 'border-gray-400');
        }
      });
    });

    showModal();
  } else if (action === 'edit') {
    const form = document.getElementById('add-form');
    dataset.then((response) => {
      let target = response.find((item) => item.id === targetId);

      form.taskName.value = target.taskName;
      form.priority.value = target.priority;
      form.status.value = target.status;
      form.taskDate.value = target.date;
      form.details.value = target.details;

      form.taskName.disabled = false;
      form.priority.disabled = false;
      form.status.disabled = false;
      form.taskDate.disabled = false;
      form.details.disabled = false;
      const save = form.querySelector('#save-btn');
      save.disabled = false;
      save.classList.remove('bg-gray-400', 'text-gray-800', 'border-gray-400');
    });
    isEditing || changeEditingFlag();

    showModal();
  }
};
