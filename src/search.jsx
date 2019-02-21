import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
class Search extends Component {
    state = { searchItem: '' }
    changedSearch=(event)=>{
        this.setState({
            searchItem: event.target.value 
        })
    }
    render() { 
        return ( <Grid xs = {12} >
                <Grid container style={style.componentField} xs={24}>
                    <Grid xs={12}><h4 style={style.headingDiv}>Github Repo Search Filter</h4></Grid>
                    <Grid xs={12}>
                        <Grid container xs={24} style={{padding:5}}>
                            <Grid xs={6} style={{padding:5}}>
                                <TextField
                                id="outlined-bare"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                value={this.state.searchItem}
                                onChange={this.changedSearch}
                                />
                            </Grid>
                            <Grid xs={3} style={{ paddingTop: 30, paddingBottom:30, paddingLeft:10}}>
                                <Button variant="contained" style={{backgroundColor: '#0069ff', color: 'white'}} onClick={()=>this.props.search(this.state.searchItem)}>Search</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> );
    }
}
 
export default Search;