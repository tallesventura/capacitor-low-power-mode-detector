declare module "@capacitor/core" {
  interface PluginRegistry {
    LowPowerModeDetector: LowPowerModeDetectorPlugin;
  }
}

export interface LowPowerModeDetectorPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
