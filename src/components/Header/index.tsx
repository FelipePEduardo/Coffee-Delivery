import { HeaderContainer, RequestNumber } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/" title="Página principal">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <nav>
        <a href="#" aria-disabled="true">
          <div>
            <MapPin size={22} weight="fill" />
          </div>
          São Paulo, SP
        </a>

        <NavLink to="/checkout" title="Carrinho de compras">
          <ShoppingCart size={22} weight="fill" />
          {cartQuantity >= 1 && <RequestNumber>{cartQuantity}</RequestNumber>}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
