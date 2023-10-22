import Album from "./Album";

const Albums = ({albums, category}) => {
    return (
      <section className="app__category-container">
        <h2>{category}</h2>
        <ul className="albums-grid">
          {albums.map((album) => (
            <Album key={album.id} album={album}/>
          ))}
        </ul>
      </section>
    );
}

export default Albums