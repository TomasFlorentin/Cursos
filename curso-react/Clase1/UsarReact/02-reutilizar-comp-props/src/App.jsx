// Aca vamos a crear los componentes
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


// En caso de querer ponerle un estilo a un elemento y no afectar a todos los componentes, se le pone una clase a esa sección para poder aplicarlo a solo esa parte
export function App () {

  const formattedUserName = <span>@tomiflorentin</span>

  return (
    <section className='App'> 
    {/* Alternativa a escribir React.Fragment */}
      <TwitterFollowCard 
        formattedUserName={formattedUserName}
        isFollowing
        userName="midudev"
        name="Miguel Ángel Durán"
      />

      <TwitterFollowCard
        formattedUserName={formattedUserName}
        isFollowing={false}
        userName="Florentin_Tomi"
        name="Florentin Tomas"
      />

      <TwitterFollowCard
        formattedUserName={formattedUserName}
        isFollowing
        userName="vxnder"
        name="Vanderhart"
      />
      
    </section>
  )
}
