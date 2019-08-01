import React from 'react';

const Rank = ({isSignedIn, name, entries, box}) => {
     if (isSignedIn) {
          return (
               <div className='w-100 mt4'>
                    <div className='black mv3 f4'>
                         {`Hello ${name}!`}
                    </div>
                    <h3 className='f4 mb0 mt4 code underline'>Your Stats</h3>
                    <table className="pb2 pv2 f6 mw8 code" cellSpacing="0">
                              <tr className=''>
                                   <th className="pa2 f6 tr">Entries:</th>
                                   <td className="pa1 f6">{entries}</td>
                              </tr>
                              <tr>
                                   <th className="pa2 f6 tr">Faces:</th>
                                   <td className="pa1 f6">{box.length}</td>
                              </tr>
                    </table>
               </div>
          );
     } else {
          return(null);
     }
}

export default Rank;