import { useEffect } from 'react'
import {
    Overlay,
    ModalContent,
    CloseButton,
    ModalImage,
    Content,
    ModalTitle,
    ModalDescription,
    ModalPortion,
    ModalButton
} from './styles.ts'
import close from '../../assets/close.png'

type Props = {
    isOpen: boolean
    onClose: () => void
    title: string
    description: string
    image: string
    portion: string
    price: string
}

const Modal = ({
    isOpen,
    onClose,
    title,
    description,
    image,
    portion,
    price
}: Props) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleEsc)
        return () => document.removeEventListener('keydown', handleEsc)
    }, [onClose])

    if (!isOpen) return null

    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}><img src={close} alt="botao fechar" /></CloseButton>
                <ModalImage src={image} alt={title} />
                <Content>
                    <ModalTitle>{title}</ModalTitle>
                    <ModalDescription>{description}</ModalDescription>
                    <ModalPortion>Serve: {portion}</ModalPortion>
                    <ModalButton onClick={onClose}>Adicionar ao carrinho - R$ {price}</ModalButton>
                </Content>
            </ModalContent>
        </Overlay>
    )
}

export default Modal