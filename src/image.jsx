import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const style = {
    bigAvatar: {
        margin: 10,
        width: 180,
        height: 180,
      }
}
class Image extends Component {
    state = { 
        imageUrl: this.props.imageUrl
     }
     componentWillReceiveProps(newProps){
         this.setState({
             imageUrl: newProps.imageUrl
         })
     }
    render() { 
        return ( 
            <Grid container justify="center" alignItems="center">
                <Avatar alt="Remy Sharp" src={this.state.imageUrl} style={style.bigAvatar} />
            </Grid>
        );
    }
}
 
export default Image;