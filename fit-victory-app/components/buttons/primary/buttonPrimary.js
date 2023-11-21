import { Text, TouchableOpacity, View } from 'react-native'

import styles from '../styles'

export const ButtonPrimary = (props) => {
  return(
    <TouchableOpacity onPress={ props.onPress }>
      <View style={ styles.btnPrimary }>
          <Text style={styles.btnText}>{ props.text }</Text>
      </View>
    </TouchableOpacity>
  )
}