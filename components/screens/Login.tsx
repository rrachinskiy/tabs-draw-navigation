import React, { useState, useContext } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

import Context from '../../context'

const HomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const context = useContext(Context)
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.usernameInput}
        placeholder="Type here your username!"
        onChangeText={usName => setUsername(usName)}
        defaultValue={username}
      />
      <View style={styles.loginButton}>
        <Button
          onPress={() => {
            context.username = username
            navigation.navigate('Welcome')
          }}
          title="Login"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: 280,
  },
  usernameInput: {
    marginTop: 40,
    height: 40,
    textAlign: 'center',
  },
})

export default HomeScreen
