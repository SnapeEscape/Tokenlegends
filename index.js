import { registerExtension } from 'https://extensions.owlbear.rodeo/api';
import CharacterSheet from './CharacterSheet.js';

registerExtension({
  id: 'ttrpg-character-sheet',
  init: (api) => {
    api.ui.addSidebarTab({
      id: 'character-sheet',
      label: 'Character Sheet',
      icon: 'person',
      content: CharacterSheet(api),
    });
  },
});