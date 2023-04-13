import { I18nManager, StyleSheet } from 'react-native'

import { AppTheme } from '@react-navigation/native'

export const inputFieldStyle = ({
  colors: { text },
  fonts: { largeFont },
  space: { small },
}: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 8,
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: '100%',
      height: '100%',
      flex: 1,
      flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },
    text: {
      ...largeFont,
      flex: 1,
      textAlignVertical: 'center',
      backgroundColor: 'transparent',
      marginHorizontal: small,
      height: '100%',
      color: text,
      textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
  })
