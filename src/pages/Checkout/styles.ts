import styled from 'styled-components'
import { Cores } from '../../styles'
import { ButtonDefault, ButtonLink } from '../../Components/Button/styles'

export const Container = styled.div`
  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${Cores.laranjaMedio};
    margin-bottom: 16px;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 360px;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.2;
  }

  div {
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: ${Cores.laranjaMedio};
      margin-bottom: 24px;
    }
  }

  ${ButtonDefault} {
    border: none;
    padding: 4px 0;
    margin-bottom: 8px;
    width: 100%;
    height: unset;
    background-color: ${Cores.laranjaMedio};
    color: ${Cores.laranja};
  }
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${Cores.laranjaMedio};
    margin-top: 8px;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: bold;
    background-color: ${Cores.laranjaMedio};
    color: ${Cores.gray};
    padding: 8px;

    &.input-error {
      border: 2px solid #3f1212ff;
    }
  }

  &.containerRow {
    flex-direction: row;

    .containerCodeCard {
      margin-left: 30px;
      width: 87px;
    }

    .containerYearExpires {
      margin-left: 34px;

      input {
        width: 155px;
      }
    }
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`
