import { ViewStyle, TextStyle, TouchableOpacityProps } from "react-native"

export interface PostUserProps extends TouchableOpacityProps {
  uri: string
  name?: string
  title? : string
  postTime? : string
  color? : string
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
}
