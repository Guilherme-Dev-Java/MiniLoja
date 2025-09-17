import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #0b79ff;
    --border: rgba(11, 18, 32, 0.08);
    --radius: 12px;
    --shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }

  body[data-theme='light'] {
    --bg: #fff;
    --surface: #f7f7fb;
    --text: #0b1220;
    --muted: #556077;
  }

  body[data-theme='dark'] {
    --bg: #0b1220;
    --surface: #171d2b;
    --text: #ffffff;
    --muted: #bec1c8;
    --border: rgba(255, 255, 255, 0.1);
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Inter, system-ui, Arial;
    background: var(--bg);
    color: var(--text);
    transition: background 0.3s ease, color 0.3s ease;
  }
`;