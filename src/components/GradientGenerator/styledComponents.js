import styled from 'styled-components'

const generateLinearGradient = props => {
  const {property} = props
  const {startColor, endColor, direction} = property
  return `linear-gradient(to ${direction}, ${startColor}, ${endColor})`
}

export const AppBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${props => generateLinearGradient(props)};
  height: 100vh;
`

export const GradientGeneratorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  color: #ffffff;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ededed;
`

export const GradientDirectionsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 25px;
  list-style-type: none;
`
export const PickColorContainer = styled.div`
  display: flex;
`
export const ColorCard = styled.div`
  text-align: center;
  margin: 0 20px 20px 20px;
`
export const InputColor1 = styled.input`
  border: none;
  background-color: transparent;
  width: 90px;
  height: 40px;
`
export const InputColor2 = styled(InputColor1)``

export const GenerateButton = styled.button`
  padding: 8px 18px;
  border: none;
  border-radius: 6px;
  background-color: #00c9b7;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 600;
  cursor: pointer;
`
export const HexCode = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
`
