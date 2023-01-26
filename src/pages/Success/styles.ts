import styled from 'styled-components'
export const ConfirmationContainer = styled.div`
  margin: 5rem 10rem;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  color: ${(props) => props.theme.black};
  > h1 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['orange-500']};
  }
`
export const Container = styled.div`
  display: flex;
  margin-left: 10rem;
  gap: 5rem;
  color: ${(props) => props.theme.black};
`
export const Informations = styled.div`
  width: 32.8rem;
`
export const InformationsContainer = styled.div`
  width: 512px;
  padding: 2.5rem;
  border: 1px solid green;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
`
export const InformationsItem = styled.div`
  margin-bottom: 2rem;
`
