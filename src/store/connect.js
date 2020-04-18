// HOC high order component

import React from 'react';

import { StateContext } from '../state-context';

const connect = (Component) => {

  class connect extends React.Component {
    render = () => {
      // const store = this.context
      // return <Component store={store}/>
      return <Component {...this.context}/>
    } 
  }

  connect.contextType = StateContext;

  return connect;

}

export default connect;