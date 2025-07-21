import { Background, Cuisine, Title, Content } from './styles'
import Wrapper from '../Container/styles.ts'

type Props = {
    image: string
    name: string
    cuisine: string
}

const Banner = ({ image, name, cuisine }: Props) => (
    <Background image={image}>
        <Wrapper>
            <Content>
                <Cuisine>{cuisine}</Cuisine>
                <Title>{name}</Title>
            </Content>
        </Wrapper>
    </Background>
)

export default Banner