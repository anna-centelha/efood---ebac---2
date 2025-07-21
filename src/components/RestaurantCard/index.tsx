import { Card, Image, Info, Title, Tag, TagsContainer, Description, RatingContainer, TitleRating } from './styles'
import Button from '../Button'
import estrela from '../../assets/icons/star.png'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    title: string
    image: string
    tags: string[]
    description: string
    rating: number
}

const RestaurantCard = ({ id, title, image, tags, description, rating }: Props) => (
    <Card>
        <Image src={image} alt={title} />
        <TagsContainer>
            {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
            ))}
        </TagsContainer>
        <Info>
            <TitleRating>
                <Title>{title}</Title>
                <RatingContainer>
                    {rating.toFixed(1)} <img src={estrela} alt="Estrela" />
                </RatingContainer>
            </TitleRating>
            <Description>{description}</Description>
            <Link to={`/restaurante/${id}`}>
                <Button>Saiba mais</Button>
            </Link>
        </Info>
    </Card>
)

export default RestaurantCard