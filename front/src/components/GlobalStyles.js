import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
    ${reset} 

    a {
      text-decoration: none;
      color: inherit;
    }
    * {
      box-sizing: border-box;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    body {
      &[data-theme='light'] {
        --bg-page1: #f8f9fa;
        --bg-page2: #ffffff;
        --bg-element1: #ffffff;
        --bg-element2: #f8f9fa;
        --bg-element3: #e9ecef;
        --bg-element4: #dee2e6;
        --bg-element5: #212529;
        --bg-element6: #343a40;
        --bg-element7: #ffffff;
        --bg-element8: #fbfdfc;
        --bg-invert: #1e1e1e;
        --bg-inline-code: #e9ecef;
        --bg-tag: #f8f9fa;
        --text1: #212529;
        --text2: #495057;
        --text3: #868e96;
        --text4: #ced4da;
        --border1: #343a40;
        --border2: #adb5bd;
        --border3: #dee2e6;
        --border4: #f1f3f5;
        --primary1: #12b886;
        --primary2: #20c997;
        --destructive1: #ff6b6b;
        --destructive2: #ff8787;
        --button-text: #ffffff;
        --slight-layer: rgba(0, 0, 0, 0.05);
        --opaque-layer: rgba(249, 249, 249, 0.85);
        --editor-footer: #ffffff;
        --prism-bg: #fbfcfd;
        --prism-default-text: #24292e;
        --prism-selection-bg: rgba(0, 0, 0, 0.15);
        --prism-code-block-bg: #fbfcfd;
        --prism-code-1: #969896;
        --prism-code-2: #24292e;
        --prism-code-3: #a626a4;
        --prism-code-4: #63a35c;
        --prism-code-5: #0184bc;
        --prism-code-6: #50a14f;
        --prism-code-7: #a626a4;
        --prism-code-8: #005cc5;
        --prism-code-9: #a626a4;
        --prism-line-number: #585c63;
      }

      &[data-theme='dark'] {
        --bg-page1: #121212;
        --bg-page2: #121212;
        --bg-element1: #1e1e1e;
        --bg-element2: #1e1e1e;
        --bg-element3: #252525;
        --bg-element4: #2e2e2e;
        --bg-element5: #f1f3f5;
        --bg-element6: #f8f9fa;
        --bg-element7: #252525;
        --bg-element8: #0c0c0c;
        --bg-invert: #ffffff;
        --bg-inline-code: #363636;
        --bg-tag: #252525;
        --text1: #ececec;
        --text2: #d9d9d9;
        --text3: #acacac;
        --text4: #595959;
        --border1: #e0e0e0;
        --border2: #a0a0a0;
        --border3: #4d4d4d;
        --border4: #2a2a2a;
        --primary1: #96f2d7;
        --primary2: #63e6be;
        --destructive1: #ffc9c9;
        --destructive2: #ffa8a8;
        --button-text: #121212;
        --slight-layer: rgba(255, 255, 255, 0.1);
        --opaque-layer: rgba(0, 0, 0, 0.85);
        --editor-footer: #2e2e2e;
        --prism-bg: #1e1e1e;
        --prism-default-text: #e0e6f1;
        --prism-selection-bg: #383e49;
        --prism-code-block-bg: #1e1e1e;
        --prism-code-1: #7c858d;
        --prism-code-2: #abb2bf;
        --prism-code-3: #e06c75;
        --prism-code-4: #d19a66;
        --prism-code-5: #98c379;
        --prism-code-6: #56b6c2;
        --prism-code-7: #c678dd;
        --prism-code-8: #61afef;
        --prism-code-9: #c678dd;
        --prism-line-number: #5c6370;
      }

      background-color: var(--bg-page1);
      transition: 0.5s;
      
      * {
        color: var(--text1);
        font-size: 14px;
        box-sizing: border-box;
      }
    }

    .hide {
      height: 0;
      overflow: hidden;
      text-indent: -9999vw;
      white-space: nowrap;
    }
`;

export default GlobalStyles;
