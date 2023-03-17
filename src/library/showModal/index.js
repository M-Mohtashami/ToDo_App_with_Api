export const showModal = () => {
  const modal = document.getElementById('drawer');
  modal.classList.add('top-[0px]');
  modal.classList.remove('top-[-10000px]');
};
