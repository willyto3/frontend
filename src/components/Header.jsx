import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/'>
        <img src='logo.png' alt='Logo' />
      </NavLink>
      <NavBar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  img {
    height: 10rem;
  }
`

export default Header
