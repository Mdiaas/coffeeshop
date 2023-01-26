import { useContext } from 'react'
import Image from '../../assets/Illustration.svg'
import { CartContext } from '../../contexts/CartContext'
import {
  ConfirmationContainer,
  Container,
  Informations,
  InformationsContainer,
  InformationsItem,
} from './styles'
export function Success() {
  const { addressInfo } = useContext(CartContext)
  console.log(addressInfo)
  return (
    <div>
      <ConfirmationContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </ConfirmationContainer>
      <Container>
        <Informations>
          <InformationsContainer>
            <InformationsItem>
              <p>
                Entrega em{' '}
                <strong>{`${addressInfo?.street}, ${addressInfo?.number}`}</strong>
              </p>
              <p>{`${addressInfo?.district} - ${addressInfo?.city}, ${addressInfo?.uf}`}</p>
            </InformationsItem>
            <InformationsItem>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min </strong>
              </p>
            </InformationsItem>
            <InformationsItem>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </InformationsItem>
          </InformationsContainer>
        </Informations>
        <img src={Image} width="492px" height="293px" alt="" />
      </Container>
    </div>
  )
}
