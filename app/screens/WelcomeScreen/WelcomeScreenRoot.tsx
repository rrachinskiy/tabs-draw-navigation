import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Welcome from './Welcome'
import AboutUs from './AboutUs'
import Contact from './Contact'

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const WelcomeRoot = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="About us" component={AboutUs} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="About us" component={AboutUs} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator> */}
    </>
  )
}

export default WelcomeRoot
