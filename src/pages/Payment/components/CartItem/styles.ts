import styled from 'styled-components'

export const DivItemList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['brown-400']};
  img {
    width: 4rem;
    margin-right: 1.25rem;
  }
  padding: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme['brown-400']};
  height: 5rem;

  div > p {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  div > p > span {
    font-family: 'Baloo 2';
    font-weight: bold;
  }
`
export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 16rem;
`

export const DivButtonsController = styled.div`
  gap: 0.25rem;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 0.3125rem;
  button {
    background: transparent;
    color: ${(props) => props.theme['purple-500']};
    border: 0;
    cursor: pointer;
  }
  border-radius: 6px;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border: 0;
  background-color: ${(props) => props.theme['gray-100']};
  span {
    color: ${(props) => props.theme['purple-500']};
  }
  border-radius: 6px;
  cursor: pointer;
`
