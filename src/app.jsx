import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Search from './search';
import Result from './result';

class App extends Component {
  state = { 
    list: []
   }
  search = (value) => {
    var url = "https://api.github.com/search/repositories?q=" + value
    fetch(url).then((Response) => {
      return Response.json();
  }).then(data => {
    var list = data.items;
    var req = []
    for(var i =0;i<list.length;i++){
      var obj = {
        "forksCount" : list[i].forks_count,
        "stars" : list[i].stargazers_count,
        "openIssues" : list[i].open_issues,
        "description" : list[i].description,
        "pic" : list[i].owner.avatar_url,
        "fullName" :list[i].full_name,
        "url":list[i].html_url
      }
      req.push(obj);
    }
    this.setState({
        list: req
    });
  });    
  }
  render() {
    
    return (  <Grid container xs={24}>
                <Grid item xs={12}>
                 <Search search = {this.search}/>
                </Grid>
                <Grid item xs={12} style={{marginTop:10}}>
                  <Result list={this.state.list} />
                </Grid>
      </Grid>);
  }
}
 
export default App;
