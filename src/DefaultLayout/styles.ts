import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 118.4rem; /* O layout tem 1120 de tamanho mas queremos deixar um padding lateral, então tem que colocar o width um pouco menor*/
  min-height: calc(100vh - 10rem);
  margin: 3.2rem auto 0;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
`
