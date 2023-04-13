import React, { FC, useState } from 'react'
import { KeyboardTypeOptions, TextInput, View } from 'react-native'

import { inputFieldStyle } from './styles'
import { FieldContainer } from '~/components/containers'
import { useStore } from '~/store'

interface Props {
  placeholder: string
  error: boolean
  testID?: string
  secure?: boolean
  keyBoard?: KeyboardTypeOptions
  onTextChange: (value: string) => void
}

export const InputField: FC<Props> = ({
  placeholder,
  error,
  testID = '',
  secure = false,
  keyBoard = 'default',
  onTextChange,
}) => {
  const [value, setValue] = useState('')
  const { theme } = useStore((state) => state)
  const styles = inputFieldStyle(theme)

  const onInputChange = (value: string) => {
    setValue(value)
    onTextChange(value)
  }

  return (
    <FieldContainer error={error}>
      <View style={styles.container}>
        <TextInput
          testID={testID}
          value={value}
          keyboardType={keyBoard}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.accent}
          onChangeText={onInputChange}
          secureTextEntry={secure}
          style={styles.text}
          numberOfLines={1}
          multiline={false}
        />
      </View>
    </FieldContainer>
  )
}
