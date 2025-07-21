import styled from 'styled-components'

export const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  padding: 40px 80px;
  justify-items: center;

  @media (max-width: 768px) {
    padding: 24px;
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  position: relative;
  width: 472px;
  heigth: 398px;
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
  border: 1px solid #e66767;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.div`
  background-color: #e66767;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
`

export const Info = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
  margin: 0;
  margim-bottom: 30px;
`

export const TitleRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: #e66767;

  img {
    width: 16px;
    margin-left: 4px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #e66767;
  margin: 8px 0;
  line-height: 22px;
  margin-bottom: 15px;
`
export const Button = styled.button`
  margin-top: 111px;
  padding: 8px 16px;
  background-color: #e66767;
  color: #FFEBD9;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: #c54848;
  }
`