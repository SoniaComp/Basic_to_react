class helloworld extends HTMLElement {
  constructor(){
    super();
  }
  static get observedAttributes() {
    // 모니터링 할 속성 이름
  }
  connectedCallback(){
    // DOMC에 추가되면 실행되는 method;
    this.innerText = "hi!";
    this.set();
  }
  disconnectedCallback(){
    // DOM에서 제거되면 실행되는 method;
  }
  attributeChangedCallback(attrName, oldVal, newVal){
    // 속성이 추가/제거/변경되면 실행되는 method
  }
  adoptedCallback(oldDoc, newDoc){
    // 다른 Document에서 옮겨지면 실행되는 method
  }
  set(){
    setTimeout(()=>{
      this.innerText = "my name is indio";
    }, 1000)
  }
}

customElements.define('hello-world', helloworld);