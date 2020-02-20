import { TinyEmitter as Emitter } from 'tiny-emitter';

import { EmojiContainer } from './emojiContainer';

describe('EmojiContainer', () => {
  test('should render all the given emojis', () => {
    const emojis = [{ e: '⚡️', ver: '12.1' }, { e: '👍', ver: '12.1' }];

    const events = new Emitter();

    const container = new EmojiContainer(emojis, false, events, {
      emojiVersion: '12.1'
    }).render();
    expect(container.querySelectorAll('.emoji-picker__emoji').length).toBe(2);
  });
});
