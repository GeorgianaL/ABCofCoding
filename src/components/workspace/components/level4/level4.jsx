import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import { getPath } from '../../../../lib/grid.js';

import hadgehog from '../../../../../public/images/hadgehog1.png';
import cactus from '../../../../../public/images/cactus.png';

const config = {
  'character_width': 100,
  'character_height': 100,
};
const characterPos = { 'x': 0, 'y': 200 };

const roadPath = [
    { x: 0, y: 200 },
    { x: 100, y: 200 },
    { x: 100, y: 300 },
    { x: 200, y: 300 },
    { x: 200, y: 400 },
    { x: 300, y: 400 },
];

const obstaclesPosition = [
  { x: 200, y: 200 },
  { x: 300, y: 300 },
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

   const road = svgTag.select('.road')
   const roadPiece = road.selectAll('rect')
     .data(roadPath);
   roadPiece.enter()
    .append('rect')
    .attr('class', 'roadPiece')
    .style('fill', '#00000029')
    .attr('x', d => d.x)
    .attr('y', d => d.y);

    const obstacleGroup = svgTag.select('.obstacles')
    const obstacles = obstacleGroup.selectAll('image')
      .data(obstaclesPosition);
    obstacles.enter()
     .append('svg:image')
     .attr('xlink:href', cactus)
     .attr('width', `${config.character_width}px`)
     .attr('height', `${config.character_height}px`)
     .attr('x', d => d.x)
     .attr('y', d => d.y);


    const character = svgTag.select('.character__hadgehog')
       .append('svg:image')
       .attr('xlink:href', hadgehog)
       .attr('class', 'character__initial')
       .attr('transform', `translate(${characterPos.x}, ${characterPos.y})`)
       .attr('width', `${config.character_width}px`)
       .attr('height', `${config.character_height}px`);

     if (startGame) {
       svgTag.select('.character__hadgehog').select('.character__initial').remove();
       const playerPath = getPath(characterPos, playerCode);
       console.log(playerPath);

       playerPath.forEach((roadPiece) => {
         if (roadPiece.x > 0 && roadPiece.y > 0) {
           character
             .transition()
             .delay(5)
             .duration(3000)
             .attr('transform', `translate(${roadPiece.x}, ${roadPiece.y})`);
         }
     });
   }

  }

     render() {
       return (
           <svg ref={node => this.svgNode = node}>
             <g className="road" />
             <g className="obstacles" />
             <g className="character character__hadgehog" />
           </svg>
       );
     }
   }

   Level4.displayName = 'Level4';
   Level4.propTypes = {
     'startGame': PropTypes.bool,
     'playerCode': PropTypes.string,
   };
   Level4.defaultProps = {
     'startGame': false,
     'playerCode': '',
   };

   export default Level4;
