/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { View, ViewStyle, FlatList } from "react-native"
import { Screen, HeaderPrimary, PostTile, HomeWallpaper } from "../../components"
import { color } from "../../theme"
import { PostItemFeed } from "../../components/post-item-feed/post-item-feed"
import { PostUser } from "../../components/post-user/post-user"
import { PostPagination } from "../../components/post-pagination/post-pagination"
import { translate } from "../../i18n"

const FULL: ViewStyle = { flex: 1 }

const BACKGROUND: ViewStyle = { backgroundColor: "#F2F2F2" }

const FULL_PADDING: ViewStyle = { padding: 15, paddingTop: 0 }

const LEFT_PADDING: ViewStyle = { paddingLeft: 15 }

const POST_ITEM_WRAP: ViewStyle = { ...BACKGROUND, ...FULL_PADDING }

const HEADER = { borderBottomWidth: 0 }

const BOTTOM_HEADER_FLATLIST: ViewStyle = {
  ...BACKGROUND,
  marginTop: 15,
  height: 20,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
}

const FOOTER_FLATLIST: ViewStyle = {
  ...BACKGROUND,
  height: 20,
  borderBottomRightRadius: 25,
  borderBottomLeftRadius: 25,
}

const ARROW_LEFT_ICON = { icon: "arrow-left", onPress: null }

const SEARCH_ICON = { size: 18, icon: "search", onPress: null }

const TITLE = { text: translate("homeScreen.news") }

const URI =
  "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1024724898%2F0x0.jpg"

export interface HomeScreenProps {
  navigation: any
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
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
          ListHeaderComponent={<ListHeaderComponent />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(index) => `${index}`}
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item, index }) => (
            <View key={`${index}`} style={POST_ITEM_WRAP}>
              <PostTile
                onPress={nextScreen}
                uri={URI}
                title="A cross-platform Tab View component for React Native."
                postTime="2 hours ago"
                name="Alexander III"
              />
            </View>
          )}
          ListFooterComponent={<View style={FOOTER_FLATLIST} />}
        />
      </Screen>
    </View>
  )
}

export interface ListHeaderComponent {}

export const ListHeaderComponent: React.FunctionComponent<ListHeaderComponent> = (props) => {
  return (
    <View>
      <View style={LEFT_PADDING}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(index) => `${index}`}
          renderItem={({ item, index }) => (
            <PostItemFeed
              key={`${item}`}
              style={{ marginLeft: index === 0 ? 0 : 15 }}
              uri={URI}
              text="A cross-platform Tab View component for React Native."
              subText="2 hours ago"
            />
          )}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 20, marginTop: 20 }}
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(index) => `${index}`}
          renderItem={({ item, index }) => (
            <PostUser
              key={`${index}`}
              style={{ marginLeft: index === 0 ? 0 : 15 }}
              color={`#${(((1 << 24) * Math.random()) | 0).toString(16)}`}
              uri={URI}
              title="A cross-platform Tab View component for React Native."
              postTime="2 hours ago"
              name="Alexander III"
            />
          )}
        />
      </View>
      <PostPagination
        uri={URI}
        title="A cross-platform Tab View component for React Native."
        postTime="2 hours ago"
        name="Alexander III"
        style={FULL_PADDING}
      />
      <View style={BOTTOM_HEADER_FLATLIST} />
    </View>
  )
}
