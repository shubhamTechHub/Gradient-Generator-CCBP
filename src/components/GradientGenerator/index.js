import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppBgContainer,
  GradientGeneratorCard,
  MainHeading,
  Description,
  GradientDirectionsListContainer,
  PickColorContainer,
  ColorCard,
  InputColor1,
  InputColor2,
  GenerateButton,
  HexCode,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    activeButtonId: gradientDirectionsList[0].directionId,
    property: {
      startColor: '#8ae323',
      endColor: '#014f7b',
      direction: gradientDirectionsList[0].value,
    },
  }

  onChangeColor1 = e => {
    this.setState({
      color1: e.target.value,
    })
  }

  onChangeColor2 = e => {
    this.setState({
      color2: e.target.value,
    })
  }

  onClickGenerate = () => {
    const {color1, color2, direction} = this.state
    const newProperty = {
      startColor: color1,
      endColor: color2,
      direction,
    }

    this.setState({
      property: newProperty,
    })
  }

  onChangeDirection = (value, directionId) => {
    this.setState({
      direction: value,
      activeButtonId: directionId,
    })
  }

  render() {
    const {color1, color2, property, activeButtonId} = this.state
    return (
      <AppBgContainer data-testid="gradientGenerator" property={property}>
        <GradientGeneratorCard>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <Description>Choose Direction</Description>
          <GradientDirectionsListContainer>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                onChangeDirection={this.onChangeDirection}
                isActive={eachItem.directionId === activeButtonId}
                directions={eachItem}
                key={eachItem.directionId}
              />
            ))}
          </GradientDirectionsListContainer>
          <Description>Pick the Colors</Description>
          <PickColorContainer>
            <ColorCard>
              <HexCode>{color1}</HexCode>
              <InputColor1
                onChange={this.onChangeColor1}
                value={color1}
                type="color"
              />
            </ColorCard>
            <ColorCard>
              <HexCode>{color2}</HexCode>
              <InputColor2
                onChange={this.onChangeColor2}
                value={color2}
                type="color"
              />
            </ColorCard>
          </PickColorContainer>
          <GenerateButton onClick={this.onClickGenerate} type="button">
            Generate
          </GenerateButton>
        </GradientGeneratorCard>
      </AppBgContainer>
    )
  }
}

export default GradientGenerator
