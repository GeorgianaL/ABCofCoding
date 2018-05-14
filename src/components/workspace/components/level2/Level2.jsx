import React from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

class Level2 extends React.Component {
  constructor(props) {
    super(props);

    this.svgNode = null;
  }

  componentDidMount() {
    this.renderD3();
  }

  componentDidUpdate() {
    this.renderD3();
  }

  renderD3() {
    const { startGame, playerCode } = this.props;
    const node = this.svgNode;

    const svgTag = d3.select(node);
  }

  render() {
    return (
      <svg ref={node => this.svgNode = node}>
        <g className="road" />
      </svg>
    );
  }
}

Level2.displayName = 'Level2';
Level2.propTypes = {
  startGame: PropTypes.bool,
  playerCode: PropTypes.string,
};
Level2.defaultProps = {
  startGame: false,
  playerCode: '',
};

export default Level2;
