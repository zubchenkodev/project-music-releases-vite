import Playlist from "./Playlist";



const Playlists = ({playlists}) => {
    return (
      <section className="app__playlists-container">
        <h2>Playlists</h2>
        <ul className="playlists-grid">
          {playlists.map((playlist) => (
             <Playlist playlist={playlist} key={playlist.id}/>
          ))}
        </ul>
      </section>
    );
}

export default Playlists