import React from 'react';
import { PropTypes } from 'prop-types';
import Babylon from 'babylonjs';

class Ground extends React.Component {
  componentDidMount() {
    this.sphere = Babylon.Mesh.CreateGround('ground1', this.props.width, this.props.height, this.props.subdivisions, this.context.scene);
  }

  componentDidUpdate() {
    this.componentWillUnmount();
    this.componentDidMount();
  }

  componentWillUnmount() {
    this.sphere.dispose();
  }

  render() {
    return null;
  }
}

Ground.contextTypes = {
  scene: PropTypes.object.isRequired
};

Ground.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  subdivisions: PropTypes.number
};

Ground.defaultProps = {
  subdivisions: 2
};

export default Ground;
