import styled from 'styled-components'

export const ListContainer = styled.section`
  margin: 10rem;
  h2 {
    color: ${(props) => props.theme.black};
  }
  div {
    margin-top: 3.375rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
