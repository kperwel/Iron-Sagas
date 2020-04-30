export enum MoveType {
    ADVENTURE = 'Adventure',
    RELATIONSHIP = 'Relationship',
    COMBAT = 'Combat',
    SUFFER = 'Suffer',
    QUEST = 'Quest',
    FATE = 'Fate'
}

export type MoveModel<T = any> = {
    type: MoveType,
    name: string,
    params?: T,
};