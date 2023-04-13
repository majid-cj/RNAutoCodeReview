import { Dimensions, StyleSheet } from 'react-native'

import { AppTheme } from '@react-navigation/native'

export const ACTIVE_OPACITY = 1
export const APP_BUTTON_HEIGHT = 50
export const APP_BUTTON_WIDTH = Dimensions.get('screen').width - 32
export const APP_BUTTON_BORDER_RADIUS = 12
export const APP_BUTTON_BORDER_WIDTH = 0

export const appButtonStyles = ({ colors, fonts, space }: AppTheme) =>
  StyleSheet.create({
    container: {
      width: APP_BUTTON_WIDTH,
      height: APP_BUTTON_HEIGHT,
      backgroundColor: colors.border,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      margin: space.medium,
      borderRadius: APP_BUTTON_BORDER_RADIUS,
      borderWidth: APP_BUTTON_BORDER_WIDTH,
    },
    label: {
      ...fonts.xLargeFont,
      color: colors.background,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
  })
