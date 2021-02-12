import React from 'react'
import { Label } from 'semantic-ui-react'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
  'lighterPurple',
  'lighterGrey',
]

const LabelExampleCircularEmpty = () => (
  <div>{colors.map(color => <Label circular color={color} empty key={color} />)}</div>
)

export default LabelExampleCircularEmpty
