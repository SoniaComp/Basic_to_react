class helloworld extends HTMLElement {
  constructor(){
    super();
    // add shadow root in constructor
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>div { background-color: #82b74b; }</style>
      <div>yey</div>
    `;
    // style 정의 및 div 생성
    this._yey = shadowRoot.querySelector('div');
  }
  static get observedAttributes() {
    return ['lang'];
  }
  // connectedCallback(){
  //   // DOMC에 추가되면 실행되는 method;
  //   this.innerText = "hi!";
  //   this.set();
  // }
  // disconnectedCallback(){
  //   // DOM에서 제거되면 실행되는 method;
  // }
  attributeChangedCallback(attrName, oldVal, newVal) {
    // 속성이 추가/제거/변경되면 실행되는 method
    // 여기서 lang이라는 attribute가 추가되면 if문에서 통과된다.
    if (attr == "lang") {
      let yey;
      switch (newValue) {
        case 'ko':
          yey = '만세';
          break;
        case 'es':
          yey = 'hooray!';
          break;
        case 'jp':
          yey = '万歳!';
          break;
        default:
          yey = 'yey!';
      }
      this._yey.innerText = yey;
    }
  }
  yell() {
    alert(this._yey.innerText);
  }
  // adoptedCallback(oldDoc, newDoc) {
  //   // 다른 Document에서 옮겨지면 실행되는 method
  // }
  // set() {
  //   setTimeout(() => {
  //     this.innerText = "my name is indio";
  //   }, 1000)
  // }
}

customElements.define('hello-world', helloworld);