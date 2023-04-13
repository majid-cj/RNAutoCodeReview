import React, { ComponentType, FC } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export * from '@testing-library/react-native'

interface MockedNavigatorPros {
  component: ComponentType<any>
}

const Stack = createNativeStackNavigator()

export const MockedNavigator: FC<MockedNavigatorPros> = ({
  component,
  ...rest
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'MockedScreen'} component={component} {...rest} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
