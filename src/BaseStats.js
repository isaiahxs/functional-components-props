import "./BaseStats.css";

//before DRYing it up
// function BaseStats(props) {
//   const { stats } = props;

//   return (
//     <div className="base-stats">
//       <h1>BaseStats</h1>
//       <table>
//         <tbody>
//           <tr>
//             <td>Hit Points</td>
//             <td>{props.stats.hp}</td>
//           </tr>
//           <tr>
//             <td>Attack</td>
//             <td>{props.stats.attack}</td>
//           </tr>
//           <tr>
//             <td>Defense</td>
//             <td>{props.stats.defense}</td>
//           </tr>
//           <tr>
//             <td>Speed</td>
//             <td>{props.stats.speed}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

//after DRYing it up
function BaseStats({ stats, clicker }) {
  const { hp, attack, defense, speed } = stats;

  return (
    <div className="base-stats">
      <h1>BaseStats</h1>
      <button className="sp-stats" onClick={clicker}>
        Check Special Stats
      </button>
      <table>
        <tbody>
          <tr>
            <td>Hit Points</td>
            <td>{hp}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{attack}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{defense}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{speed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BaseStats;
