import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import movies from './movies.json';
import './styles.css';
import roger from '../assets/who-framed-roger-rabbit.jpg';
import hook from '../assets/hook.jpg';
import laLaLand from '../assets/la-la-land.jpg';
import hiddenFigures from '../assets/hidden-figures.jpg';
import palmSprings from '../assets/palm-springs.jpg';
import barbie from '../assets/barbie.jpg';

// This Matches each film in movies.json with its imported poster image.
const artwork = [roger, hook, laLaLand, hiddenFigures, palmSprings, barbie];

// Display the logo, genre navigation and search button.
function Header({ onSearch }) {
  return <header className="site-header">
    <h1 className="brand"><a href="#movies">watch.it</a></h1>
    <nav className="genres" aria-label="Movie genres">
      <a href="#movie-hook">Action</a>
      <a href="#movie-who-framed-roger-rabbit">Comedy</a>
      <a href="#movie-la-la-land">Romance</a>
      <a href="#movie-hidden-figures">Drama</a>
    </nav>
    <button className="search-button" onClick={onSearch}>Search</button>
  </header>;
}

// One reusable card keeps the six films consistent at every point.
function MovieCard({ movie, index, onWatch }) {
  return <article className={`movie-card movie-card--${index + 1}`}
    id={`movie-${movie.id}`} aria-label={movie.title}>
    <img className="movie-art" src={artwork[index]} alt={`${movie.title} promotional artwork`}
      loading={index === 0 ? 'eager' : 'lazy'} />
    <div className="movie-copy">
      <h2 className="movie-title">{movie.title}</h2>
      <p>{movie.description}</p>
      <button className="watch-button" onClick={() => onWatch(movie)}
        aria-label={`Watch now: ${movie.title}`}>Watch<span className="watch-word"> now</span></button>
    </div>
  </article>;
}
// Display the movie collection and manage the search.
function App() {
  const searchDialog = useRef(null);
  const watchDialog = useRef(null);
  const [query, setQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const matches = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase().trim()));

  function openMovie(movie) {
    setSelectedMovie(movie);
    watchDialog.current.showModal();
  }

  return <>
    <a className="skip-link" href="#movies">Skip to movies</a>
    <Header onSearch={() => searchDialog.current.showModal()} />
    <main className="movie-grid" id="movies" aria-label="Movie collection">
      {movies.map((movie, index) => <MovieCard key={movie.id} movie={movie}
        index={index} onWatch={openMovie} />)}
    </main>

    {/* Native dialogs provide Escape-to-close and keep keyboard focus inside. */}
    <dialog ref={searchDialog} aria-labelledby="search-heading">
      <h2 id="search-heading">Find a movie</h2>
      <label htmlFor="movie-search">Search by title</label>
      <input id="movie-search" type="search" value={query}
        onChange={event => setQuery(event.target.value)} />
      <p role="status">{matches.length} {matches.length === 1 ? 'movie' : 'movies'} found</p>
      <ul className="search-results">{matches.map(movie => <li key={movie.id}>
        <a href={`#movie-${movie.id}`} onClick={() => searchDialog.current.close()}>{movie.title}</a>
      </li>)}</ul>
      <form method="dialog"><button>Close</button></form>
    </dialog>
    <dialog ref={watchDialog} aria-labelledby="watch-heading">
      <h2 id="watch-heading">{selectedMovie?.title}</h2>
      <p>This is a fictional streaming service created for a layout assessment.
        Video playback is not included.</p>
      <form method="dialog"><button>Close</button></form>
    </dialog>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
