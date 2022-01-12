<template>
  <div class="university">
      <div><img src="../assets/cape.jpg" alt=""></div>
      <div><img src="../assets/fologo.png" alt=""></div>
      <div><img src="../assets/florida.jpg" alt=""></div>
      <div><img src="../assets/kings.jpg" alt=""></div>
      <div><img src="../assets/lazar.jpg" alt=""></div>
      <div><img src="../assets/nest.png" alt=""></div>
      <div><img src="../assets/pacific.png" alt=""></div>
  </div>
</template>

<script>
export default {
    mounted(){
        $('.university').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
    }
}
</script>

<style>
.university{
    max-width: 80%;
    margin-top: 20px;
}
.university div img{
   width: 140px;
   height: 60px;
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red
}
@media(max-width: 500px){
.university{
    max-width: 100%;
    margin-top: 0px;
    margin-left: -10vh;
}
.university div img{
   width: 70px;
   height: 40px;
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red
}   
}
@media(max-width: 414px){
 .university{
    max-width: 80%;
    /* margin-top: 20px; */
    margin-left: 5vh;
}
.university div img{
   width: 70px;
   height: 40px;
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red
}   
}
@media(max-width: 411px){
.university{
    max-width: 100%;
    margin-top: 0px;
    margin-left: -10vh;
}
.university div img{
   width: 70px;
   height: 40px;
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red
}   
}
@media(max-width: 375px){
 .university{
    max-width: 100%;
    margin-top: 0px;
    margin-left: 0vh;
}
.university div img{
   width: 70px;
   height: 40px;
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red
}   
}
@media(max-width: 360px){
 .university{
    max-width: 100%;
    margin-top: 20px;
    margin-left: 0vh;
}
.university div img{
   width: 70px;
   height: 40px;
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red
}   
}
@media(max-width: 320px){
 .university{
    max-width: 80%;
    margin-top: 20px;
    margin-left: 3vh;
}
.university div img{
   width: 70px;
   height: 30px;
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red;
}   
}

</style>