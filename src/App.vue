<template>
  <div id="app">
    <router-link to="/">
      <div class="nav p-3 pointer">
        <img class="logo navbar-brand mr-0" src="./assets/logo.svg" />
        <img class="logo-text my-auto" src="./assets/github.png" />
      </div>
    </router-link>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");

$accent: #2980b9;
$text-color: #2c3e50;
$white: #ffffff;

html,
body {
  font-family: "Montserrat", sans-serif;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
}

//custom scrollbar
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: $white;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: $white;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

//common classes
.pointer {
  cursor: pointer;
}
.backbtn-text {
  font-size: 20px;
}
.page-link:disabled {
  background: lightgray;
  color: white;
  &:hover {
    background: lightgray;
    color: white;
  }
}
.scroll {
  overflow: scroll;
  height: 75vh;
  overflow-x: hidden;
}
.scroll-short {
  overflow: scroll;
  height: 65vh;
  overflow-x: hidden;
}
//navbar
.logo {
  float: left;
  height: 51px;
  margin: 0;
}
.logo-text {
  height: 24px;
}

.desktop-hide{
  display: none;
}
//card
.card-container {
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  background-color: $accent;
  cursor: pointer;
  &:hover {
    background-color: #3498db;
  }
}
.user-image {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-left: 30px;
  align-self: center;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.selected-image {
  height: 36px;
  align-self: center;
  margin-left: auto;
}
.repo-name {
  cursor: pointer;
  &:hover {
    color: $accent;
  }
}
//homepage
.list-container {
  height: 86vh;
  overflow: scroll;
  overflow-x: hidden;
}

//repo card
.repo-img {
  height: 25px;
}

.card-description {
  text-decoration: none !important;
  color: $text-color;
  &:hover {
    text-decoration: none !important;
  }
}

.deco-none {
  &:hover {
    text-decoration: none;
  }
}

//erro page
.area-container {
  position: relative;
  display: block;
  height: 500px;
  width: 100%;
  margin: 10px;
}
.content-container {
  position: absolute;
  top: 30%;
  width: 100%;
  text-align: center;
}

//content page
.content {
  font-size: 15px;
  white-space: pre-wrap;
  padding: 1.5rem 0.5rem ;
}
.download-image {
  height: 20px;
}
code {
  font-weight: bold;
}
//commit container
.commit-container{
  width: 75%;
}
//media query
@media screen and (max-width: 480px) {
  .desktop-hide{
    display: block;
  }
  .user-image{
    margin-left: 10px !important;
  }
  .commit-container{
    width: 80%;
  }
}
</style>
