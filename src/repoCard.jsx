import React, { Component } from 'react'
import Image from './image';
import Rounded from './rounded';
import Grid from '@material-ui/core/Grid';

class RepoCard extends Component {
    state = {  }
    render() { 
        return ( <Grid container xs ={24}>
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
        </Grid> );
    }
}
 
export default RepoCard;