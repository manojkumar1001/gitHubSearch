import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Search from './search';
import Result from './result';

class App extends Component {
  state = {  }
  render() { 
    return (  <Grid container xs={24}>
                <Grid item xs={12}>
                 <Search />
                </Grid>
                <Grid item xs={12} style={{marginTop:10}}>
                  <Result />
                </Grid>
      </Grid>);
  }
}
 
export default App;
