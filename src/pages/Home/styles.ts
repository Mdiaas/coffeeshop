import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem;
  color: ${(props) => props.theme.black};
  text-align: justified;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > div > h1 {
    font-family: 'Baloo 2', sans-serif;
  }
  > div > p {
    margin-bottom: 4.125rem;
  }
`
export const DivInformation = styled.div`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
  }
`
export type RoundedSpanVariants = 'brown' | 'black' | 'yellow' | 'purple'
interface RoundedSpanProps {
  variant: RoundedSpanVariants
}
export const RoundedSpan = styled.span<RoundedSpanProps>`
  border-radius: 100%;
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
  background: ${(props) => props.theme[props.variant]};
  display: flex;
  align-items: center;
  justify-content: center;
`
