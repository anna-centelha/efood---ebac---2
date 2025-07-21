import styled from 'styled-components'

type BackgroundProps = {
    image: string
}

export const Background = styled.div<BackgroundProps>`
    width: 100%;
    height: 280px;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
        ),
        url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    `

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
`

export const Cuisine = styled.span`
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    margin: 0;
    border: 0;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0;
    position: relative;
    text-align: left;
    bottom: 157px;
    padding: 0;
    width: 101px;
    height: 33.25px;
    text-shadow: 1px 1px 4px #000;
`

export const Title = styled.h2`
    color: #fff;
    border: 0;
    font-size: 32px;
    font-weight: bold;
    margin: 0;
`