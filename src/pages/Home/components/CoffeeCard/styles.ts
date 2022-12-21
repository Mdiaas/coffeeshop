import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme['gray-50']};
  height: 19.375rem;
  width: 16rem;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    position: absolute;
    top: -1rem;
    left: 4rem;
  }
  > span {
    margin-top: 7rem;
    color: ${(props) => props.theme['yellow-500']};
    background: ${(props) => props.theme['yellow-100']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
  }

  h3 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme.black};
  }
  p {
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme['gray-400']};
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: baseline;
    color: ${(props) => props.theme.black};
    gap: 1rem;
  }
  footer div {
    background-color: ${(props) => props.theme['gray-100']};
    border-radius: 6px;
  }

  footer > div > button {
    display: flex;
    align-items: center;
    justify-content: stretch;
    padding: 0.5rem;
    border: 0;
    color: ${(props) => props.theme['purple-500']};
    background-color: transparent;
    cursor: pointer;
  }
  footer > button {
    background-color: ${(props) => props.theme['purple-500']};
    border: 0;
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
  }
`
