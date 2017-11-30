import React, { Component } from 'react';
import { Provider } from 'react-redux'

import makeStore from '@src/redux/store/makeStore';

function withReduxStore(ComposedComponent) {
  class ComponentWithReduxStore extends Component {
    static async getInitialProps(ctx) {
      let composedInitialProps = {};

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      return composedInitialProps;
    }

    constructor(props) {
      super(props);

      this.reduxStore = makeStore();
    }

    render() {
      return (
        <Provider store={this.reduxStore}>
          <ComposedComponent {...this.props} />
        </Provider>
      );
    }
  }

  return ComponentWithReduxStore;
}

export default withReduxStore;
