import React, { Component } from 'react'
import Image from './image';
import Rounded from './rounded';
import Grid from '@material-ui/core/Grid';

const style ={
    repoCardStyle:{
        backgroundColor:'#eee',
        margin:20,
        padding:20,
        paddingBottom:0,
    }
}

class RepoCard extends Component {
    state = { 
        heading: this.props.list.fullName,
        description: this.props.list.description,
        imageUrl: this.props.list.pic,
        stars: this.props.list.stars,
        forks: this.props.list.forksCount,
        issues: this.props.list.openIssues,
        profileUrl: this.props.list.url
     }
     componentWillReceiveProps(newProps){
        console.log(newProps)
        this.setState({
           heading: newProps.list.fullName,
           description: newProps.list.description,
           imageUrl: newProps.list.pic,
           stars: newProps.list.stars,
           forks: newProps.list.forksCount,
           issues: newProps.list.openIssues,
           profileUrl: newProps.list.url
        })
    }
    redirect = () => {
        window.location.href=this.state.profileUrl
    }
    render() { 
        return( 
        <Grid sm={4} xs={12}>
         <div style={style.repoCardStyle}>
                <Grid container xs ={24}>
            <Grid xs={12}>
                <Image imageUrl={this.state.imageUrl}/>
            </Grid>
            <Grid xs={12}><Grid container justify="center" alignItems="center"><p>{this.state.heading}</p></Grid></Grid>
            <Grid xs={12}>
                <Grid container xs={24} justify="center" alignItems="center">
                    <Rounded name="forks" value={this.state.forks}/>
                    <Rounded name="issues" value={this.state.issues}/>
                    <Rounded name="stars" value={this.state.stars}/>
                </Grid>
            </Grid>
            <Grid xs={12}><Grid container justify="center" alignItems="center"><p>{this.state.description}</p></Grid></Grid>
            <Grid xs={12}><Grid container justify="center" alignItems="center"><div style={{padding:20}} onClick={this.redirect}>VIEW PROFILE</div></Grid></Grid>
        </Grid>            
            </div> </Grid>);
    }
}
 
export default RepoCard;