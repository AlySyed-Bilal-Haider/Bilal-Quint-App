import React from 'react';
import './Sliderstylesheet.css';
function Slider() {
  return <>
  <div
  className="carousel carousel-showmanymoveone slide"
  id="carousel-tilenav"
  data-interval="false"
>
  <div className="carousel-inner">
    <div className="item active">
      <div className="col-xs-12 col-sm-6 col-md-2">
        <a href="#">
          <img
            src="https://via.placeholder.com/500/0054A6/fff/&text=1"
            className="img-responsive"
          />
        </a>
      </div>
    </div>
    <div className="item">
      <div className="col-xs-12 col-sm-6 col-md-2">
        <a href="#">
          <img
            src="https://via.placeholder.com/500/002d5a/fff/&text=2"
            className="img-responsive"
          />
        </a>
      </div>
    </div>
    <div className="item">
      <div className="col-xs-12 col-sm-6 col-md-2">
        <a href="#">
          <img
            src="https://via.placeholder.com/500/d6d6d6/333&text=3"
            className="img-responsive"
          />
        </a>
      </div>
    </div>
    <div className="item">
      <div className="col-xs-12 col-sm-6 col-md-2">
        <a href="#">
          <img
            src="https://via.placeholder.com/500/002040/eeeeee&text=4"
            className="img-responsive"
          />
        </a>
      </div>
    </div>
    <div className="item">
      <div className="col-xs-12 col-sm-6 col-md-2">
        <a href="#">
          <img
            src="https://via.placeholder.com/500/0054A6/fff/&text=5"
            className="img-responsive"
          />
        </a>
      </div>
    </div>
    <div className="item">
      <div className="col-xs-12 col-sm-6 col-md-2">
        <a href="#">
          <img
            src="https://via.placeholder.com/500/002d5a/fff/&text=6"
            className="img-responsive"
          />
        </a>
      </div>
    </div>
    <div className="item">
      <div className="col-xs-12 col-sm-6 col-md-2">
        <a href="#">
          <img
            src="https://via.placeholder.com/500/eeeeee&text=7"
            className="img-responsive"
          />
        </a>
      </div>
    </div>
    <div className="item">
      <div className="col-xs-12 col-sm-6 col-md-2">
        <a href="#">
          <img
            src="https://via.placeholder.com/500/40a1ff/002040&text=8"
            className="img-responsive"
          />
        </a>
      </div>
    </div>
  </div>
  <a
    className="left carousel-control"
    href="#carousel-tilenav"
    data-slide="prev"
  >
    <i className="glyphicon glyphicon-chevron-left" />
  </a>
  <a
    className="right carousel-control"
    href="#carousel-tilenav"
    data-slide="next"
  >
    <i className="glyphicon glyphicon-chevron-right" />
  </a>
</div>

  </>
}

export default Slider