import { Bank, CreditCard, MapPin, Money } from 'phosphor-react'
import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { ItemCart } from './components/CartItem'
import {
  CardItensSelecteds,
  DivAddressContainer,
  DivInput,
  DivPaymentWay,
  DivRow,
  FormAddressContainer,
  MainContainer,
} from './styles'

export function Payment() {
  const { cart, totalOrder, deliveryPrice, onFormFullfilled } =
    useContext(CartContext)
  const total = totalOrder()
  const totalWithDelivery = total + deliveryPrice

  const { register, handleSubmit, control, reset, watch } = useForm()
  const navigate = useNavigate()
  function handleAddAddress(data: any) {
    onFormFullfilled(data)
    reset()
    navigate('/successPage')
  }
  return (
    <MainContainer>
      <FormAddressContainer onSubmit={handleSubmit(handleAddAddress)}>
        <div>
          <h2>Complete seu pedido</h2>
          <DivAddressContainer>
            <h3>
              <span>
                <MapPin />
              </span>
              Endereço de Entrega
            </h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <DivInput variantWidth="50%">
              <input
                type="text"
                placeholder="CEP"
                {...register('cep')}
                required
              />
            </DivInput>
            <DivInput variantWidth="100%">
              <input
                type="text"
                placeholder="Rua"
                {...register('street')}
                required
              />
            </DivInput>
            <DivRow>
              <DivInput variantWidth="25%">
                <input
                  type="number"
                  placeholder="Número"
                  {...register('number')}
                  required
                />
              </DivInput>
              <DivInput variantWidth="75%">
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register('complement')}
                  required
                />
              </DivInput>
            </DivRow>
            <DivRow>
              <DivInput variantWidth="25%">
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register('district')}
                  required
                />
              </DivInput>
              <DivInput variantWidth="50%">
                <input
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                  required
                />
              </DivInput>
              <DivInput variantWidth="25%">
                <input
                  type="text"
                  placeholder="UF"
                  {...register('uf')}
                  required
                />
              </DivInput>
            </DivRow>
          </DivAddressContainer>
          <DivPaymentWay>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <Controller
              control={control}
              {...register('paymentMethod')}
              render={({ field }) => {
                return (
                  <div>
                    <label htmlFor="credit">
                      <span>
                        <CreditCard size={16}></CreditCard>
                      </span>
                      cartão de crédito
                      <input type="radio" name="paymentWay" id="credit" />
                    </label>
                    <label htmlFor="debit">
                      <span>
                        <Bank size={16}></Bank>
                      </span>
                      cartão de débito
                      <input type="radio" name="paymentWay" id="debit" />
                    </label>
                    <label htmlFor="money">
                      <span>
                        <Money size={16}></Money>
                      </span>
                      dinheiro
                      <input type="radio" name="paymentWay" id="money" />
                    </label>
                  </div>
                )
              }}
            />
          </DivPaymentWay>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <CardItensSelecteds>
            {cart.map((item) => {
              return <ItemCart key={item.id} {...item}></ItemCart>
            })}
            <footer>
              <div>
                <span>Total de itens</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ {deliveryPrice.toFixed(2)}</span>
              </div>
              <div>
                <span>
                  <strong>Total</strong>
                </span>
                <span>{totalWithDelivery.toFixed(2)}</span>
              </div>
              <button type="submit">confirmar pedido</button>
            </footer>
          </CardItensSelecteds>
        </div>
      </FormAddressContainer>
    </MainContainer>
  )
}
