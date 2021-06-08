import { enable } from './enable';
import assert from 'assert';
import { disable } from './disable';
import * as os from 'os';
import { isBigSurOrNewer } from './isBigSurOrNewer';

describe('DnD - macos bigsur', function () {
  before(function () {
    if (os.type() !== 'Darwin' || !isBigSurOrNewer()) {
      this.skip();
    }
  });

  it('should enable dnd', async () => {
    const result = await enable();

    assert(result, 'Failed to enable dnd');
  });

  it('should disable dnd', async () => {
    const result = await disable();

    assert(result, 'Failed to disable dnd');
  });
});
