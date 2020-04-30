import * as React from 'react';
import * as Material from '@material-ui/core';
import { MoveModel } from '../models/MoveModel';

export type Props = {
    moves: MoveModel<any>[]
};

const Moves = (props: Props) => (
    <Material.Card>
        {
            Object.entries(
                props.moves.reduce(
                    (acc: ArrayLike<MoveModel<any>[]>, move: MoveModel<any>) => {
                        acc[move.type] = (acc[move.type] || []).concat(move);
                        return acc;
                    },
                    []
                )
            )
                .map((entry) => (
                    <Material.Card>
                        <Material.CardHeader title={entry[0]} />
                        <Material.CardContent>
                            {
                                entry[1].map((move) => (
                                    <Material.Button> {move.name} </Material.Button>
                                ))
                            }
                        </Material.CardContent>
                    </Material.Card>
                ))
        }
    </Material.Card>
);

export { Moves };
