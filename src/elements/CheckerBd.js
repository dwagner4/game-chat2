import { html, css, LitElement } from 'lit';

export class CheckerBd extends LitElement {
  static get styles() {
    return css`
      div {
        padding: 10%;
        background-color: var(--game-chat-primary-color);
      }
      rect:nth-child(even) {
        fill: red;
      }
      rect:nth-child(odd) {
        fill: #222;
      }
    `;
  }

  static get properties() {
    return {
      playColor: { type: String },
      emptyColor: { type: String },
      aColor: { type: String },
      bColor: { type: String },
      dim: { type: Number },
    };
  }

  constructor() {
    super();
    this.playColor = 'red';
    this.emptyColor = '#222';
    this.aColor = 'purple';
    this.bColor = 'green';
    this.dim = 100;
  }

  render() {
    return html`
      <svg id="daddy" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <g stroke="yellow" stroke-width="5">
          <rect x=${this.dim * 0} y="0" width=${this.dim} height=${this.dim} />
          <rect x=${this.dim * 1} y="0" width=${this.dim} height=${this.dim} />
          <rect x=${this.dim * 2} y="0" width=${this.dim} height=${this.dim} />
          <rect x=${this.dim * 3} y="0" width=${this.dim} height=${this.dim} />
          <rect x=${this.dim * 4} y="0" width=${this.dim} height=${this.dim} />
          <rect x=${this.dim * 5} y="0" width=${this.dim} height=${this.dim} />
          <rect x=${this.dim * 6} y="0" width=${this.dim} height=${this.dim} />
          <rect x=${this.dim * 7} y="0" width=${this.dim} height=${this.dim} />
          <rect x=${this.dim * 8} y="0" width=${this.dim} height=${this.dim} />

          <rect x="0" y=${this.dim * 1} width=${this.dim} height=${this.dim} />
          <rect
            x=${this.dim * 1}
            y=${this.dim * 1}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 2}
            y=${this.dim * 1}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 3}
            y=${this.dim * 1}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 4}
            y=${this.dim * 1}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 5}
            y=${this.dim * 1}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 6}
            y=${this.dim * 1}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 7}
            y=${this.dim * 1}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 8}
            y=${this.dim * 1}
            width=${this.dim}
            height=${this.dim}
          />

          <rect x="0" y=${this.dim * 2} width=${this.dim} height=${this.dim} />
          <rect
            x=${this.dim * 1}
            y=${this.dim * 2}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 2}
            y=${this.dim * 2}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 3}
            y=${this.dim * 2}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 4}
            y=${this.dim * 2}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 5}
            y=${this.dim * 2}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 6}
            y=${this.dim * 2}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 7}
            y=${this.dim * 2}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 8}
            y=${this.dim * 2}
            width=${this.dim}
            height=${this.dim}
          />

          <rect x="0" y=${this.dim * 3} width=${this.dim} height=${this.dim} />
          <rect
            x=${this.dim * 1}
            y=${this.dim * 3}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 2}
            y=${this.dim * 3}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 3}
            y=${this.dim * 3}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 4}
            y=${this.dim * 3}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 5}
            y=${this.dim * 3}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 6}
            y=${this.dim * 3}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 7}
            y=${this.dim * 3}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 8}
            y=${this.dim * 3}
            width=${this.dim}
            height=${this.dim}
          />

          <rect x="0" y=${this.dim * 4} width=${this.dim} height=${this.dim} />
          <rect
            x=${this.dim * 1}
            y=${this.dim * 4}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 2}
            y=${this.dim * 4}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 3}
            y=${this.dim * 4}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 4}
            y=${this.dim * 4}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 5}
            y=${this.dim * 4}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 6}
            y=${this.dim * 4}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 7}
            y=${this.dim * 4}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 8}
            y=${this.dim * 4}
            width=${this.dim}
            height=${this.dim}
          />

          <rect x="0" y=${this.dim * 5} width=${this.dim} height=${this.dim} />
          <rect
            x=${this.dim * 1}
            y=${this.dim * 5}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 2}
            y=${this.dim * 5}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 3}
            y=${this.dim * 5}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 4}
            y=${this.dim * 5}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 5}
            y=${this.dim * 5}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 6}
            y=${this.dim * 5}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 7}
            y=${this.dim * 5}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 8}
            y=${this.dim * 5}
            width=${this.dim}
            height=${this.dim}
          />

          <rect x="0" y=${this.dim * 6} width=${this.dim} height=${this.dim} />
          <rect
            x=${this.dim * 1}
            y=${this.dim * 6}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 2}
            y=${this.dim * 6}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 3}
            y=${this.dim * 6}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 4}
            y=${this.dim * 6}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 5}
            y=${this.dim * 6}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 6}
            y=${this.dim * 6}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 7}
            y=${this.dim * 6}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 8}
            y=${this.dim * 6}
            width=${this.dim}
            height=${this.dim}
          />

          <rect x="0" y=${this.dim * 7} width=${this.dim} height=${this.dim} />
          <rect
            x=${this.dim * 1}
            y=${this.dim * 7}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 2}
            y=${this.dim * 7}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 3}
            y=${this.dim * 7}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 4}
            y=${this.dim * 7}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 5}
            y=${this.dim * 7}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 6}
            y=${this.dim * 7}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 7}
            y=${this.dim * 7}
            width=${this.dim}
            height=${this.dim}
          />
          <rect
            x=${this.dim * 8}
            y=${this.dim * 7}
            width=${this.dim}
            height=${this.dim}
          />
        </g>
        <g fill=${this.aColor}>
          <circle
            id="a1"
            cx=${50 + this.dim * 0}
            cy=${50 + this.dim * 0}
            r=${this.dim * 0.4}
          />
          <circle
            id="a2"
            cx=${50 + this.dim * 2}
            cy=${50 + this.dim * 0}
            r=${this.dim * 0.4}
          />
          <circle
            id="a3"
            cx=${50 + this.dim * 4}
            cy=${50 + this.dim * 0}
            r=${this.dim * 0.4}
          />
          <circle
            id="a4"
            cx=${50 + this.dim * 6}
            cy=${50 + this.dim * 0}
            r=${this.dim * 0.4}
          />

          <circle
            id="a5"
            cx=${50 + this.dim * 1}
            cy=${50 + this.dim * 1}
            r=${this.dim * 0.4}
          />
          <circle
            id="a6"
            cx=${50 + this.dim * 3}
            cy=${50 + this.dim * 1}
            r=${this.dim * 0.4}
          />
          <circle
            id="a7"
            cx=${50 + this.dim * 5}
            cy=${50 + this.dim * 1}
            r=${this.dim * 0.4}
          />
          <circle
            id="a8"
            cx=${50 + this.dim * 7}
            cy=${50 + this.dim * 1}
            r=${this.dim * 0.4}
          />

          <circle
            id="a9"
            cx=${50 + this.dim * 0}
            cy=${50 + this.dim * 2}
            r=${this.dim * 0.4}
          />
          <circle
            id="a10"
            cx=${50 + this.dim * 2}
            cy=${50 + this.dim * 2}
            r=${this.dim * 0.4}
          />
          <circle
            id="a11"
            cx=${50 + this.dim * 4}
            cy=${50 + this.dim * 2}
            r=${this.dim * 0.4}
          />
          <circle
            id="a12"
            cx=${50 + this.dim * 6}
            cy=${50 + this.dim * 2}
            r=${this.dim * 0.4}
          />
        </g>
        <g fill=${this.bColor}>
          <circle
            id="b1"
            cx=${50 + this.dim * 1}
            cy=${50 + this.dim * 5}
            r=${this.dim * 0.4}
          />
          <circle
            id="b2"
            cx=${50 + this.dim * 3}
            cy=${50 + this.dim * 5}
            r=${this.dim * 0.4}
          />
          <circle
            id="b3"
            cx=${50 + this.dim * 5}
            cy=${50 + this.dim * 5}
            r=${this.dim * 0.4}
          />
          <circle
            id="b4"
            cx=${50 + this.dim * 7}
            cy=${50 + this.dim * 5}
            r=${this.dim * 0.4}
          />

          <circle
            id="b5"
            cx=${50 + this.dim * 0}
            cy=${50 + this.dim * 6}
            r=${this.dim * 0.4}
          />
          <circle
            id="b6"
            cx=${50 + this.dim * 2}
            cy=${50 + this.dim * 6}
            r=${this.dim * 0.4}
          />
          <circle
            id="b7"
            cx=${50 + this.dim * 4}
            cy=${50 + this.dim * 6}
            r=${this.dim * 0.4}
          />
          <circle
            id="b8"
            cx=${50 + this.dim * 6}
            cy=${50 + this.dim * 6}
            r=${this.dim * 0.4}
          />

          <circle
            id="b9"
            cx=${50 + this.dim * 1}
            cy=${50 + this.dim * 7}
            r=${this.dim * 0.4}
          />
          <circle
            id="b10"
            cx=${50 + this.dim * 3}
            cy=${50 + this.dim * 7}
            r=${this.dim * 0.4}
          />
          <circle
            id="b11"
            cx=${50 + this.dim * 5}
            cy=${50 + this.dim * 7}
            r=${this.dim * 0.4}
          />
          <circle
            id="b12"
            cx=${50 + this.dim * 7}
            cy=${50 + this.dim * 7}
            r=${this.dim * 0.4}
          />
        </g>
      </svg>
    `;
  }
}
