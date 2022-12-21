import { CartSpan, HeaderContainer, LocationSpan } from './styles'
import headerLogo from '../assets/headerLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={headerLogo} alt="" />
      </NavLink>
      <div>
        <LocationSpan>
          <MapPin size={18} />
          Tatuí - SP
        </LocationSpan>
        <CartSpan>
          <NavLink to="/payment" title="Pagamento">
            <ShoppingCart size={18} />
          </NavLink>
        </CartSpan>
      </div>
    </HeaderContainer>
  )
}
