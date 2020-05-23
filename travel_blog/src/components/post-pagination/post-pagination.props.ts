import { ViewStyle, TextStyle, TouchableOpacityProps } from "react-native"

export interface PostPaginationProps extends TouchableOpacityProps {
  uri: string
  name?: string
  title?: string
  postTime? : string
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
}
