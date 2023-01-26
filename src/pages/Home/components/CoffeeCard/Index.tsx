import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeCardContainer } from './styles'

interface CoffeeCardProps {
  id: number
  name: string
  description: string
  value: number
  imageUrl: string
  tags: string[]
}
export function CoffeeCard({
  id,
  name,
  description,
  value,
  imageUrl,
  tags,
}: CoffeeCardProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(0)
  const { addCoffee } = useContext(CartContext)
  function handleSubtractItem() {
    setCoffeeAmount((state) => {
      if (state > 0) return state - 1
      return 0
    })
  }
  function handlePlusItem() {
    setCoffeeAmount((state) => {
      return state + 1
    })
  }

  function handleAddCoffeeToCart() {
    const coffee = {
      id,
      name,
      description,
      price: value,
      photo: imageUrl,
      tags,
      amount: coffeeAmount,
    }
    console.log(coffee)
    addCoffee(coffee)
  }

  return (
    <CoffeeCardContainer>
      <img src={`src/assets/coffees/${imageUrl}`} alt="" />
      <span>TRADICIONAL</span>
      <h3>{name}</h3>
      <p>{description}</p>

      <footer>
        <span>
          R$
          <strong>{value.toFixed(2).padEnd(0)}</strong>
        </span>
        <div>
          <button onClick={handleSubtractItem}>
            <Minus></Minus>
          </button>
          <span>{coffeeAmount}</span>
          <button onClick={handlePlusItem}>
            <Plus></Plus>
          </button>
        </div>
        <button onClick={handleAddCoffeeToCart}>
          <ShoppingCart></ShoppingCart>
        </button>
      </footer>
    </CoffeeCardContainer>
  )
}
