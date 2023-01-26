import { createContext, ReactNode, useState } from 'react'

export interface CartItem {
  id: number
  name: string
  description: string
  price: number
  photo: string
  tags: string[]
  amount: number
}

interface AddressInfo {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
  paymentType: string
}

interface CartContextType {
  cart: CartItem[]
  deliveryPrice: number
  addCoffee: (coffee: CartItem) => void
  subCoffee: (id: number) => void
  removeCoffee: (id: number) => void
  totalOrder: () => number
  onFormFullfilled: (data: AddressInfo) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeesInCart, setCoffeesInCart] = useState<CartItem[]>([])
  const [addressInfo, setAddressInfo] = useState<AddressInfo | undefined>()
  const deliveryPrice = 3.5
  function addCoffeeInCart(coffee: CartItem) {
    const orderAlreadyInCart = coffeesInCart.findIndex((coffeeInCart) => {
      return coffeeInCart.id === coffee.id
    })

    if (orderAlreadyInCart < 0) {
      setCoffeesInCart((state) => {
        return [...state, coffee]
      })
    } else {
      setCoffeesInCart((state) =>
        state.map((item) => {
          // Caso o coffee.id for igual ao item.id do map, aumenta a quantidade dele
          if (coffee.id === item.id) {
            return {
              ...item,
              amount: item.amount + coffee.amount,
            }
          } else {
            return item // Caso não seja retorne como já estava
          }
        }),
      )
    }
  }
  function subCoffeeFromCart(id: number) {
    const orderAlreadyInCart = coffeesInCart.findIndex((coffeeInCart) => {
      return coffeeInCart.id === id
    })

    if (orderAlreadyInCart < 0) {
      setCoffeesInCart((state) => {
        return [...state]
      })
    } else {
      setCoffeesInCart((state) =>
        state.map((item) => {
          // Caso o coffee.id for igual ao item.id do map, aumenta a quantidade dele
          if (id === item.id) {
            return {
              ...item,
              amount: item.amount - 1,
            }
          } else {
            return item // Caso não seja retorne como já estava
          }
        }),
      )
    }
  }
  function removeCoffeeFromCart(id: number) {
    const cartWithoutDeletedOne = coffeesInCart.filter((coffee) => {
      return coffee.id !== id
    })
    setCoffeesInCart(cartWithoutDeletedOne)
  }

  function getTotalOrder() {
    const total = coffeesInCart.reduce(
      (acc, item) => acc + item.price * item.amount,
      0,
    )
    return total
  }
  return (
    <CartContext.Provider
      value={{
        cart: coffeesInCart,
        addCoffee: addCoffeeInCart,
        subCoffee: subCoffeeFromCart,
        removeCoffee: removeCoffeeFromCart,
        totalOrder: getTotalOrder,
        deliveryPrice,
        onFormFullfilled: setAddressInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
