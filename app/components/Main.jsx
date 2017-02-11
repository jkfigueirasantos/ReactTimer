var React = require('react');
var Nav = require('./Nav');

var Main = (props) => {
  return(
    <div>
      <div>
        <Nav />
        <h2 className="page-title">ReactJS Timer</h2>
        <p>Main.jsx rendered</p>
        {props.children}
      </div>
    </div>
  );
}

module.exports = Main;
