import React from "react"
import { View } from "react-native"
import { presets } from "./home-wallpaper.presets"
import { HomeWallpaperProps } from "./home-wallpaper.props"
import { Text } from "../text/text"

export function HomeWallpaper(props: HomeWallpaperProps) {
  // grab the props
  const { preset = "stretch", text = "home" } = props

  // assemble the style
  const presetToUse = presets[preset] || presets.stretch
  const style = { ...presetToUse }

  return (
    <View style={style}>
      <Text style={presets.text}>{`${text}`}</Text>
    </View>
  )
}
