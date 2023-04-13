import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { ACTIVE_OPACITY, appButtonStyles } from './styles'
import { useStore } from '~/store'

interface Props {
  label: string
  onPress: () => void
}

export const AppButton: FC<Props> = ({ label, onPress }) => {
  const { theme } = useStore((state) => state)
  const styles = appButtonStyles(theme)

  return (
    <TouchableOpacity
      testID={'app-button'}
      onPress={onPress}
      activeOpacity={ACTIVE_OPACITY}
      style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}
