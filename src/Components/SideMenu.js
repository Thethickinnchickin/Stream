// import React, { useState } from 'react';
// import './SideMenu.css'; // Create this CSS file for styling

// const SideMenu = ({games}) => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isFrame1Open, setFrame1Open] = useState(false);

//   const handleHover = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const handleFrameHover = (framenum) => {
//     let selectedFrame;
//     switch (framenum) {
//       case framenum === 1:
//         selectedFrame = isFrame1Open;
//         break;
//       case framenum === 2:
//         selectedFrame = isFrame1Open;
//         break;
//       case framenum === 3:
//         selectedFrame = isFrame1Open;
//         break;
//       case framenum === 4:
//         selectedFrame = isFrame1Open;
//         break;

//       default:
//         break;

//     }
//     setFrame1Open(!isFrame1Open);
//   };

//   return (
//     <div className="hidden-side-menu">
//       <div className="invisible-side-button" onMouseEnter={handleHover} >
//         Hover Here
//       </div>
//       <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
//         {/* Add your menu content here */}
//         <ul>
//           <li onMouseEnter={() => handleFrameHover(1)}>
//             Frame1
//             <div className={`menu ${isFrame1Open ? 'open' : ''}`}>
//               <ul className='ml-4'>
//                 {games.map((game) => (
//                   <li id='team' key={game.id}>
//                     {game.home_team} VS {game.away_team}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//           <li>Menu Item 2</li>
//           <li>Menu Item 3</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SideMenu;
