import React from 'react';
import PropTypes from 'prop-types';

import { getPath } from '../../../../lib/grid.js';

import bunny from '../../../../../public/images/bunny2.png';
import bunny_finish from '../../../../../public/images/bunny1.png';
import ground_template from '../../../../../public/images/ground_template.jpg';

import * as d3 from 'd3';

const config = {
  character_width: 100,
  character_height: 100,
};

const characterPos = { x: 100, y: 400 };

const roadPath = [
  { x: 400, y: 100 },
  { x: 400, y: 200 },
  { x: 300, y: 200 },
  { x: 300, y: 300 },
  { x: 200, y: 300 },
  { x: 200, y: 400 },
  { x: 200, y: 400 },
  { x: 100, y: 400 },
];

class Level4 extends React.Component {
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
    const defs = svgTag.append('svg:defs');
    defs.append('svg:pattern')
      .attr('id', 'ground_template')
      .attr('width', config.character_width)
      .attr('height', config.character_height)
      .attr('patternUnits', 'userSpaceOnUse')
      .append('svg:image')
      .attr('xlink:href', ground_template)
      .attr('width', config.character_width)
      .attr('height', config.character_height);


    const road = svgTag.select('.road');
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
      const playerPath = getPath(characterPos, playerCode, 4);

      let index = 0;
      const transition = {
        delay: 5,
        duration: 1000,
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

Level4.displayName = 'Level4';
Level4.propTypes = {
  startGame: PropTypes.bool,
  playerCode: PropTypes.string,
};
Level4.defaultProps = {
  startGame: false,
  playerCode: '',
};

export default Level4;
