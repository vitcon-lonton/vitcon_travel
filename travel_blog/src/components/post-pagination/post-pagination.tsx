/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { TouchableOpacity, TextStyle, ViewStyle, Image, ImageStyle, View } from "react-native"
import { Icon, Avatar } from "react-native-elements"
import { Text } from "../text/text"
import { mergeAll, flatten } from "ramda"
import { spacing, color, palette } from "../../theme"
import { PostPaginationProps } from "./post-pagination.props"

const ROW_VIEW: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const BASE_VIEW: ViewStyle = {
  flexDirection: "row",
  paddingVertical: spacing[2],
  borderRadius: 10,
}

const TEXT_GROUP: ViewStyle = {
  paddingTop: 15,
  flexDirection: "column",
  flex: 1,
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  paddingLeft: 10,
}

const BASE_IMAGE_VIEW: ImageStyle = {
  height: 180,
  width: 160,
  borderRadius: 10,
}

const USER_TITLE_TEXT: TextStyle = {
  fontSize: 11,
  fontWeight: "400",
  marginBottom: 5,
  marginTop: 8,
  color: color.palette.black,
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

const BASE_AVATAR_VIEW: ViewStyle = {
  height: 26,
  width: 26,
  marginRight: 5,
}

export function PostPagination(props: PostPaginationProps) {
  // grab the props
  const { name, uri, title, style, textStyle: textStyleOverride, ...rest } = props

  const viewStyle = mergeAll(flatten([BASE_VIEW, style]))
  const titleTextStyle = mergeAll(flatten([BASE_TITLE_TEXT, textStyleOverride]))
  const nameTextStyle = mergeAll(flatten([BASE_NAME_TEXT, textStyleOverride]))
  const bottomView = mergeAll(flatten([ROW_VIEW, { alignContent: "space-around" }]))
  const leftBottomView = mergeAll(flatten([ROW_VIEW, { flex: 1 }]))

  return (
    <TouchableOpacity style={viewStyle} {...rest}>
      <Image source={{ uri }} style={BASE_IMAGE_VIEW} />
      <View style={TEXT_GROUP}>
        <View>
          <Icon type="font-awesome-5" solid name="award" size={16} color={palette.orange} />
          <Text text="Editor Choise" style={USER_TITLE_TEXT} />
        </View>

        <Text text={title} style={titleTextStyle} />
        <Text
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          style={CONTENT_POST_TEXT}
        />
        <View style={bottomView}>
          <View style={leftBottomView}>
            <Avatar
              rounded
              size="small"
              containerStyle={BASE_AVATAR_VIEW}
              source={{
                uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
            />
            <Text text={name} style={nameTextStyle} />
          </View>
          <Icon type="font-awesome-5" solid name="ellipsis-h" size={15} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
