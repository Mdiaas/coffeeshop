import { useContext } from 'react'
import Image from '../../assets/Illustration.svg'
import { CartContext } from '../../contexts/CartContext'
import {
  Container,
  Header,
  HeaderTitle,
  InformationsContainer,
  Wrapper,
} from './styles'
export function Success() {
  const { addressInfo } = useContext(CartContext)
  console.log(addressInfo)
  return (
    <Container>
      <div>
        <Header>
          <HeaderTitle>Uhu! Pedido confirmado</HeaderTitle>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Header>
        <Wrapper>
          <InformationsContainer>
            <div>
              <p>
                Entrega em: {`${addressInfo?.street}, ${addressInfo?.number}`}
              </p>
              <span>{`${addressInfo?.district}`}</span>
            </div>
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </div>
          </InformationsContainer>
        </Wrapper>
      </div>
      <img src={Image} alt="" />
    </Container>
  )
}
