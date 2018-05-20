import React from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

import messages from '../../../../i18n/messages.js';
import ferdinand from '../../../../../public/images/ferdinand_1.png';

import './level1.scss';

const config = {
  character_width: 200,
  character_height: 200,
  quote_width: 500,
  quote_height: 50,
};

class Level1 extends React.Component {
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
    const { startGame, playerCode, language } = this.props;
    const node = this.svgNode;

    const svgTag = d3.select(node);
    svgTag.select("g.character").selectAll("*").remove();

    const character = svgTag.select('.character__ferdinand')
      .append('svg:image')
      .attr('xlink:href', ferdinand)
      .attr('width', `${config.character_width}px`)
      .attr('height', `${config.character_height}px`);

    const characterQuote = svgTag.select('.character__quote');
    characterQuote.append('rect')
      .attr('width', () => {
        if (language === 'en') {
          return `${config.quote_width}px`;
        }
        return `${config.quote_width + 90}px`;
      })
      .attr('height', `${config.quote_height}px`);
    characterQuote.append('path')
      .attr('d', 'M -20 20 l 21 -10 0 20 z');
    characterQuote.append('text')
      .text(messages[language].level1_character_quote)
      .attr('x', 10)
      .attr('y', config.quote_height - 20);

    const playerQuote = svgTag.select('.player__quote');
    if (startGame) {
      playerQuote.append('rect')
        .attr('width', `${config.quote_width / 3}px`)
        .attr('height', `${config.quote_height}px`);
      playerQuote.append('path')
        .attr('d', 'M -20 20 l 21 -10 0 20 z');
      playerQuote.append('text')
        .text(playerCode.split(/'|'/)[1])
        .attr('x', 10)
        .attr('y', config.quote_height - 20);
    }
  }

  render() {
    return (
      <svg ref={node => this.svgNode = node}>
          <g className="player__quote" />
          <g className="character character__quote" />
          <g className="character character__ferdinand" />
        </svg>
    );
  }
}

Level1.displayName = 'Level1';
Level1.propTypes = {
  startGame: PropTypes.bool,
  playerCode: PropTypes.string,
  language: PropTypes.string,
};
Level1.defaultProps = {
  startGame: false,
  playerCode: '',
  language: 'en',
};

export default Level1;
