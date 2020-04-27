import * as React from "react"
import { TouchableOpacity, TextStyle, ViewStyle, Image, ImageStyle } from "react-native"
import { Text } from "../text/text"
import { PostItemFeedProps } from "./post-item-feed.props"
import { mergeAll, flatten } from "ramda"
import { spacing, color } from "../../theme"

const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  borderRadius: 10,
  justifyContent: "flex-end",
  alignItems: "flex-start",
  height: 210,
  width: 160
}

const BASE_IMAGE_VIEW: ImageStyle = {
  position: 'absolute',
  height: 210,
  width: 160,
  alignSelf: 'stretch',
  borderRadius: 10
}

const BASE_TEXT: TextStyle = {
  fontSize: 12,
  fontWeight: '700',
  marginBottom: 5,
  color: color.palette.white
}

const BASE_SUBTEXT: TextStyle = {
  fontSize: 8,
  fontWeight: '500',
  color: color.palette.white
}
export function PostItemFeed(props: PostItemFeedProps) {
  // grab the props
  const {
    subText,
    uri,
    text,
    style,
    textStyle: textStyleOverride,
    ...rest
  } = props

  const viewStyle = mergeAll(flatten([BASE_VIEW, style]))
  const textStyle = mergeAll(
    flatten([BASE_TEXT, textStyleOverride]),
  )
  const subTextStyle = mergeAll(
    flatten([BASE_SUBTEXT, textStyleOverride]),
  )

  return (
    <TouchableOpacity style={viewStyle} {...rest}>
      <Image source={{ uri }} style={BASE_IMAGE_VIEW} />
      <Text text={text} style={textStyle} />
      <Text text={subText} style={subTextStyle} />
    </TouchableOpacity>
  )
}
