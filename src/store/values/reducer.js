import actions from './actions';

const stores = (state = { }, action) => {
  switch (action.type) {
    case actions.fetchPlaceholder:
      return { loading: true };
    default:
      return state;
  }
};

export default stores;

