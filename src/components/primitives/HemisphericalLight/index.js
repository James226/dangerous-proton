import React from 'react';
import { PropTypes } from 'prop-types';
import Babylon from 'babylonjs';

class HemisphericalLight extends React.Component {
  componentDidMount() {
    const direction = new Babylon.Vector3(this.props.direction.x, this.props.direction.y, this.props.direction.z);

    this.light = new Babylon.HemisphericLight('light1', direction, this.context.scene);
    this.light.intensity = this.props.intensity;
  }

  componentDidUpdate() {
    this.light.intensity = this.props.intensity;
    this.light.direction = new Babylon.Vector3(this.props.direction.x, this.props.direction.y, this.props.direction.z);
  }

  componentWillUnmount() {
    this.light.dispose();
  }

  render() {
    return null;
  }
}

HemisphericalLight.contextTypes = {
  scene: PropTypes.object.isRequired
};

HemisphericalLight.propTypes = {
  direction: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number
  }),
  intensity: PropTypes.number
};

HemisphericalLight.defaultProps = {
  direction: { x: 0, y: 0, z: 0 },
  intensity: 1
};

export default HemisphericalLight;
