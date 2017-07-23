import React from 'react';
import { PropTypes } from 'prop-types';
import Babylon from 'babylonjs';

class Sphere extends React.Component {
  componentDidMount() {
    const segments = this.props.segments || 16;
    const diameter = this.props.radius * 2;

    this.sphere = Babylon.Mesh.CreateSphere('sphere1', segments, diameter, this.context.scene);
    this.sphere.position.x = this.props.position.x;
    this.sphere.position.y = this.props.position.y;
    this.sphere.position.z = this.props.position.z;
  }

  componentDidUpdate(oldProps) {
    if (this.props.radius !== oldProps.radius) {
      this.sphere.dispose();
      const segments = this.props.segments || 16;
      const diameter = this.props.radius * 2;

      this.sphere = Babylon.Mesh.CreateSphere('sphere1', segments, diameter, this.context.scene);
    }
    this.sphere.position.x = this.props.position.x;
    this.sphere.position.y = this.props.position.y;
    this.sphere.position.z = this.props.position.z;
  }

  componentWillUnmount() {
    this.sphere.dispose();
  }

  render() {
    return null;
  }
}

Sphere.contextTypes = {
  scene: PropTypes.object.isRequired
};

Sphere.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired
  }),
  segments: PropTypes.number,
  radius: PropTypes.number
};

Sphere.defaultProps = {
  position: { x: 0, y: 0, z: 0 },
  segments: 16,
  radius: 1
};

export default Sphere;
