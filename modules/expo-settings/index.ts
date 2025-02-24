
import ExpoSettingsModule from './src/ExpoSettingsModule';

export type ThemeChangeEvent = {
    theme: string;
}

export function addThemeListener(listener: (event: ThemeChangeEvent) => void): any {
    // @ts-ignore
    return ExpoSettingsModule.addListener<ThemeChangeEvent>("onChangeTheme", listener);
}

export function getTheme(): string {
  return ExpoSettingsModule.getTheme();
}

export function setTheme(theme: string): void {
  ExpoSettingsModule.setTheme(theme);
}
