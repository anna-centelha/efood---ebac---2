import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: #ffebd9;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 300px;
    height: 298px;
`

export const SocialLinks = styled.div`
    margin: 24px 0;

    a {
        margin: 0 8px;
    }

    img {
        width: 24px;
        height: 24px;
    }
`

export const Text = styled.p`
    color: #e66767;
    font-size: 14px;
    max-width: 680px;
    margin: 40px 0 0 0;
    line-height: 22px;
    text-align: center;
`