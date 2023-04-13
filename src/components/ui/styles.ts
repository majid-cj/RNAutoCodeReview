import { StyleSheet } from 'react-native'

import { AppTheme } from '@react-navigation/native'

export const toastStyle = ({ colors, fonts }: AppTheme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: -75,
      alignSelf: 'center',
      borderRadius: 8,
      overflow: 'hidden',
      justifyContent: 'center',
      opacity: 0.8,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    message: {
      ...fonts.largeFont,
      color: colors.lightBackground,
      textAlign: 'center',
      flex: 1,
      textAlignVertical: 'center',
    },
  })
