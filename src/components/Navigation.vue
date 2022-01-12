<template>
  <div class="navigation">
    
    <div class="logo">
      <div class="image">
      <router-link to="/"><img src="../assets/logo.png" alt=""></router-link>
      </div>
      <div class="bars"><i class="fa fa-bars"></i></div>
    </div>

    <div class="nav">
      <ul>
        <li><router-link to="/" class="link">Home</router-link></li>
        <li><router-link to="Services" class="link">Services</router-link></li>
        <li><router-link to="About" class="link">About Us</router-link></li>
        <li><router-link to="Contact" class="link">Contact Us</router-link></li>

        <li  id="abroad-link"><router-link to="" class="link">Study Abroad <i class="fa fa-angle-double-down"></i></router-link>
        
        <ul class="sub-link">
<li><router-link to="poland" class="link">Study in Poland</router-link></li><br>
        <li><router-link to="Usa" class="link">Study in USA</router-link></li><br>
        <li><router-link to="Cananda" class="link">Study in Canada</router-link></li><br>
        <li><router-link to="OtherUniversities" class="link">Other universties</router-link></li><br>          
        </ul>
        </li>
  
        <li><router-link to="Gallery" class="link">Gallery</router-link></li>
        <li><router-link to="Event" class="link">Events</router-link></li>
      </ul> 
    </div>

  </div>
</template>

<script>
export default {
  mounted(){
    var bars = document.querySelector('.bars');
    var nav = document.querySelector('.nav');
    bars.addEventListener('click', function(){
      nav.classList.toggle('nav-active');
    });
    


  }
}
</script>

<style scopred>
.navigation{
  display: flex;
  justify-content: space-between;
  background: #0c1f3e;
  
  
}
.navigation .logo img{
  width: 50%;
  margin-left: 4vh;
}
.nav ul{
  display: flex;
  z-index: 1;
}
.nav ul li{
  list-style: none;
}
.nav ul .link{
  text-decoration: none;
  padding: 10px;
  color: white;
}
.bars{
    color: aliceblue;
}
.nav ul{
  padding: 3vh;
}

.bars{
  display: none;
}

.sub-link{
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 0;
  background: #d8172e;
  transition: 1s ease-in;
  margin-top: 3vh;
}
 #abroad-link:hover> .sub-link {
  opacity: 1;
 }

@media screen and (max-width: 780px) {
  .navigation{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #0c1f3e;

}
.bars{
  display: block;
  color: white;
  font-size: 30px;
  margin-right: 2vh;
}
.logo{
  display: flex;
  justify-content: space-between;
}
.nav ul{
  padding: 1vh;
  display: flex;
  flex-direction: column;
}
.nav{
  display: none;
}
.nav-active{
  display: block;
}

.nav ul .link{
  display: flex;
  justify-content: center;
}

.sub-link li{
    color: blue;
}
.sub-link{
  display: flex;
  flex-direction: column;
  opacity: 1;
  background: #d8172e;
  transition: 1s ease-in;
}
#abroad-link:hover> .sub-link {
  opacity: 1;
}
.sub-link{
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 0;
  background: #d8172e;
  transition: 1s ease-in;
  margin-top: 3vh;
}
.fa-angle-double-down{
  opacity: 0;
}
.navigation .logo img{
  width: 50%;
  margin-left: 2vh;
}

}
</style>