import { h } from 'https://extensions.owlbear.rodeo/api';

export default function CharacterSheet(api) {
  const token = api.tokens.getSelected()[0];
  const data = api.storage.get(token.id) || {};

  const saveField = (field) => (e) => {
    data[field] = e.target.value;
    api.storage.set(token.id, data);
  };

  return h('div', { style: { padding: '10px', fontSize: '14px', maxWidth: '300px' } }, [
    h('h2', {}, 'Character Sheet'),
    h('label', {}, 'Name:'),
    h('input', { value: data.name || '', onInput: saveField('name') }),

    h('label', {}, 'Class:'),
    h('input', { value: data.class || '', onInput: saveField('class') }),

    h('label', {}, 'Level:'),
    h('input', { value: data.level || '', onInput: saveField('level'), type: 'number' }),

    h('hr'),
    h('h3', {}, 'Quick Stats'),

    h('label', {}, 'HP (Current/Max):'),
    h('input', { value: data.hp || '', onInput: saveField('hp'), placeholder: 'e.g., 22/35' }),

    h('label', {}, 'PA (Physical Armour):'),
    h('input', { value: data.pa || '', onInput: saveField('pa') }),

    h('label', {}, 'MS (Magic Shield):'),
    h('input', { value: data.ms || '', onInput: saveField('ms') }),

    h('label', {}, 'Tokens:'),
    h('input', { value: data.tokens || '', onInput: saveField('tokens'), placeholder: 'e.g., 2/3' }),

    h('hr'),
    h('h3', {}, 'Core Stats'),
    ['MIND', 'BODY', 'SMARTS', 'DEX', 'CHARM', 'CON'].map((stat) =>
      h('div', {}, [
        h('label', {}, `${stat}:`),
        h('input', { value: data[stat] || '', onInput: saveField(stat) })
      ])
    ),

    h('hr'),
    h('h3', {}, 'Skill Lines'),
    [
      'Martial', 'Ranged', 'Tough', 'Rogue',
      'Red', 'Blue', 'Yellow', 'Black', 'White', 'Colourless',
      'Unnatural', 'Merchantry', 'Scholar', 'Tradesman', 'Artisan', 'Alchemy', 'Cook'
    ].map((line) =>
      h('div', {}, [
        h('label', {}, `${line}:`),
        h('input', {
          value: data[line] || '',
          onInput: saveField(line),
          type: 'number',
          min: 0, max: 10
        })
      ])
    )
  ]);
}
