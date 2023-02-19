// 참고: https://vuejs.org/guide/quick-start.html#using-vue-from-cdn

const { createApp } = Vue;

createApp({
  data() {
    return {
      greetingMessage: '안녕!!! 리베하얀 입니다~ ',
      sincerity: !true,
      description: '리베하얀의 부캐는 리베블랙입니다~',
      realDescription: '부캐는 아무에게나 알려주지 않는다.',
    };
  },
}).mount('#app');
