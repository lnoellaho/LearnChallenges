import React, {Component} from 'react';

class BadRobot extends Component {
     blah() {
       var s = this.props.whatever;        for (var i = 0; i < s.length; i++) {
            var chars= s.charAt(i);
           return chars + "i";
 }
 }

    render() {
        return (

            <h1> I hear you saying {this.props.whatever} Is that correct? </h1>
        );
    }
}

export default BadRobot;
