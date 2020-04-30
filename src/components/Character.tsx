import * as React from 'react';
import * as Material from '@material-ui/core';
import { CharacterModel, CharacterStatusType, CharacterStatus, DebilityType } from '../models/CharacterModel';

const Experience = ({ experience }) => (
  <Material.Card>
    <Material.CardContent>
      Experience: {
        [...Array(experience)]
          .map(_ => '\u25CF')
          .reduce((a, b) => a + b, '')
        + '\u25CB'
        + '| ' + experience
      }
    </Material.CardContent>
  </Material.Card>
);

const Stats = ({ stats }) => (
  <Material.Card>
    <Material.CardContent>
      [ {stats
        .map(entry => entry[0] + ':' + entry[1])
        .join(' | ')
      } ]
    </Material.CardContent>
  </Material.Card>
);

const Status = ({ status }) => (
  <Material.Card>
    <Material.CardContent>
      [ {status
        .map((entry: [CharacterStatusType, CharacterStatus]) => entry[0] + ':' + entry[1].current + '/' + entry[1].max)
        .join(' | ')
      } ]
    </Material.CardContent>
  </Material.Card>
);

const Debilities = (a: DebilityType[]) => (
  <Material.Card>
    <Material.CardContent>
      Debilities: {a.length > 0
        ? a.join(', ')
        : 'none'}
    </Material.CardContent>
  </Material.Card>
);

const Character = (character: CharacterModel) => (
  <Material.Card>
    <Material.CardHeader title={character.name} />
    <Material.CardContent>
      <Experience experience={character.experience} />
      <Stats stats={Array.from(character.stats)} />
      <Status status={Array.from(character.status)} />
      <Debilities {...character.debilities} />
    </Material.CardContent>
  </Material.Card >
);

export { Character };
