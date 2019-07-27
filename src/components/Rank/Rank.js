import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
           <div className='black f4'>
                {`${name} , your current entry count is...`}
           </div>
           <div className='black f2'>
                {entries}
           </div>
        </div>
    );
}

export default Rank;