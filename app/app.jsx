var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main');

var Timer = require('./components/Timer');
var Countdown = require('./components/Countdown');

// Loading foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$('document').foundation();

// App css
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}></IndexRoute>
      <Route path="countdown" component={Countdown}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
