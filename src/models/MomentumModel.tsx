export type MomentumModel = {
    current: number,
    min: number,
    max: number,
    reset: number
};

export const newMomentum = (): MomentumModel => ({
    current: 2,
    reset: 2,
    max: 10,
    min: -6
});