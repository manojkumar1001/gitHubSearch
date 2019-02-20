import React, { Component } from 'react'

class Image extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{paddingLeft:50,paddingRight:50}}>
                <div style={{backgroundColor: 'black',width:100, height:100,borderRadius:50,color: 'white' }}><h3 style={{padding:30}}>hello</h3></div> 
            </div>
        );
    }
}
 
export default Image;