import * as React from "react"
import { TouchableOpacity, TextStyle, ViewStyle, Image, ImageStyle, View } from "react-native"
import { Text } from "../text/text"
import { PostUserProps } from "./post-user.props"
import { mergeAll, flatten } from "ramda"
import { spacing, color, palette } from "../../theme"

const BASE_VIEW: ViewStyle = {
  flexDirection: "row",
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  borderRadius: 10,
  alignItems: "center",
  backgroundColor: palette.orange,
  width: 210,
  height: 85,
}

const TEXT_GROUP: ViewStyle = {
  flexDirection: "column",
  flex: 3,
  justifyContent: "center",
  alignItems: "flex-start",
  paddingLeft: 10,
}

const BASE_IMAGE_VIEW: ImageStyle = {
  height: 45,
  width: 45,
  borderRadius: 25,
}

const BASE_TITLE_TEXT: TextStyle = {
  fontSize: 12,
  fontWeight: "700",
  marginBottom: 3,
  color: color.palette.white,
}

const BASE_NAME_TEXT: TextStyle = {
  fontSize: 8,
  fontWeight: "500",
  marginBottom: 3,
  color: color.palette.white,
}

const BASE_POST_TIME_TEXT: TextStyle = {
  fontSize: 8,
  fontWeight: "500",
  color: color.palette.white,
}

export function PostUser(props: PostUserProps) {
  // grab the props
  const { name, uri, title, postTime, style, color, textStyle: textStyleOverride, ...rest } = props

  const viewStyle = mergeAll(flatten([BASE_VIEW, style, { backgroundColor: color || palette.orange }]))
  const titleTextStyle = mergeAll(flatten([BASE_TITLE_TEXT, textStyleOverride]))
  const nameTextStyle = mergeAll(flatten([BASE_NAME_TEXT, textStyleOverride]))
  const postTimeTextStyle = mergeAll(flatten([BASE_POST_TIME_TEXT, textStyleOverride]))

  return (
    <TouchableOpacity style={viewStyle} {...rest}>
      <Image source={{ uri }} style={BASE_IMAGE_VIEW} />
      <View style={TEXT_GROUP}>
        <Text text={name} style={nameTextStyle} />
        <Text text={title} style={titleTextStyle} />
        <Text text={postTime} style={postTimeTextStyle} />
      </View>
    </TouchableOpacity>
  )
}
