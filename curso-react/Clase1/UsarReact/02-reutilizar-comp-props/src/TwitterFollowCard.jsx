//! Importante Las props deben de ser inmutables
//* En caso de modificarlos, se debería de crear una nueva variable y modificarlo ahí
export function TwitterFollowCard ({ formattedUserName, userName, name, isFollowing }) {

    return (
        <article className='tw-followCard'> {/* Si se quiere utilizar un selector de clase hay que usar className ya que class es una variable reservada en js */}
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${userName}`} // Creo el template string
                alt="La imagen de Enzo Fernandez" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>
                        {formattedUserName}
                    </span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}