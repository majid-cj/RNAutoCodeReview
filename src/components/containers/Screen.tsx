import React, { FC, ReactElement } from 'react'
import { KeyboardAvoidingView, StatusBar, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { screenStyles } from './styles'
import { Toast, ToastProps } from '~/components/ui'
import { useStore } from '~/store'

interface Props {
  footer?: ReactElement
  header?: ReactElement
  toast?: ToastProps
  padding?: boolean
  loading?: boolean
  children: undefined | ReactElement | ReactElement[]
}

export const Screen: FC<Props> = ({
  header,
  footer,
  toast,
  padding,
  children,
}) => {
  const { theme } = useStore((state) => state)
  const style = screenStyles(theme)

  return (
    <KeyboardAvoidingView style={style.keyboardAvoid}>
      <SafeAreaView
        style={style.statusBarContainer}
        edges={['left', 'right', 'top']}>
        <StatusBar
          translucent
          barStyle={theme.dark ? 'light-content' : 'dark-content'}
        />
      </SafeAreaView>
      <SafeAreaView style={style.safeArea} edges={['left', 'right']}>
        {header && <View style={style.headerContainer}>{header}</View>}
        <View style={[style.container, padding && style.paddingContainer]}>
          {children}
        </View>
      </SafeAreaView>
      {footer && (
        <SafeAreaView style={style.footerContainer}>{footer}</SafeAreaView>
      )}
      {toast && <Toast toast={toast} />}
    </KeyboardAvoidingView>
  )
}
