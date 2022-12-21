import { CoffeeCard } from '../CoffeeCard/Index'
import { ListContainer } from './styles'

const coffeeData = [
  {
    id: 1,
    name: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    imageUrl: 'coffee1.png',
    tags: ['tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    imageUrl: 'coffee2.png',
    tags: ['tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    imageUrl: 'coffee3.png',
    tags: ['tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    imageUrl: 'coffee4.png',
    tags: ['tradicional', 'gelado'],
  },
]
export function List() {
  return (
    <ListContainer>
      <h2>Nossos cafés</h2>
      <div>
        {coffeeData.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              value={coffee.value}
              imageUrl={coffee.imageUrl}
              tags={coffee.tags}
            ></CoffeeCard>
          )
        })}
      </div>
    </ListContainer>
  )
}
