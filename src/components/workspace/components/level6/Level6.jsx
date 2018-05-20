import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import hadgehog from '../../../../../public/images/hadgehog1.png';
import flower from '../../../../../public/images/flower.png';

const config = {
  'character_width': 100,
  'character_height': 100,
};
const characterPos = { 'x': 200, 'y': 300 };

const roadPath = [
    { x: 200, y: 300 },
    { x: 300, y: 300 },
    { x: 400, y: 300 },
    { x: 400, y: 200 },
    { x: 400, y: 100 },
    { x: 300, y: 100 },
    { x: 200, y: 100 },
];

const flowersParcelsPos = [
  { x: 300, y: 300 },
  { x: 400, y: 200 },
  { x: 300, y: 100 },
];

const flowersPos = [
  // first parcel with flowers
  { x: 315, y: 320 },
  { x: 355, y: 320 },
  { x: 335, y: 350 },
  // second
  { x: 415, y: 220 },
  { x: 455, y: 220 },
  { x: 415, y: 250 },
  { x: 455, y: 250 },
  // third
  { x: 315, y: 105 },
  { x: 355, y: 105 },
  { x: 315, y: 135 },
  { x: 355, y: 135 },
  { x: 315, y: 165 },
  { x: 355, y: 165 },
];

class Level6 extends React.Component {
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

    const characterGroup = svgTag.select('.character__hadgehog');
    const character = characterGroup.selectAll('.main-character')
      .data([characterPos]);
    character.enter()
     .append('svg:image')
     .attr('xlink:href', hadgehog)
     .attr('class', 'main-character')
     .attr('transform', `translate(${characterPos.x}, ${characterPos.y})`)
     .attr('width', `${config.character_width}px`)
     .attr('height', `${config.character_height}px`);
    character.attr('transform', `translate(${characterPos.x}, ${characterPos.y})`);
    character.exit().remove();

    const flowersGroup = svgTag.select('.flowers');
    const flowerPiece = flowersGroup.selectAll('.flower-img')
      .data(flowersPos);
    flowerPiece.enter()
     .append('svg:image')
     .attr('xlink:href', flower)
     .attr('class', 'flower-img')
     .attr('width', 30)
     .attr('height', 30)
     .attr('x', d => d.x)
     .attr('y', d => d.y);
  }

  render() {
    return (
        <svg ref={node => this.svgNode = node}>
          <g className="road" />
          <g className="character character__hadgehog" />
          <g className="flowers" />
        </svg>
    );
  }
}

Level6.displayName = 'Level6';
Level6.propTypes = {
  'startGame': PropTypes.bool,
  'playerCode': PropTypes.string,
};
Level6.defaultProps = {
  'startGame': false,
  'playerCode': '',
};

export default Level6;