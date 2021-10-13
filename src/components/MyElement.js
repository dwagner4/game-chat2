import { html, css, LitElement } from 'lit';

export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--my-element-text-color, #000);
      }

      .small {
        font: italic 13px sans-serif;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <svg
        width="300px"
        height="300px"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="20" y="20" class="small">${this.title}</text>
        <rect x="20" y="60" width="120" height="120" fill="#ff8800" />
      </svg>
    `;
  }
}
