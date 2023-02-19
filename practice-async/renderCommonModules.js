import { include } from "./6-include.js";

export function renderCommonModules(target = document.body) {
  include('/common/header.html', target, 'first')
  .then(() => {
    console.log('header.html이 문서에 삽입된 이후 뭔가를 여기서 실행할 수 있습니다.');
    const unknownALink = document.querySelector('a[href="/unknown"]');

    unknownALink.addEventListener('click', (e)=> {
      e.preventDefault();
      console.log('unknownALink');
    })
  })

  include('/common/footer.html', target, 'last');
}