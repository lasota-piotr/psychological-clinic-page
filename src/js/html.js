export const injectHtml = {
  init() {
    this.cacheDom();
    this.injectHtml();
  },
  cacheDom() {
    this.headEl = document.querySelector('head');
  },

  injectHtml() {
    this.headEl.innerHTML += `
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      `;
  }
}