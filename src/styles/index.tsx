import { css, Global } from '@emotion/react';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        * {
          font-family: 'NanumSquare';
        }

        body,
        h1,
        h2,
        h3,
        h4,
        p,
        figure,
        blockquote,
        dl,
        dd {
          margin: 0;
        }

        ul[role='list'],
        ol[role='list'] {
          list-style: none;
        }

        html:focus-within {
          scroll-behavior: smooth;
        }

        body {
          min-height: 100vh;
          text-rendering: optimizeSpeed;
          line-height: 1.5;
          display: flex;
          justify-content: center;
          background-color: #1f1f1f;
          font-family: NanumSquareOTF;
          text-align: center;
          color: #ffffff;
          font-style: normal;
          font-weight: bold;
          font-size: 13px;
          line-height: 140%;
          letter-spacing: 1.66667px;
          color: white;
        }
        a:not([class]) {
          text-decoration-skip-ink: auto;
        }

        img,
        picture {
          max-width: 100%;
          display: block;
        }

        input,
        button,
        textarea,
        select {
          font: inherit;
        }

        @media (prefers-reduced-motion: reduce) {
          html:focus-within {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        @font-face {
          font-family: 'SBAggroB';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff')
            format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}
    />
  );
};
