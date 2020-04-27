import { ViewStyle, TextStyle, TouchableOpacityProps } from "react-native"

export interface PostItemFeedProps extends TouchableOpacityProps {
  uri: string
  text?: string
  subText? : string
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
}
