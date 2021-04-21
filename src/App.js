import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js'
import Navigation from './components/navigation/navigation'
import Logo from './components/logo/Logo';
import Signin from './components/Signin/Signin';
import Form from './components/form/form';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank.js';
import './App.css';

 
const app = new Clarifai.App({
 apiKey: '98b9304e766a4e0f8645ee7aca7b496d'
});

const particlesOptions = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 150
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: '',
      imgUrl: '',
      box:{}
    }
  }

  faceSquareLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      left_col: clarifaiFace.left_col * width,
      top_row: clarifaiFace.top_row * height,
      right_col: width - (clarifaiFace.right_col * width),
      bottom_row: height - (clarifaiFace.bottom_row * height)
    }
  }

  boxDisplay = (box) => {
    console.log(box);
    this.setState ({box: box})
  }

  onInputChange = (event) => {
    this.setState({status: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imgUrl: this.state.status})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.status)
      .then(response => this.boxDisplay(this.faceSquareLocation(response)))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="App">
        <Navigation />
        <Particles className='particles'
          params={particlesOptions} />
        <Signin />
        <Logo />
        <Rank />
        <Form onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imgUrl={this.state.imgUrl} box={this.state.box}/> 
      </div>
    );
  }
}

export default App;


