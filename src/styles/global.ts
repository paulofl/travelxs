import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* font-size: 16px (Desktop) */
  html {
    @media(max-width: 1080px) {
      font-size: 93.75% // 15px
    }

    @media(max-width: 720px) {
      font-size: 87.5% // 14px
    }

    @media(max-width: 720px) {
      font-size: 87.5% // 14px
    }
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
export const HeaderContainer = styled.header`
  background: #5429cc;
`;

export const Content = styled.div`
  height: 12rem;
  color: #ffffff;
  margin-left: 3rem;

  button {
    margin-top: 2rem;
    width: 10rem;
    height: 3rem;
    border-radius: 8px;
  }
`

export const Product = styled.div`
  padding: 2rem 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  button {
    width: 3rem;
  }
`

export const Total = styled.p`
  margin-right: 5rem;
  font-size: 2rem;
  display: flex;
  justify-content: flex-end;
`