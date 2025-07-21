import { MenuItemCard, MenuItemDescription, MenuItemTitle, MenuItemImage, MenuItemButton } from './styles'

type Props = {
    title: string
    description: string
    image: string
    onClick: () => void
}

const MenuItem = ({ title, description, image, onClick }: Props) => (
    <MenuItemCard>
        <MenuItemImage src={image} alt={title} />
        <MenuItemTitle>{title}</MenuItemTitle>
        <MenuItemDescription>{description}</MenuItemDescription>
        <MenuItemButton onClick={onClick}>Mais detalhes</MenuItemButton>
    </MenuItemCard>
)

export default MenuItem