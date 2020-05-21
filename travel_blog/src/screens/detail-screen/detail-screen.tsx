/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import {
  View,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Animated,
  ScrollViewProps,
  FlatList,
} from "react-native"
import { Button, Screen, Text, Wallpaper, HeaderPrimary, PostSharedOptions } from "../../components"
import { color, spacing } from "../../theme"
import { translate } from "../../i18n"
import { Avatar } from "react-native-elements"
import { Modalize } from "react-native-modalize"
import { screenHeight } from "../../utils/dimensions"
import { PostItemFeed } from "../../components/post-item-feed/post-item-feed"

const URI =
  "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1024724898%2F0x0.jpg"

const bowserLogo = require("./bowser.png")

const ARROW_LEFT_ICON = { icon: "arrow-left", onPress: null, color: color.background }

const SEARCH_ICON = { size: 18, icon: "search", onPress: null, color: color.background }

const TITLE = {
  text: translate("welcomeScreen.poweredBy"),
  style: { color: color.background },
}

const HEADER = { borderBottomWidth: 0 }

const FULL: ViewStyle = { flex: 1 }

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }

const BOWSER: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
}
const CONTENT: TextStyle = {
  ...TEXT,
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}
const CONTINUE: ViewStyle = {
  flex: 1,
  margin: 10,
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  backgroundColor: "#5D2555",
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 9,
}

const POST_CONTAINER: ViewStyle = {
  backgroundColor: "color.transparent",
  flexDirection: "row",
  paddingRight: 15,
  paddingLeft: 15,
  marginBottom: 15,
  alignItems: "center",
}

const USER_POST_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  alignSelf: "stretch",
}

const TEXT_USER_POST_STYLE: TextStyle = { color: "white", fontSize: 12, fontWeight: "600" }

const USER_AVATAR = (
  <Avatar
    containerStyle={{ marginRight: 10 }}
    rounded
    size="small"
    source={{
      uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    }}
  />
)

const USER_POST = (
  <View style={POST_CONTAINER}>
    <View style={USER_POST_CONTAINER}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {USER_AVATAR}
        <Text style={TEXT_USER_POST_STYLE}>Alvin</Text>
      </View>
      <Text style={TEXT_USER_POST_STYLE}>May 19, 2020</Text>
    </View>
  </View>
)

const HEADER_NAV = (
  <HeaderPrimary
    containerStyle={HEADER}
    centerComponent={TITLE}
    leftComponent={{ ...ARROW_LEFT_ICON }}
    rightComponent={{ ...SEARCH_ICON }}
  />
)

const MODAL_SCROLLVIEW_PROPS: ScrollViewProps = {
  showsVerticalScrollIndicator: false,
  style: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 15,
  },
}

const content = (
  <View style={{}}>
    <View style={{ ...FULL, padding: 15, paddingTop: 0 }}></View>
    <View style={{ ...FULL, backgroundColor: color.background }}>
      <Text
        style={{ color: "black", fontSize: 18, textAlign: "auto", marginBottom: 20 }}
        preset="header"
        text="Designer handed you this screen and, in that case, congrats!"
      />

      <Text style={CONTENT}>
        This probably isn't what your app is going to look like. Unless your designer handed you
        this screen and, in that case, congrats! You're ready to ship. \n. Unless your designer
        handed you this screen and, in that case, congrats! You're ready to ship.
      </Text>

      <View style={{ backgroundColor: "#5D2555", borderRadius: 20 }}>
        <Image source={bowserLogo} style={BOWSER} />
      </View>

      <Text style={CONTENT}>
        For everyone else, this is where you'll see a live preview of your fully functioning app
        using Ignite.
      </Text>
    </View>
    <Text style={{ color: "black", marginBottom: 10 }} preset="header" text="Share this post" />
    <PostSharedOptions />
    <Text
      style={{ color: "black", marginBottom: 10, marginTop: 20 }}
      preset="header"
      text="Related posts"
    />
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
  </View>
)

export interface DetailScreenProps {
  navigation: any
}

export const DetailScreen: React.FunctionComponent<DetailScreenProps> = ({ navigation }) => {
  const goBack = React.useMemo(() => () => navigation.navigate("home"), [navigation])

  const modalizeRef = React.useRef<Modalize>(null)

  const headerHeight = React.useRef(new Animated.Value(0)).current

  const imageOpacity = React.useRef(new Animated.Value(1)).current

  return (
    <View style={FULL}>
      <Wallpaper />
      <Screen unsafe preset="fixed" backgroundColor={color.transparent}>
        <View style={FULL}>
          <Animated.View style={{ ...HEADER, height: headerHeight, opacity: imageOpacity }}>
            {HEADER_NAV}
          </Animated.View>
          <Modalize
            ref={modalizeRef}
            overlayStyle={{ backgroundColor: "transparent" }}
            HeaderComponent={USER_POST}
            alwaysOpen={screenHeight / 1.4}
            handlePosition="inside"
            handleStyle={{ width: 0, height: 0 }}
            onPositionChange={(str) => {
              Animated.spring(imageOpacity, {
                speed: 100,
                delay: 0,
                toValue: str === "top" ? 0 : 1,
                useNativeDriver: false,
              }).start()
            }}
            scrollViewProps={MODAL_SCROLLVIEW_PROPS}
            modalStyle={{ backgroundColor: color.transparent }}>
            {content}
          </Modalize>
        </View>
      </Screen>
    </View>
  )
}
