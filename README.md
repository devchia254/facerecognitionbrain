# Face Detection App
`Live:` https://devchia254.github.io/swapi_robots/

![App Snapshot](./README_resources/gif-loginpage.gif)

A web app that can detect multiple faces from an image URL.

## Info
- This web app uses the face recognition feature from the Clarifai API: https://www.clarifai.com/models/face-detection-image-recognition-model-a403429f2ddf4b49b307e318f00e528b-detection.


## Purpose
The objective is to learn:-

- The fundamentals of how to fetch data from an API
- How to use AJAX and Promises

## Features & Code Snippets
Below are some of the features and code extracts of this coding exercise.

### Multiple Face Recognition Feature
---
![AJAX Fetching](./README_resources/gif-faceDetect.gif)

Before storing the character's data in the  `state`, an array  is created for listing all 10 URLs for fetching all the character's data.

Once all the URLs are listed then the JSON data is fetched by using `Promises.all` and stored in the `state`, within `api_data`.

##### App.js:
```javascript
calculateFaceLocation = (data) => {
    const arrOfRegions = [];
    const regions = data.outputs[0].data.regions;
    console.log("array of regions:",arrOfRegions);

    //Gets dimensions of the image used for detection
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

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
  }
```
##### FaceRecognition.js:
```javascript
const listOfFaces = box.map((face, i) => {
        const { topRow, rightCol, bottomRow, leftCol } = face;

        return (
            <div className='bounding-box' 
                key={i} 
                style={{
                    top: topRow, 
                    right: rightCol, 
                    bottom: bottomRow, 
                    left: leftCol 
                }}
            >
            {/* { i } */}
            </div>
        )
    });
  ```
## NPM Dev Packages:

`gh-pages` was used to deploy the react app on Github Pages.

`react` , `react-dom` and `react-scripts`, were initiated from the create-react-app command.

`tachyons` is a package for styling the site with greater ease.


```json
"dependencies": {
    "clarifai": "^2.9.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-particles-js": "^2.6.0",
    "react-scripts": "3.0.1",
    "react-tilt": "^0.1.4",
    "tachyons": "^4.11.1"
  }
```
