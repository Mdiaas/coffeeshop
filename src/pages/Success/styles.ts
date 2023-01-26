import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`
export const Header = styled.div`
  margin-bottom: 2.5rem;
`
export const HeaderTitle = styled.h1`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['orange-500']};
`

export const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
  background: linear-gradient(to right, red, purple);
`
export const InformationsContainer = styled.div`
  position: absolute;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`
