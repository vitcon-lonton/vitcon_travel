import { HomeWallpaperPresets } from "./home-wallpaper.presets"

export interface HomeWallpaperProps {
  /**
   * An optional style override useful for padding & margin.
   */
  text?: string

  /**
   * One of the different types of wallpaper presets.
   */
  preset?: HomeWallpaperPresets
}
