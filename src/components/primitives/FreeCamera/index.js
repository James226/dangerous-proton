import React from 'react';
import { PropTypes } from 'prop-types';
import Babylon from 'babylonjs';

class Sphere extends React.Component {
  componentDidMount() {
    const position = new Babylon.Vector3(this.props.position.x, this.props.position.y, this.props.position.z);
    this.camera = new Babylon.FreeCamera('camera1', position, this.context.scene);
    this.camera.setTarget(new Babylon.Vector3(this.props.target.x, this.props.target.y, this.props.target.z));
    this.camera.attachControl(this.context.canvas, false);
  }

  componentDidUpdate() {
    this.camera.position.x = this.props.position.x;
    this.camera.position.y = this.props.position.y;
    this.camera.position.z = this.props.position.z;

    this.camera.setTarget(new Babylon.Vector3(this.props.target.x, this.props.target.y, this.props.target.z));
  }

  componentWillUnmount() {
    this.camera.dispose();
  }

  render() {
    return null;
  }
}

Sphere.contextTypes = {
  scene: PropTypes.object.isRequired,
  canvas: PropTypes.object.isRequired
};

export default Sphere;
