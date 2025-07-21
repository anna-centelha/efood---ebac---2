import logo from '../../assets/logo.png'
import instagram from '../../assets/icons/instagram.png'
import facebook from '../../assets/icons/facebook.png'
import twitter from '../../assets/icons/twitter.png'

import { FooterContainer, SocialLinks, Text } from './styles'

const Footer = () => (
    <FooterContainer>
        <img src={logo} alt="efood" />
        <SocialLinks>
            <a href="#">
                <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
                <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
                <img src={twitter} alt="Twitter" />
            </a>
        </SocialLinks>
        <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </Text>
    </FooterContainer>
)

export default Footer