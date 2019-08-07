import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    // console.log("imageUrl: ", imageUrl);
    // console.log("box: ", box.length);

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

    return(
        <div className='flex justify-center items-center'>
                <div className='relative'>
                    <img id='inputimage' className='br2 shadow-3' alt='' src={imageUrl} width='auto' height='auto' style={{maxHeight: '800px' }} />
                    { listOfFaces }
                </div>
        </div>
    );
}
export default FaceRecognition