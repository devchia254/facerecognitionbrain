import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    // console.log('check', imageUrl);
    // console.log("box: ", box[0]);
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
                }}>
                { i }
            </div>
        )
    });

    return(
        <div className='ma flex justify-center items-center'>
            <div className='relative mv3'>
                <img id='inputimage' className='br2' alt='' src={imageUrl} width='auto' height='auto' style={{ }} />
                { listOfFaces }
            </div>
        </div>
    );
}
export default FaceRecognition