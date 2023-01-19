import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { CoffeeSelected } from './components'

import {
  AdressContainer,
  CompleteRequestContainer,
  FormContainer,
  HeaderAdressContainer,
  HeaderPaymentContainer,
  InputsContainer,
  PaymentContainer,
  Container,
  CoffeesSelected,
  RequestContainer,
  PriceContainer,
  PaymentMethodContainer,
} from './styles'

import { useCart } from '../../hooks/useCart'
import { formatMoney } from '../../utils/formatMoney'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const DELIVERY_PRICE = 3.5

const newConfirmCoffeeOrderFormValidationSchema = zod.object({
  cep: zod.number().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  houseNumber: zod.number().min(1, 'Informe o número da casa'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o estado'),
})

export type NewRequestFormData = zod.infer<
  typeof newConfirmCoffeeOrderFormValidationSchema
>

export function Checkout() {
  const { cartItems, cartItemsTotal, cartQuantity, cleanCart } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  const buttonIsDisabled = cartQuantity <= 0

  const { register, handleSubmit, reset } = useForm<NewRequestFormData>({
    resolver: zodResolver(newConfirmCoffeeOrderFormValidationSchema),
    defaultValues: {
      cep: undefined,
      street: '',
      houseNumber: undefined,
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  })

  const navigate = useNavigate()

  function handleSubmitForm(data: NewRequestFormData) {
    navigate('/confirmedOrder', {
      state: data,
    })

    reset()
    cleanCart()
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <CompleteRequestContainer>
        <h3>Complete seu pedido</h3>

        <AdressContainer>
          <HeaderAdressContainer>
            <span>
              <MapPin size={22} />
            </span>
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </HeaderAdressContainer>

          <InputsContainer>
            <input
              type="number"
              placeholder="CEP"
              required
              {...register('cep', { valueAsNumber: true })}
            />
            <input type="text" placeholder="Rua" {...register('street')} />
            <Container>
              <input
                type="number"
                placeholder="Número"
                required
                {...register('houseNumber', { valueAsNumber: true })}
              />
              <input
                type="text"
                placeholder="Complemento (Opcional)"
                {...register('complement')}
              />
            </Container>
            <Container>
              <input
                type="text"
                placeholder="Bairro"
                required
                {...register('district')}
              />
              <input
                type="text"
                placeholder="Cidade"
                required
                {...register('city')}
              />
              <input
                type="text"
                placeholder="UF"
                required
                {...register('state')}
                minLength={2}
                maxLength={2}
              />
            </Container>
          </InputsContainer>
        </AdressContainer>

        <PaymentContainer>
          <HeaderPaymentContainer>
            <span>
              <CurrencyDollar size={22} />
            </span>
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </HeaderPaymentContainer>

          <div>
            <PaymentMethodContainer>
              <input type="radio" id="credit" name="paymentMethods" />
              <label htmlFor="credit">
                <CreditCard size={16} />
                Cartão de crédito
              </label>
            </PaymentMethodContainer>

            <PaymentMethodContainer>
              <input type="radio" id="debit" name="paymentMethods" />
              <label htmlFor="debit">
                <Bank size={16} />
                Cartão de débito
              </label>
            </PaymentMethodContainer>

            <PaymentMethodContainer>
              <input type="radio" id="money" name="paymentMethods" />
              <label htmlFor="money">
                <Money size={16} />
                Dinheiro
              </label>
            </PaymentMethodContainer>
          </div>
        </PaymentContainer>
      </CompleteRequestContainer>

      <CoffeesSelected>
        <h3>Cafés selecionados</h3>
        <RequestContainer>
          {cartItems.map((item) => {
            return <CoffeeSelected key={item.id} coffee={item} />
          })}

          <PriceContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ {formattedItemsTotal}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {formattedDeliveryPrice}</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {formattedCartTotal}</strong>
            </div>
          </PriceContainer>
          <button disabled={buttonIsDisabled}>Confirmar pedido</button>
        </RequestContainer>
      </CoffeesSelected>
    </FormContainer>
  )
}
