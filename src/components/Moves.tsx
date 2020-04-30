import * as React from 'react';
import * as Material from '@material-ui/core';
import { MoveModel } from '../models/MoveModel';
import { useDispatch } from 'react-redux';
import { triggerMove } from '../actions/TriggerMove';

export type Props = {
    moves: MoveModel<any>[]
};

const Moves = (props: Props) => {
    const dispatch = useDispatch();
    return (
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
                                        <Material.Button
                                            variant="outlined"
                                            onClick={() => dispatch(triggerMove({
                                                moveName: move.name
                                            }))}
                                        >
                                            {move.name}
                                        </Material.Button>
                                    ))
                                }
                            </Material.CardContent>
                        </Material.Card>
                    ))
            }
        </Material.Card>
    );
};

export { Moves };
