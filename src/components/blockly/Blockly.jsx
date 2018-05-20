import React from 'react';
import PropTypes from 'prop-types';

import ReactBlocklyComponent from './ReactBlocklyComponent.js';
import toolbox_categories from './toolboxCategories';

import './blockly.scss';


class BlocklyWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'toolboxCategories': toolbox_categories['en'][0],
      'code': '',
    };

    this.workspaceDidChange = this.workspaceDidChange.bind(this);
    this.changeToolboxCategories = this.changeToolboxCategories.bind(this);
  }

  componentDidMount() {
    const { levelActive, language } = this.props;

    this.setState({
      'toolboxCategories': toolbox_categories[language][levelActive - 1],
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.startGame !== nextProps.startGame) {
      this.props.getPlayerCode(this.state.code);
    }
    if (this.props.levelActive !== nextProps.levelActive
    || this.props.language !== nextProps.language) {
      this.changeToolboxCategories(nextProps.levelActive, nextProps.language);
    }
  }

  workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);

    setTimeout(() => {
      if (typeof code === 'string') {
        this.setState({code});
      }
    }, 1000);
  }

  changeToolboxCategories(level, language) {
    this.setState({
      'toolboxCategories': toolbox_categories[language][level - 1],
    });
  }

  render() {
    return (
        <ReactBlocklyComponent.BlocklyEditor
          toolboxCategories={this.state.toolboxCategories}
          workspaceConfiguration={{
            grid: {
              spacing: 20,
              length: 3,
              colour: '#ccc',
              snap: true,
            },
          }}
          wrapperDivClassName="fill-height"
          workspaceDidChange={this.workspaceDidChange}
          levelActive={this.props.levelActive}
        />
    );
  }
}

BlocklyWrapper.displayName = 'BlocklyWrapper';
BlocklyWrapper.propTypes = {
  'startGame': PropTypes.bool,
  'getPlayerCode': PropTypes.func,
  'levelActive': PropTypes.number,
  'language': PropTypes.string,
};
BlocklyWrapper.defaultProps = {
  'startGame': false,
  'getPlayerCode': () => null,
  'levelActive': 1,
  'language': 'en',
};

export default BlocklyWrapper;
