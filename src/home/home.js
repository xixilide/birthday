import React, { PropTypes } from 'react';

class Home extends React.Component {
  render () {
    return(
      <div className="home-container">
      <div className="home-inner">
        <h2> HappyBirthday</h2>
        <p>WEB DEVELOPER</p>
        <button className="btn"><a href='https://github.com/xixilide/happybirthday/blob/master/index.html#html' style={{color:'#fff'}} >Look Me!</a></button>
      </div>
      </div>
    )
  }
}

export default Home;
