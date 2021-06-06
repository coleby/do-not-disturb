import { enable } from './enable';
import assert from 'assert';
import { disable } from './disable';
import { toggle } from './toggle';
import { isEnabled } from './isEnabled';
import { checkOs } from './checkOs';

describe('DnD - macos', () => {
  before(() => {
    checkOs();
  });

  it('should enable dnd', async () => {
    const result = await enable();

    assert(result, 'Failed to enable dnd');
  });

  it('should disable dnd', async () => {
    const result = await disable();

    assert(result, 'Failed to disable dnd');
  });

  it('should toggle dnd', async () => {
    await enable();

    const result = await toggle();
    const enabled = await isEnabled();

    assert(result, 'Failed to toggle dnd.');
    assert(!enabled);
  });
});
