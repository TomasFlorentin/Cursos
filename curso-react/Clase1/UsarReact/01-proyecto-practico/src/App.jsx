// Aca vamos a crear los componentes
import './App.css'
export function App () {
    return (
        <article className='tw-followCard'> 
        {/* Si se quiere utilizar un selector de clase hay que usar className ya que class es una variable reservada en js */}
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                src="https://pbs.twimg.com/profile_images/1798564167156170752/ioDd_qsX_normal.jpg" alt="La imagen de Enzo Fernandez" />
                <div className='tw-followCard-info'>
                    <strong>Enzo Fernández</strong>
                    <span className='tw-followCard-infoUserName'>@enzofernandez</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}