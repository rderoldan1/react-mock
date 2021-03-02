import Log from '../models/Log'
import Stats from './Stats'
import Graph from './Graph'

function EmployeeCard(props){
  const user = props.user

  return(
    <div class="card">
      <div class="header">
        <img class="logo" src={user.avatar} alt="logo"/>
        <div class='copy'>
          <h3 class='name'>{user.name}</h3>
          <p class='occupation'>{user.occupation}</p>
        </div>        
      </div>
      <div class="body">
        <Graph />
        <Stats stats={Log.stats(user.id)}/>
      
      </div>
    </div>
  )
}

export default EmployeeCard;