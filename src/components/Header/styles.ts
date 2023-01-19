import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      text-decoration: none;
      padding: 0.8rem;
      border-radius: 6px;
      font-size: 1.4rem;
      position: relative;

      > div {
        max-height: 2.2rem;
        color: ${(props) => props.theme.purple};
      }
    }

    a:first-child {
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      cursor: inherit;
    }

    a:last-child {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const RequestNumber = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 1.2rem;

  width: 2rem;
  height: 2rem;

  border-radius: 99999px;

  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
`
