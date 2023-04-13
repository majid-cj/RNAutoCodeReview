import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Animated, Text } from 'react-native'

import { toastStyle } from './styles'
import { useStore } from '~/store'

interface Props {
  toast: ToastProps
}

export type ToastProps = {
  error?: boolean
  success?: boolean
  message: string | undefined
}

export const Toast: FC<Props> = ({ toast: toast }) => {
  const { theme } = useStore((state) => state)
  const { colors } = theme
  const initialState = {
    error: false,
    success: false,
    message: undefined,
  }
  const [toastValue, setToastValue] = useState<ToastProps>(initialState)
  const styles = toastStyle(theme)

  const animation = useRef(new Animated.Value(0)).current
  const startAnimation = useMemo(
    () => () => {
      animation.stopAnimation()
      animation.setValue(0)
      Animated.timing(animation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }).start()
    },
    [animation]
  )

  const translateY = animation.interpolate({
    inputRange: [0, 0.125, 0.875, 1],
    outputRange: [0, -150, -150, 0],
    extrapolate: 'clamp',
  })

  useEffect(() => {
    setToastValue(toast)
    startAnimation()
  }, [toast, startAnimation])

  const { message, error, success } = toastValue

  if (message === undefined) {
    return null
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: translateY }],
        },
        error && { backgroundColor: colors.danger },
        success && { backgroundColor: colors.success },
      ]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  )
}
