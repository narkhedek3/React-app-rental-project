// HOC high order component

import React from 'react';

import { StateContext } from './Provider';

const connect = mapStateToProps => Component => {

  class Connect extends React.Component {

    constructor(props, context) {
      super(props);
      
      this.state = {
        sliceOfData: mapStateToProps(context.getState())
      };

      this.unsubcribe = context.subscribe(() => this.handleStateChange(context));
    }

    componentWillUnmount() {
      this.unsubcribe();
    }
 
    handleStateChange(context) {
      const state = context.getState();
      this.setState({sliceOfData: mapStateToProps(state)});
    }

    render = () => {
      // const store = this.context
      // return <Component store={store}/>
      const { dispatch } = this.context;
      const { sliceOfData } =  this.state;
    
      return <Component {...sliceOfData} dispatch={dispatch}/>
    } 
  }

  Connect.contextType = StateContext;

  return Connect;

}

export default connect;