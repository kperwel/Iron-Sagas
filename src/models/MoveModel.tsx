export enum MoveType {
    ADVENTURE,
    RELATIONSHIP,
    COMBAT,
    SUFFER,
    QUEST,
    FATE
}

export type MoveModel<T> = {
    type: MoveType,
    name: string,
    params: T,
};