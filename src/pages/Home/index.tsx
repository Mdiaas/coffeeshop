import { DivInformation, MainContainer, RoundedSpan } from './styles'
import coffeeImg from '../../assets/coffeeImg.png'
import { Package, ShoppingCart } from 'phosphor-react'
import { List } from './components/List/List'
export function Home() {
  return (
    <div>
      <MainContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <DivInformation>
            <div>
              <RoundedSpan variant="black">
                <ShoppingCart size={16} />
              </RoundedSpan>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <RoundedSpan variant="black">
                <Package size={16} />
              </RoundedSpan>
              <span>Embalagem mantém o café intacto</span>
            </div>
          </DivInformation>
          <DivInformation>
            <div>
              <RoundedSpan variant="black">
                <ShoppingCart size={16} />
              </RoundedSpan>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <RoundedSpan variant="black">
                <Package size={16} />
              </RoundedSpan>
              <span>O café chega fresquinho até você</span>
            </div>
          </DivInformation>
        </div>
        <img src={coffeeImg} alt="" />
      </MainContainer>
      <List></List>
    </div>
  )
}
