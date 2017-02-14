var React = require('react');
var Nav = require('./Nav');

var Main = (props) => {
  return(
    <div>
      <div>
        <Nav />
        <p>Main.jsx rendered</p>
        {props.children}
      </div>
    </div>
  );
}

module.exports = Main;
