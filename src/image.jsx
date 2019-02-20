import React, { Component } from 'react'

class Image extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{paddingLeft:90,paddingRight:90}}>
                <div style={{backgroundColor: 'black',width:150, height:150,borderRadius:75,color: 'white' }}><h3 style={{padding:30}}>hello</h3></div> 
            </div>
        );
    }
}
 
export default Image;