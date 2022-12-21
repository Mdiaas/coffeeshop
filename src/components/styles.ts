import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
`
const BaseSpan = styled.span`
  padding: 0.5rem;
  border-radius: 6px;
`
export const LocationSpan = styled(BaseSpan)`
  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-500']};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CartSpan = styled(BaseSpan)`
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};
`
