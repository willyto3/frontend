import React from 'react'
import { NavLink } from 'react-router-dom'
import { Wrapper } from './ErrorPageStyle'
import { Button } from '../../styles/Button'

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h2>404</h2>
        <h3>Estas Perdido</h3>
        <p>
          La pagina que estas tratando de ingresar no existe. Como llegaste aca
          es un misterio, pero puedes volver a la pagina principal presionando
          el boton.
        </p>

        <NavLink to='/'>
          <Button>Volver al Home</Button>
        </NavLink>
      </div>
    </Wrapper>
  )
}

export default ErrorPage
