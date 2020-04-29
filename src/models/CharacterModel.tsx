import { ProgressTrackModel } from './ProgressTrackModel';

export enum StatType {
    Edge = 'Edge',
    Heart = 'Heart',
    Iron = 'Iron',
    Shadow = 'Shadow',
    Wit = 'Wit'
}

export enum DebilityType {
    Wounded = 'Wounded',
    Unprepared = 'Unprepared',
    Shaken = 'Shaken',
    Encumbered = 'Encumbered',
    Maimed = 'Maimed',
    Corrupted = 'Corrupted',
    Cursed = 'Cursed',
    Tormented = 'Tormented'
}

export enum CharacterStatusType {
    Health = 'Health',
    Spirit = 'Spirit',
    Supply = 'Supply'
}

export type CharacterStatus = {
    current: number,
    min: number,
    max: number
};

export type Bond = {
    description: string,
    target: string
};

export type CharacterModel = {
    name: string,
    status: Map<CharacterStatusType, CharacterStatus>,
    stats: Map<StatType, number>,
    debilities: DebilityType[],
    vows: ProgressTrackModel[],
    bonds: Bond[],
    experience: number
};

const createInitialStatus = (type: CharacterStatusType): CharacterStatus => ({
    current: 5,
    max: 5,
    min: 0
});

export const newBaseCharacter = (name: string): CharacterModel => (
    {
        name: name,
        bonds: [],
        debilities: [],
        experience: 0,
        stats: new Map([
            [StatType.Edge, 3],
            [StatType.Heart, 2],
            [StatType.Iron, 2],
            [StatType.Shadow, 1],
            [StatType.Wit, 1],
        ]),
        status: new Map([
            [CharacterStatusType.Health, (createInitialStatus(CharacterStatusType.Health))],
            [CharacterStatusType.Spirit, (createInitialStatus(CharacterStatusType.Spirit))],
            [CharacterStatusType.Supply, (createInitialStatus(CharacterStatusType.Supply))],
        ]),
        vows: []
    }
);