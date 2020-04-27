/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { View, ViewStyle, TextStyle, FlatList } from "react-native"
import { Screen, Text, HeaderPrimary } from "../../components"
import { color, spacing } from "../../theme"
import { PostItemFeed } from "../../components/post-item-feed/post-item-feed"
import { PostUser } from "../../components/post-user/post-user"
import { PostPagination } from "../../components/post-pagination/post-pagination"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {}

const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: "italic",
}

const CONTENT: TextStyle = {
  ...TEXT,
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}

const URI =
  "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1024724898%2F0x0.jpg"

export interface HomeScreenProps {
  navigation: any
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
  // const nextScreen = React.useMemo(() => () => props.navigation.navigate("demo"), [
  //   props.navigation,
  // ])

  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
        <HeaderPrimary
          headerTx="homeScreen.news"
          leftIcon="arrow-left"
          rightIcon="search"
          style={HEADER}
        />

        <FlatList
          data={[1, 2, 3, 4, 5]}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View key={item + ""} style={{ paddingLeft: index === 0 ? 0 : 15 }}>
              <PostItemFeed
                uri={URI}
                text="A cross-platform Tab View component for React Native."
                subText="2 hours ago"
              />
            </View>
          )}
        />

        <FlatList
          data={[1, 2, 3, 4, 5]}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(index) => index.toString()}
          renderItem={({ item, index }) => (
            <View key={`${index}`} style={{ paddingLeft: index === 0 ? 0 : 15 }}>
              <PostUser
                // eslint-disable-next-line no-template-curly-in-string
                color={`#FF${index}533`}
                uri={URI}
                title="A cross-platform Tab View component for React Native."
                postTime="2 hours ago"
                name="Alexander III"
              />
            </View>
          )}
        />

        <PostPagination
          uri={URI}
          title="A cross-platform Tab View component for React Native."
          postTime="2 hours ago"
          name="Alexander III"
        />
        <Text style={TITLE_WRAPPER}>
          <Text style={TITLE} text="Your new app, " />
          <Text style={ALMOST} text="almost" />
          <Text style={TITLE} text="!" />
        </Text>
        <Text style={TITLE} preset="header" tx="welcomeScreen.readyForLaunch" />

        <Text style={CONTENT}>
          For everyone else, this is where you'll see a live preview of your fully functioning app
          using Ignite.
        </Text>
      </Screen>
    </View>
  )
}
