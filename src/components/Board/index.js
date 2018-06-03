import React, { Component } from "react";
import { Paper, withStyles, Grid } from "@material-ui/core";
import { map, find, isNil, splitEvery, addIndex, slice } from "ramda";

import Space from './Space';

const layout = [
    ["A",1],["A",2],["A",3],["A",4],["A",5],["A",6],["A",7],["A",8],
    ["B",1],["B",2],["B",3],["B",4],["B",5],["B",6],["B",7],["B",8],
    ["C",1],["C",2],["C",3],["C",4],["C",5],["C",6],["C",7],["C",8],
    ["D",1],["D",2],["D",3],["D",4],["D",5],["D",6],["D",7],["D",8],
    ["E",1],["E",2],["E",3],["E",4],["E",5],["E",6],["E",7],["E",8],
    ["F",1],["F",2],["F",3],["F",4],["F",5],["F",6],["F",7],["F",8],
    ["G",1],["G",2],["G",3],["G",4],["G",5],["G",6],["G",7],["G",8],
    ["H",1],["H",2],["H",3],["H",4],["H",5],["H",6],["H",7],["H",8]
];

const styles = theme => ({
    tile:{
        backgroundColor: 'green',
        border: '2px solid black',
        height: '100px',
        width: '100px',
        padding: theme.spacing.unit * 2,
        color: 'white',
    },
    row: {
        width: '100%',
    },
    root:{
        flexGrow: 1,
        height:'800px',
        width: '800px',
    }
});


class Board extends Component{
    
    render(){
        const { onClick, currentLayout, classes } = this.props;
        const tiles = addIndex(map)((square, i) => {
            const piece = find((piece) => piece.location[0] === square[0] && piece.location[1] === square[1], currentLayout);
            // const hasPiece = isNil(piece);
            console.log(square);
            return (
                <Grid item xs={3}>
                    <Space 
                        onClick={true ? () => onClick([square[0],square[1]]) : () => {}} 
                        className={classes.tile} 
                        location={[square[0],square[1]]}
                        piece={piece}
                        key={i}
                    />
                </Grid>
                
            )

        },layout);
        const board = splitEvery(8, tiles);
        console.log(board[0]);
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(0,4,board[0]) }
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(4,8,board[0]) }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(0,4,board[1]) }
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(4,8,board[1]) }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(0,4,board[2]) }
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(4,8,board[2]) }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(0,4,board[3]) }
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(4,8,board[3]) }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(0,4,board[4]) }
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(4,8,board[4]) }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(0,4,board[5]) }
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(4,8,board[5]) }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(0,4,board[6]) }
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(4,8,board[6]) }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(0,4,board[7]) }
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    { slice(4,8,board[7]) }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Board);