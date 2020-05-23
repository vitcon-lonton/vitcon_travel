import * as React from "react"
import { TextStyle, ViewStyle, ImageStyle, View, FlatList } from "react-native"
import { merge } from "ramda"
import { spacing, color } from "../../theme"
import { PostItemFeed } from "../post-item-feed/post-item-feed"
import { screenHeight } from "../../utils/dimensions"

export interface PostDynamicListProps {
  uri: string
  text?: string
  subText? : string
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
}

const URI =
  "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1024724898%2F0x0.jpg"

const FULL: ViewStyle = { flex: 1 }

const FULL_PADDING: ViewStyle = { padding: 15, paddingTop: 0 }

const HEIGHT_POST = { height: screenHeight / 4.2 }

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

export function PostDynamicList(props: PostDynamicListProps) {
  const { subText, uri, text, style, ...rest } = props

  return (
    <FlatList
      style={FULL_PADDING}
      showsVerticalScrollIndicator={false}
      data={[1, 2, 3, 4]}
      keyExtractor={(index) => `${index}`}
      renderItem={({ item, index }) => {
        let component = (
          <View key={`${item}`} style={{ flexDirection: "row", marginBottom: 10 }}>
            <PostItemFeed
              style={merge({ flex: 5 }, HEIGHT_POST)}
              uri={URI}
              text="A cross-platform Tab View component for React Native."
              subText="2 hours ago"
            />
            <View style={{ width: 10 }} />
            <View style={{ flex: 6 }}>
              <PostItemFeed
                style={{ flex: 1, height: "50%" }}
                uri={URI}
                text="A cross-platform Tab View component for React Native."
                subText="2 hours ago"
              />
              <View style={{ height: 10 }} />
              <PostItemFeed
                style={{ flex: 1, height: "50%" }}
                uri={URI}
                text="A cross-platform Tab View component for React Native."
                subText="2 hours ago"
              />
            </View>
          </View>
        )

        if (index % 2 === 0) {
          component = (
            <View key={`${item}`}
              style={merge(
                { width: "100%", height: screenHeight / 4.2, marginBottom: 10 },
                HEIGHT_POST,
              )}
            >
              <PostItemFeed
                style={{ flex: 1 }}
                uri={URI}
                text="A cross-platform Tab View component for React Native."
                subText="2 hours ago"
              />
            </View>

          )
        }

        return component
      }}
    />
  )
}
