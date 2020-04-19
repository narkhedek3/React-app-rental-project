// HOC high order component

import React from 'react';

import { StateContext } from './Provider';

const connect = mapStateToProps => Component => {

  class Connect extends React.Component {
    render = () => {
      // const store = this.context
      // return <Component store={store}/>
      
      const sliceOfData = mapStateToProps(this.context.getState());
      return <Component { ...sliceOfData }/>
    } 
  }

  Connect.contextType = StateContext;

  return Connect;

}

export default connect;