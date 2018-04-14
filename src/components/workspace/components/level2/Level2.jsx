import React from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

import { getPath } from '../../../../lib/grid.js';

import bunny from '../../../../../public/images/bunny2.png';
import bunny_finish from '../../../../../public/images/bunny1.png';
import ground_template from '../../../../../public/images/ground_template.jpg';

import './level2.scss';

const config = {
  'character_width': 100,
  'character_height': 100,
};

const characterPos = { x: 100, y: 300 };

const roadPath = [
    { x: 200, y: 300 },
    { x: 300, y: 300 },
    { x: 400, y: 300 },
    { x: 400, y: 200 },
    { x: 400, y: 100 },
];

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
    var defs = svgTag.append('svg:defs');
    defs.append("svg:pattern")
      .attr("id", "ground_template")
      .attr("width", config.character_width)
      .attr("height", config.character_height)
      .attr("patternUnits", "userSpaceOnUse")
      .append("svg:image")
      .attr("xlink:href", ground_template)
      .attr("width", config.character_width)
      .attr("height", config.character_height);

   const road = svgTag.select('.road')
   const roadPiece = road.selectAll('rect')
     .data(roadPath);

   roadPiece.enter()
    .append('rect')
    .attr('class', 'roadPiece')
    .style('fill', 'url(#ground_template)')
    .attr('x', d => d.x)
    .attr('y', d => d.y);

   const character = svgTag.select('.character__rabbit')
     .append('svg:image')
     .attr('xlink:href', bunny)
     .attr('class', 'character__initial')
     .attr('transform', `translate(${characterPos.x}, ${characterPos.y})`)
     .attr('width', `${config.character_width}px`)
     .attr('height', `${config.character_height}px`);

    if (startGame) {
      svgTag.select('.character__rabbit').select('.character__initial').remove();
      const playerPath = getPath(characterPos, playerCode);

      playerPath.forEach((roadPiece) => {
        console.log(roadPiece);
        character
          .transition()
          .delay(5)
          .duration(3000)
          .attr('transform', `translate(${roadPiece.x}, ${roadPiece.y})`)
    });

  }

    character.exit().remove();
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
