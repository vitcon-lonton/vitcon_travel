import * as React from "react"
import { TextStyle, ViewStyle, View } from "react-native"
import { merge } from "ramda"
import { Button } from "react-native-elements"
import LinearGradient from "react-native-linear-gradient"
import { color } from "../../theme"

const BASE_VIEW: ViewStyle = { flexDirection: "row", justifyContent: "space-between" }

const BASE_CONTAINER_BUTTON: ViewStyle = { padding: 0, width: "31.5%" }

const ICON_STYLES = {
  type: "zocial",
  size: 12,
  color: color.background,
}

const BASE_TITLE: TextStyle = {
  color: color.palette.white,
  textAlign: "center",
  fontSize: 10,
  fontWeight: "800",
  fontFamily: "Montserrat",
}

const BASE_BUTTON: ViewStyle = { padding: 20, paddingTop: 8, paddingBottom: 8 }

const LINEAR_GRADIENT_PROPS = {
  colors: ["red", "purple"],
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.5 },
}

export interface PostSharedOptionsProps {}

export function PostSharedOptions() {
  return (
    <View style={BASE_VIEW}>
      <Button
        containerStyle={BASE_CONTAINER_BUTTON}
        buttonStyle={merge(BASE_BUTTON, { backgroundColor: "#415993" })}
        icon={merge(ICON_STYLES, { name: "facebook" })}
        title="facebook"
        titleStyle={BASE_TITLE}
      />
      <Button
        containerStyle={BASE_CONTAINER_BUTTON}
        buttonStyle={merge(BASE_BUTTON, { backgroundColor: "#4AAAE7" })}
        icon={merge(ICON_STYLES, { name: "twitter" })}
        title="Twitter"
        titleStyle={BASE_TITLE}
      />
      <Button
        containerStyle={BASE_CONTAINER_BUTTON}
        buttonStyle={merge(BASE_BUTTON, { backgroundColor: "#4AAAE7" })}
        icon={merge(ICON_STYLES, { name: "instagram" })}
        title="Instagram"
        ViewComponent={LinearGradient}
        linearGradientProps={LINEAR_GRADIENT_PROPS}
        titleStyle={BASE_TITLE}
      />
    </View>
  )
}
