import {
  BackgroundMapPinContainer,
  BackgroundTimerContainer,
  BackgroundCurrencyDollarContainer,
  ConfirmedOrderContainer,
  Container,
} from './styles'
import motoboyImage from '../../assets/motoboy.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NewRequestFormData } from '../Checkout'
import { useEffect } from 'react'

interface LocationType {
  state: NewRequestFormData
}

export function ConfirmedOrder() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])

  if (!state) return <></>

  return (
    <ConfirmedOrderContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <Container>
          <div>
            <BackgroundMapPinContainer>
              <MapPin size={16} weight="fill" />
            </BackgroundMapPinContainer>
            <span>
              Entrega em{' '}
              <strong>
                {state.street}, {state.houseNumber}
              </strong>
              <br />
              {state.district} - {state.city}, {state.state}
            </span>
          </div>

          <div>
            <BackgroundTimerContainer>
              <Timer size={16} weight="fill" />
            </BackgroundTimerContainer>
            <span>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </span>
          </div>

          <div>
            <BackgroundCurrencyDollarContainer>
              <CurrencyDollar size={16} weight="fill" />
            </BackgroundCurrencyDollarContainer>
            <span>
              Pagamento na entrega
              <br />
              <strong>{state.paymentMethods}</strong>
            </span>
          </div>
        </Container>
      </div>
      <img src={motoboyImage} alt="" />
    </ConfirmedOrderContainer>
  )
}
