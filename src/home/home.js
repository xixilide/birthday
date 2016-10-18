import React, { PropTypes } from 'react';

class Home extends React.Component {
  render () {
    return(
      <div className="home-container">
      <div className="home-inner">
        <h2> HappyBirthday</h2>
        <p>My dear friend</p>
        <button className="btn"><a href='https://xixilide.github.io/happy.html' style={{color:'#fff'}} >Look Me!</a></button>
      </div>
      </div>
    )
  }
}

export default Home;
