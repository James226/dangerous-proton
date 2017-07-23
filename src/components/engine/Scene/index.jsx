import React from 'react';
import { PropTypes } from 'prop-types';
import Babylon from 'babylonjs';

class Scene extends React.Component {
  constructor() {
    super();
    this.state = {
      scene: null
    };
  }

  componentDidMount() {
    const canvas = document.querySelector('#renderCanvas');
    const engine = new Babylon.Engine(canvas, true);

    const scene = new Babylon.Scene(engine);
    const clearColor = this.props.clearColor;
    scene.clearColor = new Babylon.Color3(clearColor.r, clearColor.g, clearColor.b);

    this.setState({ scene, canvas });

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener('resize', () => {
      engine.resize();
    });
  }

  getChildContext() {
    return {
      scene: this.state.scene,
      canvas: this.state.canvas
    };
  }

  componentDidUpdate() {
    const clearColor = this.props.clearColor;
    this.state.scene.clearColor = new Babylon.Color3(clearColor.r, clearColor.g, clearColor.b);
  }

  render() {
    const canvas = <canvas id="renderCanvas" />;

    return (
      <div>
        <canvas id="renderCanvas" />
        {!this.state.scene ? [] : this.props.children}
      </div>
    );
  }
}

Scene.childContextTypes = {
  scene: PropTypes.object,
  canvas: PropTypes.object
};

Scene.propTypes = {
  clearColor: PropTypes.shape({
    r: PropTypes.number.isRequired,
    g: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired
  })
};

Scene.defaultProps = {
  clearColor: { r: 0, g: 1, b: 1 }
};

export default Scene;
