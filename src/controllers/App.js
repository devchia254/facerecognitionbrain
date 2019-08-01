import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Navbar from '../components/Navbar/Navbar';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import './App.css';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
  }
}
// Change to 'route: home' to bypass the signin component'
const initialState = {
  input: '',
  imageUrl: '',
  box: [], //{} initially. Changing into array[] can store more than one value.
  route: 'signin',
  loading: false,
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }


  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries:data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const arrOfRegions = [];
    const regions = data.outputs[0].data.regions;
    console.log("array of regions:",arrOfRegions);

    //Gets dimensions of the image used for detection
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log("width:", width, "hegiht:", height);

    regions.forEach((region, i) => {
      const boundingBox = region.region_info.bounding_box;
      arrOfRegions.push({
        leftCol: boundingBox.left_col * width,
        topRow: boundingBox.top_row * height,
        rightCol: width - (boundingBox.right_col * width),
        bottomRow: height - (boundingBox.bottom_row * height)
      })
    });
    return arrOfRegions;
    //Solution could be return a foreach loop for the dimensions of each box to enable multiple face detections.
    // Also change the return statement into an array of objects coz currently, it is only returning one object.
  }

  displayFaceBox = (box) => {
    console.log("box:", box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})    
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
            .catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    // console.log("route: ", route);
    if (route === 'signout') {
      this.setState(initialState);  
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {

    // const member = this.state.route === 'signin'
    //                 ? <Signin onRouteChange={this.onRouteChange}/>
    //                 : <Register onRouteChange={this.onRouteChange}/>;

    const { isSignedIn, imageUrl, route, box } = this.state;

    return (
      <div className="App">
        <Particles 
          className='particles'
          params={particleOptions}
        />
        <div className="navbar">
          <Navbar>
            <Logo />
            <Rank isSignedIn={isSignedIn} name={this.state.user.name} entries={this.state.user.entries} box={box} />
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
          </Navbar>
        </div>

        { route === 'home'
          ?   <div className='content-page'>
                <div className='wrapper'>
                  <div className='wrapper-items link-form'>
                    <ImageLinkForm 
                      onInputChange={this.onInputChange} 
                      onButtonSubmit={this.onButtonSubmit}
                    />
                  </div>
                  <div className='wrapper-items image-section'>
                    <FaceRecognition 
                      box={box} 
                      imageUrl={imageUrl} 
                    >
                    </FaceRecognition>
                  </div>
                </div>
              </div>

          : ( route === 'signin'
              ? <div className='content-page'>
                  <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                </div>
                  
              : <div className='content-page'>
                  <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                </div>
            )
        }

      </div>
    );
  }
}

export default App;
