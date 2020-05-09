/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle } from "react-native"
import { Button, Screen, Text, Wallpaper, HeaderPrimary } from "../../components"
import { color, spacing } from "../../theme"
import { translate } from "../../i18n"
import { ScrollView } from "react-native-gesture-handler"
import { Avatar } from "react-native-elements"
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

export interface DetailScreenProps {
  navigation: any
}

export const DetailScreen: React.FunctionComponent<DetailScreenProps> = ({ navigation }) => {
  const goBack = React.useMemo(() => () => navigation.navigate("home"), [navigation])

  return (
    <View style={FULL}>
      <Wallpaper />
      <Screen unsafe preset="fixed" backgroundColor={color.transparent}>
        <HeaderPrimary
          containerStyle={HEADER}
          centerComponent={TITLE}
          leftComponent={{ ...ARROW_LEFT_ICON, onPress: goBack }}
          rightComponent={{ ...SEARCH_ICON }}
        />
        <View
          style={{ height: 200, backgroundColor: color.transparent }}
        />
        {/* <Header headerTx="welcomeScreen.poweredBy" style={HEADER} titleStyle={HEADER_TITLE} /> */}
        <ScrollView
          style={{ ...FULL, backgroundColor: color.transparent }}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              ...FULL,
              padding: 15,
            }}>
            <View
              style={{
                justifyContent: "space-between",
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar
                  containerStyle={{ marginRight: 10 }}
                  rounded
                  size="small"
                  source={{
                    uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                  }}
                />
                <Text>This probably</Text>
              </View>

              <View>
                <Text>This probably</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              ...FULL,
              backgroundColor: color.background,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              padding: 15,
            }}>
            <Text
              style={{ color: "black", fontSize: 18, textAlign: "auto", marginBottom: 20 }}
              preset="header"
              text="Designer handed you this screen and, in that case, congrats!"
            />
            <Text style={CONTENT}>
              This probably isn't what your app is going to look like. Unless your designer handed
              you this screen and, in that case, congrats! You're ready to ship. \n. Unless your
              designer handed you this screen and, in that case, congrats! You're ready to ship.
            </Text>
            <View style={{ backgroundColor: "#5D2555", borderRadius: 20 }}>
              <Image source={bowserLogo} style={BOWSER} />
            </View>

            <Text style={CONTENT}>
              For everyone else, this is where you'll see a live preview of your fully functioning
              app using Ignite.
            </Text>
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Button style={CONTINUE} textStyle={CONTINUE_TEXT} tx="welcomeScreen.continue" />
            <Button style={CONTINUE} textStyle={CONTINUE_TEXT} tx="welcomeScreen.continue" />
            <Button style={CONTINUE} textStyle={CONTINUE_TEXT} tx="welcomeScreen.continue" />
          </View>
        </ScrollView>
      </Screen>
    </View>
  )
}
