export const hideModal = () => {
  const modal = document.getElementById('drawer');
  const form = document.getElementById('add-form');
  form.reset();
  modal.classList.add('top-[-10000px]');
  modal.classList.remove('top-[0px]');
};
