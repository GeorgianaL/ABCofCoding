import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import { getPath } from '../../../../lib/grid.js';

import hadgehog from '../../../../../public/images/hadgehog1.png';
import cactus from '../../../../../public/images/cactus.png';
import barn from '../../../../../public/images/barn.png'

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

const decoration = [
  { type: 'obstacle', x: 200, y: 200 },
  { type: 'obstacle', x: 300, y: 300 },
  { type: 'finish', x: 350, y: 75 },
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

    const obstacleGroup = svgTag.select('.decoration')
    const obstacles = obstacleGroup.selectAll('image')
      .data(decoration);
    obstacles.enter()
     .append('svg:image')
     .attr('xlink:href', (d) => d.type === 'obstacle' ? cactus : barn)
     .attr('width', (d) => {
       if (d.type === 'obstacle') {
        return `${config.character_width}px`;
       }
       return 400;
     })
     .attr('height', (d) => {
       if (d.type === 'obstacle') {
        return `${config.character_height}px`;
       }
       return 450;
     })
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
             <g className="decoration" />
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
