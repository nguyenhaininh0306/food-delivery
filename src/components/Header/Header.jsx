import React, { useRef } from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/Header.css'

const nav__links = [
  {
    display: 'Home',
    path: '/home',
  },
  {
    display: 'Foods',
    path: '/foods',
  },
  {
    display: 'Cart',
    path: '/cart',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
]

const Header = () => {
  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header className='header'>
      <Container>
        <div className='nav__wrapper d-flex align-item-center justify-content-between'>
          <Link to={'/'}>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <h5>Tasty Treat</h5>
            </div>
          </Link>

          {/** --------Menu---------- */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <div className='menu d-flex align-item-center gap-5'>
              {nav__links.map((item, index) => {
                return (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? 'active__nav' : ''
                    }
                  >
                    {item.display}
                  </NavLink>
                )
              })}
            </div>
          </div>

          {/** -------Nav right icon-------- */}
          <div className='nav__right d-flex align-item-center gap-4'>
            <span className='cart__icon'>
              <i class='ri-shopping-basket-line'></i>
              <span className='cart__badge'>2</span>
            </span>

            <span className='user'>
              <Link to={'/login'}>
                <i class='ri-user-line'></i>
              </Link>
            </span>

            <span className='mobile__menu' onClick={toggleMenu}>
              <i class='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
