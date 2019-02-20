import React, { Component } from 'react'
import Image from './image';
import Rounded from './rounded';
import Grid from '@material-ui/core/Grid';

class RepoCard extends Component {
    state = {  }
    render() { 
        return ( <div style={{border:2,borderColor:'#999', borderStyle: 'solid',paddingLeft:20,paddingRight:40,paddingBottom:10,paddingTop:10,margin:20,backgroundColor:'#eee'}}>
                <Grid container xs ={24}>
            <Grid xs={12}>
                <Image />
            </Grid>
            <Grid xs={12}><p>this is my life</p></Grid>
            <Grid xs={12}>
                <Rounded />
                <Rounded />
                <Rounded />
            </Grid>
            <Grid xs={12}><p>this is other life</p></Grid>
            <Grid xs={12}>viewProfile</Grid>
        </Grid>            
            </div> );
    }
}
 
export default RepoCard;