import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
class Rounded extends Component {
    state = { 
        name: this.props.name,
        value: this.props.value 
    }
    componentWillReceiveProps(newProps){
        this.setState({
            value:newProps.value
        })
    }
    render() { 
        return (
            <Grid xs={4}>
            <div style={{paddingRight:4}}>
                <div style={{paddingLeft:5,borderRadius:10,border:2,borderStyle:'solid',borderColor:'#aaa'}}>
                    {this.state.name}
                    {this.state.value}
                </div>
                </div>
            </Grid>
        );
    }
}
 
export default Rounded;