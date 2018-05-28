import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import { findIndex } from 'lodash';

import { getLevel6Path } from '../../../../lib/grid.js';

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

let flowersPos = [
    { x: 315, y: 320, flowerParcelIndex: 0 },
    { x: 355, y: 320, flowerParcelIndex: 0 },
    { x: 335, y: 350, flowerParcelIndex: 0 },
    { x: 415, y: 220, flowerParcelIndex: 1 },
    { x: 455, y: 220, flowerParcelIndex: 1 },
    { x: 415, y: 250, flowerParcelIndex: 1 },
    { x: 455, y: 250, flowerParcelIndex: 1 },
    { x: 315, y: 105, flowerParcelIndex: 2 },
    { x: 355, y: 105, flowerParcelIndex: 2 },
    { x: 315, y: 135, flowerParcelIndex: 2 },
    { x: 355, y: 135, flowerParcelIndex: 2 },
    { x: 315, y: 165, flowerParcelIndex: 2 },
    { x: 355, y: 165, flowerParcelIndex: 2 },
];

// index = flowerParcelIndex; count = how many flowers to remove
const removeFlowers = (index, count) => {
  let removedFlowers = 0;
  if (count > 0) {
    let parcelFlowers = flowersPos.filter(el => el.flowerParcelIndex === index);
    const otherParcels = flowersPos.filter(el => el.flowerParcelIndex !== index);
    parcelFlowers = parcelFlowers.splice(parcelFlowers.length - 1, count);
    // modify initial flowersPos array
    flowersPos = otherParcels.concat(parcelFlowers);
  }
}

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

  renderFlowers(flowersGroup, data) {
    d3.selectAll('.flower-img').remove();
    const flowerPiece = flowersGroup.selectAll('.flower-img')
      .data(data);
    flowerPiece.enter()
     .append('svg:image')
     .attr('xlink:href', flower)
     .attr('class', 'flower-img')
     .attr('width', 30)
     .attr('height', 30)
     .attr('x', d => d.x)
     .attr('y', d => d.y);
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

     if (startGame) {
        const playerPath = getLevel6Path(characterPos, playerCode, 6);

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
                if (Object.keys(playerPath[index]).includes('pick')) {
                    const flowerParcelIndex = findIndex(flowersParcelsPos, {x: playerPath[index].x, y: playerPath[index].y});
                    removeFlowers(flowerParcelIndex, playerPath[index].pick);
                  }
            }
            index += 1;
            if (index < playerPath.length) {
                setTimeout(move, transition.duration + transition.delay);
                this.renderFlowers(flowersGroup, flowersPos);
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
          <g className="flowers" />
          <g className="character character__hadgehog" />
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
