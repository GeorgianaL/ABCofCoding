import React from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

const config = {
  'character_width': 100,
  'character_height': 100,
  'character_x': 0,
  'character_y': 400,
};

const roadPath = [
    { x: 100, y: 400 },
    { x: 200, y: 400 },
    { x: 200, y: 300 },
    { x: 300, y: 300 },
    { x: 300, y: 200 },
    { x: 400, y: 200 },
    { x: 400, y: 100 },
    { x: 500, y: 100 },
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
    const { startGame } = this.props;
    const node = this.svgNode;

    const svgTag = d3.select(node);

   const road = svgTag.select('.road')
   const roadPiece = road.selectAll('rect')
     .data(roadPath);
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
