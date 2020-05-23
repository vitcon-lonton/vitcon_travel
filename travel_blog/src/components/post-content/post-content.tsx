import * as React from "react"
import { ViewStyle, TextStyle, TouchableOpacityProps, View, Image, ImageStyle } from "react-native"
import { mergeAll, flatten } from "ramda"
import { spacing, color } from "../../theme"
import { Text } from "../text/text"
import { PostSharedOptions } from "../post-shared-options/post-shared-options"

export interface PostContentProps extends TouchableOpacityProps {
  title?: string
  content?: string
  style?: ViewStyle | ViewStyle[]
}

const postImg = require("./post_img.jpg")

const FULL: ViewStyle = { flex: 1 }

const TEXT: TextStyle = { color: color.textColor }

const TITLE: TextStyle = { ...TEXT, fontSize: 18 }

const CONTENT: TextStyle = { ...TEXT, fontSize: 15, lineHeight: 22, marginBottom: spacing[5] }

const IMAGE_WRAP: ImageStyle = { borderRadius: 20, width: "100%", height: 200, marginBottom: 20 }

const DF_CONTENT =
  "This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. \n. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship."

export function PostContent(props: PostContentProps) {
  const {
    title = "Designer handed you this screen and, in that case, congrats!",
    content = DF_CONTENT,
    style,
  } = props

  const viewStyle = mergeAll(flatten([FULL, style]))

  return (
    <View>
      <View style={viewStyle}></View>
      <View style={{ ...FULL, backgroundColor: color.background }}>
        <Text
          style={mergeAll([TITLE, { textAlign: "auto", marginBottom: 20 }])}
          preset="header"
          text={title}
        />

        <Text style={CONTENT} text={content} />

        <Image source={postImg} style={IMAGE_WRAP} />

        <Text
          style={CONTENT}
          text="For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite."
        />
      </View>
      <Text style={mergeAll([TITLE, { marginBottom: 10 }])} preset="header" text="Share this post" />
      <PostSharedOptions />
    </View>
  )
}
