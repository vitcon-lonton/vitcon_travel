import { ViewStyle, TextStyle } from "react-native"
import { color } from "../../theme"

const BASE: ViewStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  flex: 1,
  backgroundColor: '#FAFAFA'
}

const TEXT_BASE: TextStyle = {
  position: "absolute",
  top: -100,
  left: -200,
  bottom: 0,
  right: 0,
  fontWeight: 'bold',
  fontSize: 450,
  color: color.background,
  transform: [{ rotate: '30deg' }]
}

export const presets = {
  /**
   * The default wallpaper styles.
   */
  stretch: {
    ...BASE,
    resizeMode: "stretch",
    width: null, // Have to set these to null because android ¯\_(ツ)_/¯
    height: null,
  } as ViewStyle,

  /**
   * The default text styles.
   */
  text: { ...TEXT_BASE } as TextStyle
}

/**
 * A list of preset names.
 */
export type HomeWallpaperPresets = keyof typeof presets
