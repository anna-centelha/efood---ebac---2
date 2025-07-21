import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    `

    export const ModalContent = styled.div`
    background: #e66767;
    color:  #FFEBD9;
    padding: 32px;
    position: relative;
    max-width: 1024px;
    width: 100%;
    display: flex;
    gap: 32px;
    align-items: flex-start;
    `

    export const CloseButton = styled.button`
    height: 16px;
    width: 16px;
    position: absolute;
    top: 14px;
    right: 16px;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;

    img {
        width: 16px;
        height: 16px;
    }
    `

    export const ModalImage = styled.img`
    max-width: 380px;
    height: 280px;
    `

    export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    `

    export const ModalTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 16px;
    height: 21px;
    color: #FFffff;
    `

    export const ModalPortion = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 24px;
    line-height: 22px;
    `

    export const ModalDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 25px;
    `

    export const ModalButton = styled.button`
    height: 24px;
    font-size: 14px;
    width: 218px;
    background: #FFEBD9;
    color: #e66767;
    border: none;
    font-weight: 700;
    cursor: pointer;
    align-self: flex-start;
`