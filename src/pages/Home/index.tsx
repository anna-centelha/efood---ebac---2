import { useEffect, useState } from 'react'
import type { Eatery } from '../../types'
import RestaurantCard from '../../components/RestaurantCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, List } from './styles'

const Home = () => {
    const [restaurantes, setRestaurantes] = useState<Eatery[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((data) => setRestaurantes(data))
    }, [])

    return (
        <>
            <Header />
            <Container>
                <List>
                    {restaurantes.map((restaurante) => (
                        <RestaurantCard
                            key={restaurante.id}
                            id={restaurante.id}
                            title={restaurante.titulo}
                            image={restaurante.capa}
                            tags={[restaurante.tipo]}
                            description={restaurante.descricao}
                            rating={restaurante.avaliacao}
                        />
                    ))}
                </List>
            </Container>
            <Footer />
        </>
    )
}

export default Home