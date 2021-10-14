import { LitElement, html, css } from 'lit';

export class GameChat extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      _showDialog: { type: Boolean },
      _showSpinner: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.title = 'My app';
    this._showDialog = false;
    this._showSpinner = false;
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;

        font-size: calc(10px + 2vmin);
        font-family: 'Montserrat', sans-serif;
        color: #1a2b42;
        text-align: center;

        background-color: var(--game-chat-light-color);
        color: var(--game-chat-maintext-color);
      }

      #dialog {
        position: absolute;
        top: 20vh;
        left: 10%;
        width: 70%;
        height: 30vh;
        z-index: 10;
        background-color: green;
        color: white;
      }

      #spinner {
        position: absolute;
        top: 40vh;
        left: 40%;
        width: 20%;
        height: 20vh;
        z-index: 12;
        background-color: yellow;
      }

      header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        height: 10vh;
        width: 100vw;

        background-color: var(--game-chat-accent-color);
        color: var(--game-chat-accenttext-color);
      }

      main {
        display: grid;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }

      .game-box {
        min-height: 100vw;
        width: 100vw;
        background-color: var(--game-chat-dark-color);
        color: var(--game-chat-light-color);
      }

      .chat-box {
        min-height: 100vw;
        width: 100vw;
        background-color: var(--game-chat-dark-color);
        color: var(--game-chat-light-color);
      }

      h1,
      h2,
      h3,
      h4 {
        font-family: 'Balsamiq Sans', cursive;
      }

      @media (min-aspect-ratio: 1/1) {
        main {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;

          height: 90vh;
        }

        .game-box {
          min-height: 90vh;
          width: 50vw;
        }

        .chat-box {
          min-height: 90vh;
          width: 50vw;
        }
      }
    `;
  }

  _toggleDialog(e) {
    console.log(e.target);
    this._showDialog = !this._showDialog;
  }

  _toggleSpinner(e) {
    console.log(e.target);
    this._showSpinner = !this._showSpinner;
  }

  render() {
    return html`
      <div>
        <div id="dialog" ?hidden=${!this._showDialog}>dialog</div>
        <div id="spinner" ?hidden=${!this._showSpinner}>spinner</div>

        <header>
          <nav>Nav</nav>
          <span>${this.title}</span>
          <button @click=${this._toggleDialog}>dialog</button>
          <button @click=${this._toggleSpinner}>spinner</button>
        </header>
        <main>
          <div class="game-box">
            <h1>this is a h1</h1>
            <checker-bd></checker-bd>
          </div>
          <div class="chat-box">
            <p>chat box</p>
            <my-svg></my-svg>
          </div>
        </main>
      </div>
    `;
  }
}
