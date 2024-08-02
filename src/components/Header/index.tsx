import { HeaderContainer, Menu, MenuHamb } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <HeaderContainer>
            <h1>
                <img srcSet={logo} alt="LUDOS PRODUCTION" />
            </h1>
            <Menu>
                <ul className="menu__list">
                    <li className="menu__list__item">
                        <a href="#">Início</a>
                    </li>
                    <li className="menu__list__item">
                        <a href="#">Serviços</a>
                    </li>
                    <li className="menu__list__item">
                        <a href="#">Clientes</a>
                    </li>
                    <li className="menu__list__item">
                        <a href="#">Sobre</a>
                    </li>
                </ul>
            </Menu>
            <MenuHamb>
                <span></span>
                <span></span>
                <span></span>
            </MenuHamb>
        </HeaderContainer>
    )
}

export default Header
