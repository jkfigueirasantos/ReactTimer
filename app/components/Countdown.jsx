var React = require('react');
var Clock = require('./Clock');
var CountdownForm = require('./CountdownForm');

var Countdown = React.createClass({

  getInitialState: function(){
    return {
      count: 0
    }
  },

  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds
    });
  },

  render: function() {
    var {count} = this.state;
    return(
      <div>
        <h2 className="page-title">Countdown</h2>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }

});

module.exports = Countdown;