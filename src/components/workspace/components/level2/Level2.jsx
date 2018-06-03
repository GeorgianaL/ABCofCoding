import React from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';
import messages from '../../../../i18n/messages.js';

const getVariableValue = (varName, code) => {
  if (code.indexOf(varName) >= 0) {
    return code.split(varName.concat(' ='))[1].split(';')[0];
  }
  return 0;
};

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
    const { startGame, playerCode, language } = this.props;
    const node = this.svgNode;

    const radius = getVariableValue(messages[language].radius, playerCode);
    let color = getVariableValue(messages[language].color, playerCode);
    if (typeof color === 'string') {
      color = color.split("'")[1];
    }

    const svgTag = d3.select(node);

    if (startGame) {
      svgTag.append('circle')
        .attr('cx', 280)
        .attr('cy', 180)
        .attr('r', radius)
        .attr('fill', color);
    }
  }

  render() {
    return (
      <svg ref={node => this.svgNode = node} />
    );
  }
}

Level2.displayName = 'Level2';
Level2.propTypes = {
  startGame: PropTypes.bool,
  playerCode: PropTypes.string,
  language: PropTypes.string,
};
Level2.defaultProps = {
  startGame: false,
  playerCode: '',
  language: 'en',
};

export default Level2;
