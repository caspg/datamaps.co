import React, { Component, PropTypes } from 'react'
import Typist from 'react-typist'

class TypistWrapper extends Component {
  static randomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
  }

  constructor(props) {
    super(props)

    this.state = {
      typing: true,
      currentWord: TypistWrapper.randomWord(props.words),
    }

    this.handleTypingDone = this.handleTypingDone.bind(this)
  }

  handleTypingDone() {
    this.setState({
      typing: false,
    }, () => {
      setTimeout(() => this.setState({
        typing: true,
        currentWord: TypistWrapper.randomWord(this.props.words),
      }), 2500)
    })
  }

  renderTypist() {
    return (
      <Typist
        className={this.props.className}
        startDelay={1500}
        avgTypingDelay={200}
        onTypingDone={this.handleTypingDone}
      >
        {this.state.currentWord}
      </Typist>
    )
  }

  render() {
    return (
      this.state.typing ?
        this.renderTypist() :
        <span>
          {this.state.currentWord}
          <span className="Cursor--blinking">
            {"|"}
          </span>
        </span>
    )
  }
}

TypistWrapper.propTypes = {

}

export default TypistWrapper
