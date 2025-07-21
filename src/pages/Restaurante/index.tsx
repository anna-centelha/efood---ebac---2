import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MenuItem from '../../components/MenuItem'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'
import { LoadingMessage, Container, DishesGrid } from './styles'
import type { Eatery, FoodItem } from '../../types'
import Banner from '../../components/Banner'

const Restaurante = () => {
    const { id } = useParams()
    const [restaurante, setRestaurante] = useState<Eatery | null>(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedDish, setSelectedDish] = useState<FoodItem | null>(null)

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((data) => setRestaurante(data))
    }, [id])

    const openModal = (prato: FoodItem) => {
        setSelectedDish(prato)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setSelectedDish(null)
    }

    if (!restaurante) return <LoadingMessage>Carregando...</LoadingMessage>

    return (
        <>

            <Banner
                image={restaurante.capa}
                name={restaurante.titulo}
                cuisine={restaurante.tipo}
            />

            <Container>
                <DishesGrid>
                    {restaurante.cardapio.map((prato) => (
                        <MenuItem
                            key={prato.id}
                            title={prato.nome}
                            description={prato.descricao}
                            image={prato.foto}
                            onClick={() => openModal(prato)}
                        />
                    ))}
                </DishesGrid>
            </Container>
            <Footer />

            {selectedDish && (
                <Modal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    title={selectedDish.nome}
                    description={selectedDish.descricao}
                    image={selectedDish.foto}
                    portion={selectedDish.porcao}
                    price={selectedDish.preco.toString()}
                />
            )}
        </>
    )
}

export default Restaurante