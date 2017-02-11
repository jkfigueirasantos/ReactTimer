var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(
    <header className="top-bar nav-component">
      <div className="top-bar-left">
        <ul className="menu">
          <li><h1 className="logo">ReactTimer</h1></li>
          <li><IndexLink to="/" activeClassName="-active">Timer</IndexLink></li>
          <li><Link to="/countdown" activeClassName="-active">Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <p className="credits">
          Created by <a href="https://github.com/jkfigueirasantos" target="_blank">jkfigueirasantos</a>
        </p>
      </div>
    </header>
  );
};

module.exports = Nav;
