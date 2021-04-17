import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

import Context from '../../../context'

const Welcome = () => {
  const context = useContext(Context)
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome {context.username}! Nice to meet you!
      </Text>
    </View>
  )
}

export default Welcome
