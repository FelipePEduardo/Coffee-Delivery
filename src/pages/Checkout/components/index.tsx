import { Trash } from 'phosphor-react'
import { CoffeeSelectedContainer, ProductContainer } from './styles'
import { Quantity } from '../../../components/Quantity'
import { CartItem } from '../../../contexts/CartContext'
import { useCart } from '../../../hooks/useCart'
import { formatMoney } from '../../../utils/formatMoney'

interface CoffeeSelectedProps {
  coffee: CartItem
}

export function CoffeeSelected({ coffee }: CoffeeSelectedProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeSelectedContainer>
      <div>
        <img src={`/src/assets/coffees/${coffee.image}`} alt="" />

        <ProductContainer>
          <span>{coffee.title}</span>
          <div>
            <Quantity
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />

            <button type="button" onClick={handleRemove}>
              <span>
                <Trash size={14} />
              </span>
              Remover
            </button>
          </div>
        </ProductContainer>
      </div>

      <span>R$ {formattedPrice}</span>
    </CoffeeSelectedContainer>
  )
}
