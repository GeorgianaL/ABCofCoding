import React from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

import bunny from '../../../../public/images/bunny2.png';

import './level2.scss';

const config = {
  'character_width': 100,
  'character_height': 100,
  'character_x': 500,
  'character_y': 300,
};

const path = [
  { x: 200, y: 100 },
  { x: 200, y: 200 },
  { x: 200, y: 300 },
  { x: 300, y: 300 },
  { x: 400, y: 300 },
]

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
    const { startGame } = this.props;
    const node = this.svgNode;

    const svgTag = d3.select(node);

   const road = svgTag.select('.road')
   const roadPiece = road.selectAll('rect')
     .data(path);
   roadPiece.enter()
    .append('rect')
    .attr('class', 'roadPiece')
    .attr('x', d => d.x)
    .attr('y', d => d.y);

  const character = svgTag.select('.character__rabbit')
     .append('svg:image')
     .attr('xlink:href', bunny)
     .attr('x', d => config.character_x)
     .attr('y', d => config.character_y)
     .attr('width', `${config.character_width}px`)
     .attr('height', `${config.character_height}px`);
  }

  render() {
    return (
        <svg ref={node => this.svgNode = node}>
          <g className="road" />
          <g className="character character__rabbit" />
        </svg>
    );
  }
}

Level2.displayName = 'Level2';
Level2.propTypes = {
  'startGame': PropTypes.bool,
  'playerCode': PropTypes.string,
};
Level2.defaultProps = {
  'startGame': false,
  'playerCode': '',
};

export default Level2;
