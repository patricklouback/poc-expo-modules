import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoSettingsModule extends NativeModule {
  getTheme(): string;
  setTheme(theme: string): void;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoSettingsModule>('ExpoSettings');
