import React from 'react';

class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  clicketyClack(
    text='Give me something to type!',
    minTypeSpeed=70,
    maxTypeSpeed=70,
    delay=800
  ) {
    let str = '';
    let typeSpeed = 0;
    const self = this;

    text.split('').forEach(c => {
      typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
      setTimeout(() => {
        str += c;
        this.setState({ text: str });
      }, delay + typeSpeed);
    });
  }

  componentDidMount() {
    this.clicketyClack(this.props.text, this.props.minTypeSpeed, this.props.maxTypeSpeed);
  }

  render() {
    return (
      <div className={this.props.class}>{this.state.text}<span>&nbsp;</span></div>
    );
  }
}

export default Typewriter;
