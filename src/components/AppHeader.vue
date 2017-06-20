<template>
  <div>
    <header class="header">
      <div v-on:click='toggle("showMenu")' class="header__menuIcon"><i class="fa fa-bars" aria-hidden="true"></i></div>
      <div v-on:click='toggle("showSearch")' class="header__search"><i class="fa fa-search" aria-hidden="true"></i>search...</div>
      <div>
        <span v-if='userId' span>User: {{userId}} </span>
        <span v-else>Not Logged In</span>
        </div>
    </header>
    
    <transition name='slide-menu'>
      <div  v-show="showMenu" class='menu-wrapper'>
        <div class="menu__exit"><i v-on:click='toggle("showMenu")' class="fa fa-times" aria-hidden="true"></i></div>
        <div class="menuSection">
          <h2 class="menuSection__heading">Hello.</h2>
          <p class="menuSection__txt">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
          <p class="menuSection__txt">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
          
          <div class="social">
            <a class="social__icon"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
            <a class="social__icon"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            <a class="social__icon"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a class="social__icon"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
        
        <nav class="menu">
          <a class="menu__item">Home</a>
          <a class="menu__item">Posts</a>
          <a class="menu__item">Gallery</a>
          <a class="menu__item">Contact</a>
        </nav>
      </div>
    </transition>
    <!--maybe I should move this out into its own component-->
    <div v-show="showSearch" class="search-wrapper">
      <div class="search__close"><i v-on:click='toggle("showSearch")' class="fa fa-times" aria-hidden="true"></i></div>
      
      <div class="search">
        <div class="search__input">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type='text' placeholder="Type something..."/>
        </div>
        <ul class="search__results">
          <li><a href='#'>Blog 1</a></li>
          <li><a href='#'>Blog 2</a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['userId'],

  data() {
      return {
        showMenu: false,
        showSearch: false
      }
  },

  methods: {
    toggle(elName) {
      this[elName] = !this[elName];
    }
  }
}
</script>

<style>

</style>
