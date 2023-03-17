import { hideModal, renderUi, DB, targetId, handlePagination } from '@/library';
import { isEditing, dataset, updateDataset, server } from '@/App';

export const handleForm = (e) => {
  e.preventDefault();
  console.log(e.submitter.id);

  if (e.submitter.id === 'cancel-btn') hideModal();
  if (e.submitter.id === 'save-btn') {
    if (isEditing) {
      const item = {
        id: targetId,
        taskName: e.target.taskName.value,
        priority: e.target.priority.value,
        status: e.target.status.value,
        date: e.target.taskDate.value,
        details: e.target.details.value,
      };
      server.updateItem(targetId, item);
      updateDataset(
        dataset.then((response) => {
          response = response.map((data) => {
            if (data.id === item.id) return item;
            return data;
          });
          renderUi(response);
          return response;
        })
      );
    } else {
      console.log(dataset);
      const item = {
        id: Date.now(),
        taskName: e.target.taskName.value,
        priority: e.target.priority.value,
        status: e.target.status.value,
        date: e.target.taskDate.value,
        details: e.target.details.value,
      };
      let post = server.addItem(item);
      post.then(() => {
        handlePagination();
      });
    }
    hideModal();
  }
};
