// import { RpG } from '@/App';
import { handlePagination } from '@/library';
import { server } from '@/App';

export const nextPage = () => {
  const page = document.getElementById('page');
  let pageUrls = server.requestHeader?.split(',');
  console.log(pageUrls);
  if (pageUrls && pageUrls.length > 1) {
    for (let url of pageUrls) {
      let pageInfo = url.split(';');
      if (pageInfo[1].includes('next')) {
        server.setEndPoint('tasks?' + pageInfo[0].split('?')[1]);
        page.innerText = +page.innerText + 1;
      }
    }
  }

  handlePagination();
};

export const prevPage = () => {
  const page = document.getElementById('page');
  let pageUrls = server.requestHeader?.split(',');
  if (pageUrls && pageUrls.length > 1) {
    for (let url of pageUrls) {
      let pageInfo = url.split(';');
      if (pageInfo[1].includes('prev')) {
        server.setEndPoint('tasks?' + pageInfo[0].split('?')[1]);
        page.innerText = page.innerText - 1;
      }
    }
  }
  handlePagination();
};
