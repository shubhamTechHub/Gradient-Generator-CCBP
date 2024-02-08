import styled from 'styled-components'

export const List = styled.li`
  margin-right: 10px;
`

export const Button = styled.button`
  width: 90px;
  height: 30px;
  border: none;
  border-radius: 6px;
  background-color: #ffffff;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 600;
  cursor: pointer;
`
