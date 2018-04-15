import React from 'react';
import PropTypes from 'prop-types';

import { getPath } from '../../../../lib/grid.js';

import bunny from '../../../../../public/images/bunny2.png';
import ground_template from '../../../../../public/images/ground_template.jpg';

import * as d3 from 'd3';

const config = {
  'character_width': 100,
  'character_height': 100,
};

const characterPos = { 'x': 0, 'y': 300 };

const roadPath = [
    { x: 500, y: 100 },
    { x: 400, y: 100 },
    { x: 400, y: 200 },
    { x: 300, y: 200 },
    { x: 200, y: 200 },
    { x: 200, y: 300 },
    { x: 100, y: 300 },
];

class Level3 extends React.Component {
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
    // const printMsg = d3.selectAll('.blocklyPath');
    // printMsg
    //   .attr('d', 'm 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 150 v 30 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z ');

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
       console.log(playerPath);

       playerPath.forEach((roadPiece) => {
         character
           .transition()
           .delay(5)
           .duration(3000)
           .attr('transform', `translate(${roadPiece.x}, ${roadPiece.y})`)
     });
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

   Level3.displayName = 'Level3';
   Level3.propTypes = {
     'startGame': PropTypes.bool,
     'playerCode': PropTypes.string,
   };
   Level3.defaultProps = {
     'startGame': false,
     'playerCode': '',
   };

   export default Level3;
