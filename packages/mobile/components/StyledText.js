import React from 'react'
import { Text } from 'react-native'

export default ({ style, ...rest }) => {
  return <Text {...rest} style={[style, { fontFamily: 'space-mono' }]} />
}
