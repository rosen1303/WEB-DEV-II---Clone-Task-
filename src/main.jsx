import React from 'react';
import { createRoot } from 'react-dom/client';
import content from './content.json';
import './styles.css';
import logo from '../assets/logo.svg';
import portrait from '../assets/profile_picture.jpg';
import featuredAlbum from '../assets/all-encores.jpg';
import articulation from '../assets/articulation.jpg';
import blurred from '../assets/blurred.jpg';
import evolution from '../assets/eulogy-for-evolution.jpg';
import theCell from '../assets/the-cell.jpg';
import facebook from '../assets/facebook-icon.png';
import instagram from '../assets/instagram-icon.svg';
import twitter from '../assets/twitter-icon.svg';

const navigation = [
  { label: 'Our Blog', href: '#blog' },
  { label: 'Our Artists', href: '#artists' },
  { label: 'Our Story', href: '#author' }
];

// Reusable navigation used in the header and footer toghether.
function Navigation({ label }) {
  return <nav aria-label={label} className="navigation">
    {navigation.map(item => <a key={item.label} href={item.href}>{item.label}</a>)}
  </nav>;
}
// Displays social links vertically or horizontally depending on the prop.
function SocialLinks({ vertical = false }) {
  const socialLinks = [
    { name: 'Facebook', image: facebook, url: 'https://www.facebook.com/' },
    { name: 'Instagram', image: instagram, url: 'https://www.instagram.com/' },
    { name: 'Twitter', image: twitter, url: 'https://twitter.com/' }
  ];
  return <ul className={`social-links${vertical ? ' social-links--vertical' : ''}`} aria-label="Social media">
    {socialLinks.map(social => <li key={social.name}>
      <a href={social.url} aria-label={social.name}>
        <img src={social.image} alt="" width="50" height="50" />
      </a>
    </li>)}
  </ul>;
}
// Displays the site logo and main navigation.
function Header() {
  return <header className="site-header">
    <a className="logo-link" href="#blog" aria-label="Erased Tapes blog">
      <img className="logo" src={logo} alt="Erased Tapes" width="200" height="200" />
    </a>
    <Navigation label="Main navigation" />
  </header>;
}
// Displays the article title, introduction and flowing text columns.
function BlogArticle() {
  return <article className="article-copy" aria-labelledby="article-title">
    <h1 id="article-title"><span className="title-main">Erased Tapes:</span>
      <span className="title-subtitle">Exploring the Sonic Frontier</span>
    </h1>
    <p className="introduction">{content.intro}</p>
    {/* Columns flow continuously, matching the newspaper-style wireframe. */}
    <div className="article-columns">
      {content.sections.map((paragraphs, index) => <section key={index}>
        <h2>Heading</h2>
        {paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
      </section>)}
    </div>
  </article>;
}
// Displays the five album covers; CSS makes the first cover larger on desktop only.
function AlbumGallery() {
  const albums = [
    { name: 'All Encores', image: featuredAlbum },
    { name: 'Articulation', image: articulation },
    { name: 'Blurred', image: blurred },
    { name: 'Eulogy for Evolution', image: evolution },
    { name: 'The Cell', image: theCell }
  ];
  // The first image receives a class that lets it span extra grid cells.
  return <section id="artists" className="album-gallery" aria-label="Featured album artwork">
    {albums.map((album, index) => <img key={album.name}
      className={index === 0 ? 'album-featured' : undefined}
      src={album.image} alt={`${album.name} album cover`} loading="lazy" />)}
  </section>;
}
// Displays the author's biography, portrait and reusable social links facebook,instagram and X.
function Author() {
  return <section id="author" className="author" aria-labelledby="author-heading">
    <div className="author-copy"><h2 id="author-heading">The Author</h2><p>{content.author}</p></div>
    <img className="author-photo" src={portrait} alt="Portrait of the blog author" width="200" height="200" loading="lazy" />
    <SocialLinks vertical />
  </section>;
}
// Creates a comment entry for each item in the supplied comments data.
function Comments() {
  return <section className="comments" aria-labelledby="comments-heading">
    <h2 id="comments-heading">Comments</h2>
    {content.comments.map(comment => <article className="comment" key={comment.name}>
      <h3>{comment.name}</h3><p>{comment.text}</p>
    </article>)}
  </section>;
}
// Reuses the navigation and social links in the page footer.
function Footer() {
  return <footer className="site-footer">
    <div className="footer-inner"><Navigation label="Footer navigation" />
      <p>Copyright © 2023 Erased Disks Ltd.</p><SocialLinks />
    </div>
  </footer>;
}
// Combines the page sections and provides a skip link for keyboard users.
function App() {
  return <><a className="skip-link" href="#blog">Skip to article</a><Header />
    <main id="blog" className="page-content"><BlogArticle /><AlbumGallery /><Author /><Comments /></main>
    <Footer /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
