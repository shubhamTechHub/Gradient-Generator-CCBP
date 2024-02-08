import {List, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directions, onChangeDirection, isActive} = props
  const {displayText, value, directionId} = directions

  const onClickButton = () => {
    onChangeDirection(value, directionId)
  }

  return (
    <List>
      <Button isActive={isActive} onClick={onClickButton} type="button">
        {displayText}
      </Button>
    </List>
  )
}

export default GradientDirectionItem
