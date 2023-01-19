import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 2.2rem;
  margin-top: 7.2rem;
`

export const CompleteRequestContainer = styled.div`
  flex: 1;
  max-width: 64rem;

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;
    margin-bottom: 1.5rem;
  }
`

const BaseBackground = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 4rem;
  border-radius: 6px;
`

export const AdressContainer = styled(BaseBackground)`
  margin-bottom: 1.2rem;
`

const BaseHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 3.2rem;

  div {
    h4 {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 0.2rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`

export const HeaderAdressContainer = styled(BaseHeader)`
  span {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    padding: 1.2rem;
    font-size: 1.4rem;

    &:focus {
      outline: 1px solid ${(props) => props.theme['yellow-dark']};
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  input:nth-child(1) {
    width: 20rem;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  input:nth-child(1) {
    max-width: 20rem;
  }

  input:nth-child(2) {
    flex: 1;
  }

  input:nth-child(3) {
    max-width: 6rem;
  }
`

export const PaymentContainer = styled(BaseBackground)`
  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`

export const PaymentMethodContainer = styled.div`
  width: 100%;

  input {
    position: absolute;
    visibility: hidden;
  }

  svg {
    max-height: 1.6rem;
    color: ${(props) => props.theme.purple};
  }

  label {
    width: 100%;
    height: 5.1rem;
    padding: 1.6rem;

    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};

    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-weight: 400;
    font-size: 1.2rem;
    line-height: 160%;
    white-space: nowrap;
    text-transform: uppercase;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  input:checked + label {
    outline: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`

export const HeaderPaymentContainer = styled(BaseHeader)`
  span {
    color: ${(props) => props.theme.purple};
  }
`

export const CoffeesSelected = styled.div`
  flex: 2;
  max-width: 44.8rem;

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;
    margin-bottom: 1.5rem;
  }
`

export const RequestContainer = styled(BaseBackground)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > button {
    padding: 1.2rem;
    border: none;
    border-radius: 6px;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 160%;
    text-transform: uppercase;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: all 0.1s;

    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
