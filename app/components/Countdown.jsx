var React = require('react');
var Clock = require('./Clock');

var Countdown = React.createClass({
  render: function() {
    return(
      <div>
        <h2 className="page-title">Countdown</h2>
        <Clock totalSeconds={615} />
      </div>
    );
  }
});

module.exports = Countdown;
