import React from 'react';

const Rank = ({isSignedIn, name, entries, box}) => {
     if (isSignedIn) {
          return (
               <div>
                    <div className='black mv3 f4'>
                         {`Hello ${name}, these are your stats:`}
                    </div>
                    <div>
                    <table className="pb2 pv2 f6 w-100 mw8" cellSpacing="0">
                         <thead className='tc black f4'>
                              <tr className=''>
                                   <th className="br pa2">Entries</th>
                                   <th className="pa2">Faces</th>
                              </tr>
                         </thead>
                         <tbody className='tc black f4'>
                              <tr>
                                   <td className="br pa1">{entries}</td>
                                   <td className="pa1">{box.length}</td>
                              </tr>
                         </tbody>
                    </table>
                    </div>
                    {/* <div className='black f3'>
                         
                    </div>
                    <div className='black f3'>
                         Faces: 
                    </div> */}
               </div>
         );
     } else {
          return(null);
     }
}

export default Rank;