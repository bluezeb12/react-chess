import React, { Component } from "react";
import { Paper } from "@material-ui/core";

import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    
});

class Space extends Component{
    render(){
        const {className, onClick, location, piece} = this.props;
        return (
            <Paper 
                className={className}
                elevation={1}
                onClick={onClick}>
                [{
                    `${location[0]}, ${location[1]}`
                },
                {
                    `${piece ? piece.type : "empty"}`
                }]
            </Paper>
        )
    }
}

export default withStyles(styles)(Space);
