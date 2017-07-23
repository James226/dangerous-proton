import React from 'react';
import { PropTypes } from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Route, withRouter } from 'react-router-dom';
import HomePage from 'components/HomePage';


const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <div className="ln-c-main-content" id="main-content">
        <div className="ln-o-site-wrap ln-o-site-wrap--padding">
          <Route exact path="/" component={HomePage} />
        </div>
      </div>
    </div>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object
};

App.defaultProps = {
  history: null
};

export default App;
