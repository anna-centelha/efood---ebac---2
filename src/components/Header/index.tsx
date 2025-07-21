import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {
    HeaderBar,
    Logo,
    Nav,
    Cart,
    CenteredWrapper,
    HeaderWrapper,
    CenteredText
} from './styles'
import Wrapper from '../Container/styles'

const Header = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <HeaderBar $isHome={isHome}>
            {isHome ? (
                <CenteredWrapper>
                    <HeaderWrapper>
                    <Logo src={logo} alt="efood logo" $isHome={isHome} />
                    <CenteredText>
                        Viva experiências gastronômicas no conforto da sua casa
                    </CenteredText>
                    </HeaderWrapper>
                </CenteredWrapper>
            ) : (
                <>
                <Wrapper>
                    <Nav>Restaurantes</Nav>
                    <Logo src={logo} alt="efood logo" />
                    <Cart>0 produto(s) no carrinho</Cart>
                </Wrapper>
                </>
            )}
        </HeaderBar>
    )
}

export default Header