/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { View, ViewStyle, TextStyle, Animated, ScrollViewProps, FlatList, Image, ImageStyle } from "react-native"
import { Avatar } from "react-native-elements"
import { Modalize } from "react-native-modalize"
import { merge } from "ramda"
import { Screen, Text, HeaderPrimary, PostContent, PostItemFeed } from "../../components"
import { color } from "../../theme"
import { translate } from "../../i18n"
import { screenHeight, screenWidth } from "../../utils/dimensions"

const URI =
  "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1024724898%2F0x0.jpg"

const bgPost = require("./bg_post.jpg")

const BACKGROUND: ImageStyle = { width: '100%', height: '100%', position: 'absolute' }

const ARROW_LEFT_ICON = { icon: "arrow-left", color: color.background }

const SEARCH_ICON = { size: 18, icon: "search", color: color.background }

const FULL: ViewStyle = { flex: 1 }

const HEADER = { borderBottomWidth: 0 }

const TITLE = { text: translate("detailScreen.fashion"), style: { color: color.background } }

const RELATED_POSTS: TextStyle = { marginBottom: 10, marginTop: 10, color: color.textColor, fontSize: 18 }

const MODAL_SCROLLVIEW_PROPS: ScrollViewProps = {
  showsVerticalScrollIndicator: false,
  style: {
    backgroundColor: color.background,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 15,
  },
}

const POST_CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  flexDirection: "row",
  paddingRight: 15,
  paddingLeft: 15,
  marginBottom: 15,
  alignItems: "center",
}

const TEXT_USER_POST_STYLE: TextStyle = { fontSize: 12, fontWeight: "600" }

const USER_POST_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  alignSelf: "stretch",
}

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

export interface DetailScreenProps {
  navigation: any
}

export const DetailScreen: React.FunctionComponent<DetailScreenProps> = ({ navigation }) => {
  const goBack = React.useMemo(() => () => navigation.goBack(), [navigation])

  const modalizeRef = React.useRef<Modalize>(null)

  const headerHeight = React.useRef(new Animated.Value(0)).current

  const imageOpacity = React.useRef(new Animated.Value(1)).current

  return (
    <View style={FULL}>
      <Image source={bgPost} style={BACKGROUND} />

      <Screen unsafe preset="fixed" backgroundColor={color.transparent}>
        <View style={FULL}>
          <Animated.View style={merge(HEADER, { height: headerHeight, opacity: imageOpacity })}>
            <HeaderPrimary
              containerStyle={HEADER}
              centerComponent={TITLE}
              leftComponent={merge(ARROW_LEFT_ICON, { onPress: goBack })}
              rightComponent={merge(SEARCH_ICON, { onPress: null })}
            />
          </Animated.View>
          <Modalize
            ref={modalizeRef}
            overlayStyle={{ backgroundColor: color.transparent }}
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
            <View style={{}}>
              <PostContent />

              <Text style={RELATED_POSTS} preset="header" text="Related posts" />
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={[1, 2, 3, 4, 5]}
                keyExtractor={(index) => `${index}`}
                renderItem={({ item, index }) => (
                  <PostItemFeed
                    key={`${item}`}
                    style={{
                      marginLeft: index === 0 ? 0 : 10,
                      width: screenWidth / 2.9,
                      height: 160,
                    }}
                    uri={URI}
                    text="A cross-platform Tab View component for React Native."
                    subText="2 hours ago"
                  />
                )}
              />
            </View>
          </Modalize>
        </View>
      </Screen>
    </View>
  )
}
