import CoffeeImage from '../../assets/coffee-image.png'
import {
  BackgroundCoffeeContainer,
  BackgroundPackageContainer,
  BackgroundShoppingCartContainer,
  BackgroundTimerContainer,
  HeaderTitleContainer,
  MainContainer,
  TitleTextContainer,
  VantagesContainer,
} from './styles'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { CoffeeCard } from './components/CoffeeCard'

import { coffees } from '../../data/Coffees'

export function Home() {
  return (
    <div>
      <HeaderTitleContainer>
        <div>
          <TitleTextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleTextContainer>

          <VantagesContainer>
            <div>
              <span>
                <BackgroundShoppingCartContainer>
                  <ShoppingCart size={16} weight="fill" />
                </BackgroundShoppingCartContainer>
                Compra simples e segura
              </span>
              <span>
                <BackgroundTimerContainer>
                  <Timer size={16} weight="fill" />
                </BackgroundTimerContainer>
                Entrega rápida e rastreada
              </span>
            </div>

            <div>
              <span>
                <BackgroundPackageContainer>
                  <Package size={16} weight="fill" />
                </BackgroundPackageContainer>
                Embalagem mantém o café intacto
              </span>
              <span>
                <BackgroundCoffeeContainer>
                  <Coffee size={16} weight="fill" />
                </BackgroundCoffeeContainer>
                O café chega fresquinho até você
              </span>
            </div>
          </VantagesContainer>
        </div>

        <img src={CoffeeImage} alt="" />
      </HeaderTitleContainer>

      <MainContainer>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </div>
      </MainContainer>
    </div>
  )
}
