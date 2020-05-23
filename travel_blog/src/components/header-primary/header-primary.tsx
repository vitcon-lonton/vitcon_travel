import * as React from "react"
import { ViewStyle, TextStyle, TextProps } from "react-native"
import { Header, HeaderProps, IconProps, HeaderSubComponent } from "react-native-elements"
import { spacing, color } from "../../theme"
import { palette } from "../../theme/palette"
import { merge, has } from "ramda"

// static styles
const CONTAINERS: ViewStyle = {
  paddingTop: spacing[7],
  // paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
  paddingLeft: 15,
  paddingRight: 15,
}

const TITLE: TextStyle = {
  textAlign: "center",
  fontSize: 20,
  fontWeight: "600",
  color: palette.black,
}

const ICON: IconProps = { name: null, size: 20, type: "feather" }

const isTextProps = (obj: HeaderSubComponent) => obj && (has("text")(obj) || has("style")(obj))

const isIconProps = (obj: HeaderSubComponent) => obj && has("icon")(obj)

export const HeaderPrimary: React.FunctionComponent<HeaderProps> = (props) => {
  let { centerComponent, leftComponent, rightComponent, containerStyle, backgroundColor } = props

  // Override primary component
  if (isTextProps(centerComponent)) {
    const style = merge(TITLE, (centerComponent as TextProps).style)
    centerComponent = merge(centerComponent, { style: style })
  }

  leftComponent = isIconProps(leftComponent) ? merge(ICON, leftComponent) : leftComponent
  rightComponent = isIconProps(rightComponent) ? merge(ICON, rightComponent) : rightComponent
  containerStyle = merge(CONTAINERS, containerStyle)
  backgroundColor = backgroundColor || color.transparent

  const newProps = merge(props, {
    containerStyle,
    leftComponent,
    rightComponent,
    centerComponent,
    backgroundColor,
  })

  return <Header {...newProps} />
}
