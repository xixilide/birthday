import React, { PropTypes } from 'react'
 import Img1 from '../../img/1.jpg';
 import Img2 from '../../img/3.jpg';
 import Img3 from '../../img/3.jpg';
 import Img4 from '../../img/4.jpg';
 import Img5 from '../../img/s7.jpg';
 import Img6 from '../../img/z3.jpg';
 import Img7 from '../../img/s2.jpg';
 import Img8 from '../../img/s1.jpg';



class Work extends React.Component {
  render () {
    return(
      <div className="work-container">


        <div className="work-card">
              <a href="#"><img src={Img1} /></a>
                  <div className="work-text">
                    <h3>青春</h3>

                  </div>
                </div>

      <div className="work-card">
            <a href="#"><img src={Img2} /></a>
                <div className="work-text">
                  <h3>不朽</h3>

                </div>
              </div>

    <div className="work-card">
          <a href="#"><img src={Img3} /></a>
              <div className="work-text">
                <h3>友情</h3>

              </div>
    </div>

  <div className="work-card">
        <a href="#"><img src={Img4} /></a>
          <div className="work-text">
              <h3>不灭</h3>

        </div>
  </div>
  <div className="work-card">
        <a href="#"><img src={Img5} /></a>
          <div className="work-text">
              <h3>不伤</h3>

        </div>
  </div>
  <div className="work-card">
        <a href="#"><img src={Img6} /></a>
          <div className="work-text">
              <h3>不老</h3>

        </div>
  </div>
  <div className="work-card">
        <a href="#"><img src={Img7} /></a>
          <div className="work-text">
              <h3>不死</h3>

        </div>
  </div>
  <div className="work-card">
        <a href="#"><img src={Img8} /></a>
          <div className="work-text">
              <h3>不灭</h3>

        </div>
  </div>
</div>
    )
  }
}

export default Work;
