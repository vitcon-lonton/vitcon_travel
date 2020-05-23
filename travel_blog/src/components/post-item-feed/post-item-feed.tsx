import * as React from "react"
import { TouchableOpacity, TextStyle, ViewStyle, Image, ImageStyle, View } from "react-native"
import { mergeAll, flatten } from "ramda"
import { Text } from "../text/text"
import { spacing, color } from "../../theme"
import { PostItemFeedProps } from "./post-item-feed.props"

const BASE_VIEW: ViewStyle = {
  justifyContent: "flex-end",
  alignItems: "flex-start",
  flex: 1,
  borderRadius: 10,
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
}

const BASE_IMAGE_VIEW: ImageStyle = {
  position: "absolute",
  height: "100%",
  width: "100%",
  borderRadius: 10,
  alignSelf: "stretch",
}

const BASE_TEXT: TextStyle = {
  fontSize: 12,
  fontWeight: "700",
  marginBottom: 5,
  color: color.palette.white,
}

const BASE_SUBTEXT: TextStyle = {
  fontSize: 8,
  fontWeight: "500",
  color: color.palette.white,
}

export function PostItemFeed(props: PostItemFeedProps) {
  const { subText, uri, text, style, textStyle: textStyleOverride, ...rest } = props

  const textStyle = mergeAll(flatten([BASE_TEXT, textStyleOverride]))
  const subTextStyle = mergeAll(flatten([BASE_SUBTEXT, textStyleOverride]))

  return (
    <TouchableOpacity style={style} {...rest}>
      <Image source={{ uri }} style={BASE_IMAGE_VIEW} />
      <View style={BASE_VIEW}>
        <Text text={text} style={textStyle} />
        <Text text={subText} style={subTextStyle} />
      </View>
    </TouchableOpacity>
  )
}
