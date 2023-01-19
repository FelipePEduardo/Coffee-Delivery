import { Plus, Minus } from 'phosphor-react'
import { ButtonsContainer } from './styles'

interface QuantityProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function Quantity({ onIncrease, onDecrease, quantity }: QuantityProps) {
  const buttonIsDisabled = quantity <= 1

  return (
    <ButtonsContainer>
      <button onClick={onDecrease} disabled={buttonIsDisabled} type="button">
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease} type="button">
        <Plus size={14} weight="bold" />
      </button>
    </ButtonsContainer>
  )
}
