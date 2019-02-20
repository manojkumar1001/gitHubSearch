import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RepoCard from './repoCard';
const style ={
        headingDiv:{
                padding: 15,
                backgroundColor: '#0069ff',
                color: 'white',
                margin: 0
        },
        componentField:{
            border: 2,   
            borderColor: '#0069ff',
            borderStyle: 'solid'
        }
    }
class Result extends Component {
    state = { repoData: '' }
    
    render() { 
        return (
            <Grid xs = {12} style={style.componentField}>
                <Grid container xs={24}>
                    <Grid xs={12}><h4 style={style.headingDiv}>Repo Search Result</h4></Grid>
                    <Grid xs={12} style={{padding: 15}}>
                        <Grid container xs={24}>
                            <Grid sm={4} xs={12}>
                                <RepoCard />
                            </Grid>
                            <Grid sm={4} xs={12}>
                                <RepoCard />
                            </Grid>
                            <Grid sm={4} xs={12}>
                                <RepoCard />
                            </Grid>
                              <Grid sm={4} xs={12}>
                                <RepoCard />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
 
export default Result;