<script>
  const name = 'Zaheer Abzal';
  const year = new Date().getFullYear();

  // Update these URLs when the Blog and Projects pages exist.
  const links = [
    { label: 'Blog', href: 'https://medium.com/@zaheerabzal' },
    { label: 'Projects', href: 'https://github.com/Sofcase' },
    { label: 'Profile', href: 'https://www.linkedin.com/in/zaheerabzal/' },
  ];
</script>

<header class="nav">
  <a class="logo" href="./">{name}</a>
</header>

<main class="hero">
  <div class="intro">
    <h1>{name}</h1>
    <div class="tagline">
      <p class="role">Product &amp; Engineering Leader</p>
      <p class="summary">Delivering at the intersection of software, product thinking, and AI.</p>
    </div>
    <nav class="links" aria-label="Primary">
      {#each links as link}
        <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
      {/each}
    </nav>
  </div>
  <div class="photo">
    <img src="./profile.jpg" alt="Portrait of Zaheer Abzal" />
  </div>
</main>

<footer class="copyright">
  <p>&copy; {year} {name}. All rights reserved.</p>
</footer>

<style>
  .nav {
    display: flex;
    align-items: center;
    padding: 1.25rem 2rem;
    border-bottom: 1px solid var(--border);
  }

  .logo {
    font-weight: 600;
    font-size: 1.05rem;
    text-decoration: none;
    letter-spacing: 0.01em;
  }

  .hero {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    min-height: calc(100vh - 12rem);
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  .intro {
    display: grid;
    justify-self: start;
  }

  .tagline {
    width: 0;
    min-width: 100%;
    margin: 1rem 0 0;
  }

  .role {
    margin: 0;
    padding-top: 0.6rem;
    position: relative;
    color: var(--fg);
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .role::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 3px;
    background: #ffd700;
  }

  .summary {
    margin: 0.35rem 0 0;
    color: var(--muted);
    font-size: 1rem;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2rem;
  }

  .links a {
    padding: 0.7rem 1.6rem;
    border: 1px solid var(--fg);
    border-radius: 999px;
    font-size: 0.95rem;
    text-decoration: none;
    transition:
      background 0.15s ease,
      color 0.15s ease;
  }

  .links a:hover,
  .links a:focus-visible {
    background: #ffd700;
    border-color: #ffd700;
    color: var(--fg);
    outline: none;
  }

  .photo {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  .photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid var(--border);
    filter: grayscale(100%);
  }

  @media (max-width: 720px) {
    .hero {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }

    .intro {
      justify-self: center;
    }

    .links {
      justify-content: center;
    }
  }

  .copyright {
    padding: 1.5rem 2rem;
    border-top: 1px solid var(--border);
    text-align: center;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .copyright p {
    margin: 0;
  }
</style>
