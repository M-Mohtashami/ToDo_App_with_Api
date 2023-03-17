import { showModal } from '@/library';
import { isEditing, changeEditingFlag, dataset } from '@/App';

export const newItem = () => {
  const form = document.getElementById('add-form');
  form.taskName.disabled = false;

  form.priority.disabled = false;

  form.status.disabled = false;

  form.taskDate.disabled = false;

  form.details.disabled = false;

  const save = form.querySelector('#save-btn');
  save.disabled = false;
  save.classList.remove('bg-gray-400', 'text-gray-800', 'border-gray-400');
  isEditing ? changeEditingFlag() : isEditing;

  showModal();
};
