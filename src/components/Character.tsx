import * as React from 'react';
import * as Material from '@material-ui/core';
import { CharacterModel } from '../models/CharacterModel';

const Experience = ({ experience }) => (
  <div>
    Experience: {
      [...Array(experience)]
        .map(_ => '\u25CF')
        .reduce((a, b) => a + b, '')
      + '\u25CB'
      + '| ' + experience
    }
  </div>
);

const Stats = ({ stats }) => (
  <div>
    [ {stats
      .map(entry => entry[0] + ':' + entry[1])
      .join(' | ')
    } ]
  </div>
);

const Character = (character: CharacterModel) => (
  <Material.Card>
    <Material.CardHeader title={character.name} />
    <Material.CardContent>
    <Stats stats={...Array.from(character.stats)} />
    <Experience experience={character.experience} />
    </Material.CardContent>
  </Material.Card >
);

export { Character };
