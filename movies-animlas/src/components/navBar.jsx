import React from 'react';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-§-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
         < div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="/movies">Movies</a>
        <a class="nav-link" href="/animals">Animals</a>
        <a class="nav-link" href="#">add Animals</a>
        <a class="nav-link" href="#">add Movie</a>  
      </div>
    </div>
  </div>
</nav>
    );
}

export default NavBar;
