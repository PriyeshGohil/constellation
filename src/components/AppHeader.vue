<template>
  <div>
    <header class="header">
      <div v-on:click='toggleMenu' class="header__menuIcon"><i class="fa fa-bars" aria-hidden="true"></i></div>
      <div class="header__search"><i class="fa fa-search" aria-hidden="true"></i>search...</div>
    </header>
    
    <transition name='slide-menu'>
      <div  v-show="showMenu" class='menu-wrapper'>
        <div class="menu__exit"><i v-on:click='toggleMenu' class="fa fa-times" aria-hidden="true"></i></div>
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
  </div>
</template>

<script>
export default {
  data() {
      return {
        showMenu: false
      }
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style>

</style>
