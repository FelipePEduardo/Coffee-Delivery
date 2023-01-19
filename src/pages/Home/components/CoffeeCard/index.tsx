import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { Quantity } from '../../../../components/Quantity'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  BackgroundCardContainer,
  FooterCoffeeCard,
  TagsContainer,
} from './styles'

export interface Coffee {
  id: number
  image: String
  tags: String[]
  title: String
  description: String
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  const formattedPrice = formatMoney(coffee.price)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <BackgroundCardContainer>
      <img src={`/src/assets/coffees/${coffee.image}`} alt="" />

      <TagsContainer>
        {coffee.tags.map((tag: String) => {
          return <span key={`${coffee.id}${tag}`}>{tag}</span>
        })}
      </TagsContainer>

      <h3>{coffee.title} </h3>
      <p> {coffee.description}</p>

      <FooterCoffeeCard>
        <span>
          R$ <strong> {formattedPrice} </strong>
        </span>
        <div>
          <Quantity
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />

          <button onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </FooterCoffeeCard>
    </BackgroundCardContainer>
  )
}
