import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
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
    state = { repoData: this.props.list }
    componentWillReceiveProps(nextProps){
        console.log("hello")
        this.setState({
            repoData: nextProps.list
        })
    }
    render() { 
        return (
            <Grid xs = {12} style={style.componentField}>
                <Grid container xs={24}>
                    <Grid xs={12}><h4 style={style.headingDiv}>Repo Search Result </h4></Grid>
                    <Grid xs={12} style={{padding: 15}}>
                        <Grid container xs={40} style={{padding:10}}>
                            {this.state.repoData.map((i, x)=> <RepoCard key={x} list ={i}/>)}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
 
export default Result;