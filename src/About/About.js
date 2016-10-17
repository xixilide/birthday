import React, { PropTypes } from 'react'
import Echarts from 'echarts';
import { Link } from 'react-router';

class About extends React.Component {
  render () {
   let   styles={
      btn:{
        width:'160px',
        height:'40px',
        borderRadius:'15px',
        backgroundColor:'#FF9E80',
        color:"teal",
        margin:'10px 0',
        textAlign:'center',
        padding:'10px 0',
        fontSize:'18px'
      }
    }
    return(
      <div className="about-container">
        <h3>你是辣白菜吗？</h3>

      </div>
    )
  }
}

export default About;
