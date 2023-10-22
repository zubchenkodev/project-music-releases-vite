import Albums from "./Albums";
import Header from "./Header";
import Playlists from "./Playlists";

import data from "./data.json";
import dataStreched from "./stretched-goal.json";

const albums = data.albums.items.filter((item) => item.album_type === 'album');

const singles = data.albums.items.filter((item) => item.album_type === 'single');

const playlists = dataStreched.playlists.items;

export const App = () => {
  return (
    <div className="app">
        <div className="app__container">
          <Header/>
          <div className="app__content">
          <aside className="playlists">
            <Playlists playlists={playlists}/>
          </aside>
          <main className="albums">
            <Albums albums={albums} category={'Albums'}/>
            <Albums albums={singles} category={'Singles'}/>
          </main>
        </div>
        </div>
    </div>
  );
};











