import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { HeaderPrimaryProps } from "./header-primary.props"
import { Text } from "../text/text"
import { Icon } from "@ant-design/react-native"
import { Button } from "../button/button"
import { spacing } from "../../theme"
import { translate } from "../../i18n"
import { palette } from "../../theme/palette"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const TITLE: TextStyle = {
  textAlign: "center",
  fontSize: 20,
  fontWeight: "600",
  color: palette.black,
}
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export const HeaderPrimary: React.FunctionComponent<HeaderPrimaryProps> = (props) => {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    style,
    titleStyle,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""

  return (
    <View style={{ ...ROOT, ...style }}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon name={leftIcon} color={palette.black} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={{ ...TITLE, ...titleStyle }} text={header} />
      </View>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon name={rightIcon} color={palette.black} />
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
