import { HeaderContainer, Menu } from './styles'
import logo from '../../assets/images/logo.png'

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
                        <a href="#">Séries</a>
                    </li>
                    <li className="menu__list__item">
                        <a href="#">Filmes</a>
                    </li>
                    <li className="menu__list__item">
                        <a href="#">Sobre</a>
                    </li>
                </ul>
            </Menu>
        </HeaderContainer>
    )
}

export default Header
