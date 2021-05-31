import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  render() {
      return (
      <div>
        <div className="parallax" style={{color:"white"}}>
                 
      
        </div>
       
        <div style={{marginTop:"1000px", height:"1000px",backgroundColor:"red",fontSize:"36px"}}>
            Scroll Up and Down this page to see the parallax scrolling effect.
            This div is just here to enable scrolling.
            Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>
      </div>
    );
  }
}
