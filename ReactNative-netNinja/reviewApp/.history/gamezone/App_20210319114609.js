import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
// import About from './screens/about'
import Home from './screens/home'
import Navigator from './routes/homeStack'

const getFonts = () =>
  Font.loadAsync({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return <Navigator />
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log('error')}
      />
    )
  }
}
