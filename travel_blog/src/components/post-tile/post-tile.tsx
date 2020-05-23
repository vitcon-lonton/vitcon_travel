import * as React from "react"
import { TouchableOpacity, TextStyle, ViewStyle, Image, ImageStyle, View } from "react-native"
import { Text } from "../text/text"
import { mergeAll, flatten } from "ramda"
import { spacing, color, palette } from "../../theme"
import { PostTileProps } from "./post-tile.props"

const BASE_VIEW: ViewStyle = {
  flexDirection: "row",
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[1],
  backgroundColor: palette.white,
  borderRadius: 8,
}

const TEXT_GROUP: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  paddingLeft: 10,
}

const BASE_IMAGE_VIEW: ImageStyle = {
  height: 80,
  width: 80,
  borderRadius: 10,
}

const BASE_TITLE_TEXT: TextStyle = {
  fontSize: 12,
  fontWeight: "700",
  marginBottom: 3,
  color: color.palette.black,
}

const BASE_NAME_TEXT: TextStyle = {
  fontSize: 9,
  fontWeight: "500",
  marginBottom: 3,
  color: color.palette.black,
}

const CONTENT_POST_TEXT: TextStyle = {
  lineHeight: 16,
  fontSize: 10,
  fontWeight: "400",
  color: color.palette.black,
}

export function PostTile(props: PostTileProps) {
  // grab the props
  const { name, uri, title, style, textStyle: textStyleOverride, ...rest } = props

  const viewStyle = mergeAll(flatten([BASE_VIEW, style]))
  const titleTextStyle = mergeAll(flatten([BASE_TITLE_TEXT, textStyleOverride]))
  const nameTextStyle = mergeAll(flatten([BASE_NAME_TEXT, textStyleOverride]))

  return (
    <TouchableOpacity style={viewStyle} {...rest}>
      <Image source={{ uri }} style={BASE_IMAGE_VIEW} />
      <View style={TEXT_GROUP}>
        <Text text={title} style={titleTextStyle} />
        <Text
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          style={CONTENT_POST_TEXT}
        />
        <View>
          <Text text={name} style={nameTextStyle} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
