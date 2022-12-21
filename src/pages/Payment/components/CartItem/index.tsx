import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext, CartItem } from '../../../../contexts/CartContext'
import {
  DivButtons,
  DivButtonsController,
  DivItemList,
  RemoveButton,
} from './styles'

export function ItemCart({
  id,
  name,
  description,
  price,
  photo,
  amount,
  tags,
}: CartItem) {
  const { addCoffee, subCoffee, removeCoffee } = useContext(CartContext)
  function handleSumCoffeeAmount() {
    addCoffee({
      id,
      name,
      description,
      price,
      photo,
      tags,
      amount: 1,
    })
  }
  function handleMinusCoffeeAmount() {
    subCoffee(id)
  }
  function handleRemoveCoffeeFromCart() {
    removeCoffee(id)
  }
  return (
    <DivItemList>
      <img src="src\assets\coffees\coffee2.png" alt="" />
      <div>
        <p>
          {name}
          <span>R$ {(price * amount).toFixed(2)}</span>
        </p>
        <DivButtons>
          <DivButtonsController>
            <button type="button" onClick={handleMinusCoffeeAmount}>
              <Minus></Minus>
            </button>
            <span>{amount}</span>
            <button type="button" onClick={handleSumCoffeeAmount}>
              <Plus></Plus>
            </button>
          </DivButtonsController>
          <RemoveButton type="button" onClick={handleRemoveCoffeeFromCart}>
            <span>
              <Trash></Trash>
            </span>
            Remover
          </RemoveButton>
        </DivButtons>
      </div>
    </DivItemList>
  )
}
