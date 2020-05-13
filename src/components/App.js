import React from 'react';
import ListContainer from './ListContainer';
import FullPost from './FullPost';

import {
    Switch, Route
} from 'react-router-dom';


class App extends React.Component {
    constructor (props) {
      super(props)
    }
    render() {
      console.log("this.props.children", this.props)
        return (
            <React.Fragment>
              <ListContainer />
              { this.props.children }
            </React.Fragment>
        )
    }
}

export default App;
