// import React, { useRef, useEffect } from 'react';
// import './remaining.css';

// const Remaining = ({bud, booze, used, remainingTotal}) => {
//   const canvas = useRef()
//   const budLeft = Math.min(remainingTotal, bud - used.bud);
//   const boozeLeft = Math.min(remainingTotal, booze - used.booze);

//   useEffect(() => {
//     if (!canvas.current) return;

//     const context = canvas.current.getContext('2d');

//     context.clearRect(0, 0, 300, 30)

//     context.fillStyle = '#a9dc76';
//     context.fillRect(10, Math.max(15 - remainingTotal, used.bud) * 2, 140, 30);

//     context.fillStyle = '#fc9867';
//     context.fillRect(160, Math.max(15 - remainingTotal, used.booze) * 2, 290, 30);

//   }, [used.bud, used.booze]);

//   return (
//     <div className="remaining-container">
//       <div className="label">
//         Remaining:
//       </div>
//       <div className="graph">
//         <canvas width={300} height={30} ref={canvas} />
//       </div>
//       <div className="chips">
//         <div className="bud">{budLeft} (used: {used.bud})</div>
//         <div className="booze">{boozeLeft} (used: {used.booze})</div>
//       </div>
//     </div>
//   )
// }

// export default Remaining;
