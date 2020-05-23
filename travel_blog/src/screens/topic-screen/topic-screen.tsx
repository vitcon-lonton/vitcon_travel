/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { View, ViewStyle, FlatList } from "react-native"
import { merge } from "ramda"
import { Screen, HeaderPrimary, HomeWallpaper, PostItemFeed } from "../../components"
import { color } from "../../theme"
import { translate } from "../../i18n"
import { screenHeight } from "../../utils/dimensions"

const FULL: ViewStyle = { flex: 1 }

const FULL_PADDING: ViewStyle = { padding: 15, paddingTop: 0 }

const HEIGHT_POST = { height: screenHeight / 4.2 }

const HEADER = { borderBottomWidth: 0 }

const ARROW_LEFT_ICON = { icon: "arrow-left", onPress: null }

const SEARCH_ICON = { size: 18, icon: "search", onPress: null }

const TITLE = { text: translate("topicScreen.sports") }

const URI =
  "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1024724898%2F0x0.jpg"

export interface TopicScreenProps {
  navigation: any
}

export const TopicScreen: React.FunctionComponent<TopicScreenProps> = (props) => {
  const nextScreen = React.useMemo(() => () => props.navigation.navigate("detail"), [
    props.navigation,
  ])

  return (
    <View style={FULL}>
      <HomeWallpaper text="World" />
      <Screen unsafe preset="fixed" backgroundColor={color.transparent}>
        <HeaderPrimary
          containerStyle={HEADER}
          centerComponent={TITLE}
          leftComponent={{ ...ARROW_LEFT_ICON, onPress: nextScreen }}
          rightComponent={{ ...SEARCH_ICON, onPress: nextScreen }}
        />

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
      </Screen>
    </View>
  )
}
