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

const characterPos = { 'x': 100, 'y': 300 };

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

    this.state = {
      'finishedLevel': false,
    };
    this.svgNode = null;
    this.levelHasFinished = this.levelHasFinished.bind(this);
  }

  componentDidMount() {
    this.renderD3();
  }

  componentDidUpdate() {
    this.renderD3();
  }

  levelHasFinished() {
    this.setState({
      'finishedLevel': true,
    });
  }

  renderD3() {
    const { startGame, playerCode, setLevelIsFinished } = this.props;
    const node = this.svgNode;

    const svgTag = d3.select(node);
    const defs = svgTag.append('svg:defs');
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

    const characterGroup = svgTag.select('.character__rabbit');
    const character = characterGroup.selectAll('.main-character')
      .data([characterPos]);
    character.enter()
     .append('svg:image')
     .attr('xlink:href', bunny)
     .attr('class', 'main-character')
     .attr('transform', `translate(${characterPos.x}, ${characterPos.y})`)
     .attr('width', `${config.character_width}px`)
     .attr('height', `${config.character_height}px`);
    character.attr('transform', `translate(${characterPos.x}, ${characterPos.y})`);
    character.exit().remove();

    if (startGame) {
      const playerPath = getPath(characterPos, playerCode, 2);

      let index = 0;
      const transition = {
          'delay': 5,
          'duration': 1000,
      };

      const move = () => {
          if (playerPath[index].x >= 0 && playerPath[index].y >= 0) {
              character
                  .transition()
                  .delay(transition.delay)
                  .duration(transition.duration)
                  .attr('transform', `translate(${playerPath[index].x}, ${playerPath[index].y})`);
          }
          index += 1;
          if (index < playerPath.length) {
              setTimeout(move, transition.duration + transition.delay);
              if (index === playerPath.length - 1) {
                character
                  .attr('xlink:href', bunny_finish);
              }
          }
      };
      if (playerPath.length) {
          move();
      }
    }
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
