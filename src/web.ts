import { WebPlugin } from '@capacitor/core';
import { LowPowerModeDetectorPlugin } from './definitions';

export class LowPowerModeDetectorWeb extends WebPlugin implements LowPowerModeDetectorPlugin {
  constructor() {
    super({
      name: 'LowPowerModeDetector',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const LowPowerModeDetector = new LowPowerModeDetectorWeb();

export { LowPowerModeDetector };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(LowPowerModeDetector);
