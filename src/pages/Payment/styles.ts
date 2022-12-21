import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  height: calc(100vh - 104px);
`

export const FormAddressContainer = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10rem;
  gap: 2rem;

  div > h2 {
    margin-bottom: 1rem;
  }
`

export const DivAddressContainer = styled.div`
  width: 40rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-50']};
  color: ${(props) => props.theme['brown-400']};
  > p {
    padding-bottom: 2rem;
  }
  .w-100 {
    width: 100%;
  }
`

interface InputWidth {
  variantWidth: '25%' | '50%' | '75%' | '100%'
}

export const DivInput = styled.div<InputWidth>`
  padding: 0.75rem;
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 4px;
  margin-top: 1rem;
  width: ${(props) => props.variantWidth};
  input {
    width: 100%;
    border: 0;
    font-size: 1rem;
    background-color: transparent;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const DivRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`
export const DivPaymentWay = styled.div`
  width: 40rem;
  margin-top: 0.75rem;
  background-color: ${(props) => props.theme['gray-50']};
  padding: 2.5rem;
  color: ${(props) => props.theme['brown-400']};

  > div {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
  label {
    background-color: ${(props) => props.theme['gray-100']};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;

    span {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`

export const CardItensSelecteds = styled.div`
  width: 28rem;
  background-color: ${(props) => props.theme['gray-50']};
  border-top-left-radius: 6px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  footer {
    width: 100%;
    margin-top: 1.5rem;
  }
  footer > div {
    width: 100;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  footer > div > span:first-child {
    text-align: left;
    flex: 1;
  }
  footer > div > span:last-child {
    text-align: right;
  }

  footer button {
    margin-top: 1.5rem;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-500']};
    width: 100%;
    padding: 0.75rem;
  }
`
