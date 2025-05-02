import React, { Component } from 'react';

class WindowSizeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    // Add event listener when the component mounts
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // Clean up the event listener when the component unmounts
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  render() {
    const { width, height } = this.state;

    // Render child components with window size as props
    return (
      <div>
        {React.cloneElement(this.props.children, {
          windowSize: { width, height },
        })}
      </div>
    );
  }
}

export default WindowSizeProvider;
