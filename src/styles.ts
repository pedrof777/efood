import { createGlobalStyle } from 'styled-components'

export const Cores = {
  laranja: '#E66767',
  laranjaClaro: '#FFF8F2',
  laranjaMedio: '#FFEBD9',
  gray: '#4B4B4B'
}

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif
  }

  body{
    background-color: ${Cores.laranjaClaro};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakPoints.tablet}){
      max-width: 80%;
    }
  }


`
