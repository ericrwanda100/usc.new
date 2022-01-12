<template>
  <div class="about">
    <div class="about-one">
      <div class="about-two" data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
      <p>A few words</p>
      <h1>About us</h1>
      
      </div>
    </div>

    <div class="text-body">
      
      <div class="text">
      <p>USC is an international education consulting firm that represents different universities, 
        colleges and schools around the worlds. USC works closely with universities, colleges and 
        partners across the globe especially from develop countries mainly in Europe, Canada, Australia,
         its core responsibility is to play an intermediate role that builds bridge between African 
         dreamers (students from Africa) whom their dream is to pursue affordable and quality education 
         from world-class universities and colleges from developed countries. In the other hand, USC
          assists international researchers to conduct research in Africa. We believe in the power of 
          education and the potential of every student. We believe every positive changes starts in 
          education footstep. Working with families, education institution partners, supporters, we 
          strive to ensure every dreamer get his dream coming reality. We have been building powerful
           partnerships for students for over 6 years and are now active worldwide.</p>
    </div>
    <br><br><br>
  </div>
  <div class="mission">
    <div>
      <h1 id="vision">OUR VISION</h1>
      <p>We are commited to enhonce scholars and parent's exceptional experience in quality service
       of overseas education as we create value for our stakeholders and partners".</p></div>
    <div>
      <h1>OUR MISSION</h1>
      <p>ecoming referral agent in terms of quality service and best recruitment agency in the region".</p></div>
      <div>
        <h1>OUR OBJECTIVES</h1>
        <p>Linking young scholars to the most affordable and quality schools and
colleges around the world.</p>
      </div>

  </div>
  <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'



export default{
  components: {
    Footer,
    

  },
  mounted(){

    }

}
</script>

<style>
.about-one{
  background: #0c1f3e;
  width: 100%;
}

.about-two h1{
  font-size: 100px;
  text-align: center;
  color: white;
  padding-bottom: 10vh;
}
.about-two p{
  font-size: 30px;
  text-align: center;
  font-weight: 300;
  color: white;

}
.about-two{
  padding-top: 80px;
}
.text-body p{
  padding-left: 40vh;
  padding-right: 40vh;
  padding-top: 10vh;
  font-size: 16px;
  opacity: 1;
  color: white;
  text-align: justify;
  font-weight: 300;
}
.text-body .image img{
  width: 100%;
  opacity: 0.7;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.about{
  background-image: url('../assets/31.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100%;
}
.mission{
  display: grid;
  grid-template-columns: 30% 30% 30%;
  column-gap: 3%;
  padding-left: 10vh;
  padding-right: 10vh;
  background-image: linear-gradient(to right, #d4d6d7 , #ebecec);
  width: 100%;
  padding-top: 10vh;
  padding-bottom: 10vh;
}
.mission p{
  font-size: 16px;
  opacity: 0.8;
}
@media(max-width: 820px){

 .about-one{
  background: #0c1f3e;
  width: 100%;
}

.about-two h1{
  font-size: 60px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.about-two p{
  font-size: 30px;
  text-align: center;
  font-weight: 300;
  color: white;

}
.about-two{
  padding-top: 10px;
}
.text-body p{
  padding-left: 10vh;
  padding-right: 10vh;
  padding-top: 10vh;
  font-size: 16px;
  opacity: 1;
  color: white;
  text-align: justify;
  font-weight: 300;
}
.text-body .image img{
  width: 100%;
  opacity: 0.7;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.about{
  background-image: url('../assets/31.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100%;
}
.mission{
  display: grid;
  grid-template-columns: 30% 30% 30%;
  column-gap: 3%;
  padding-left: 10vh;
  padding-right: 10vh;
  background-image: linear-gradient(to right, #d4d6d7 , #ebecec);
  width: 100%;
  padding-top: 10vh;
  padding-bottom: 10vh;
}
.mission p{
  font-size: 16px;
  opacity: 0.8;
}
.mission h1{
  font-size: 22px;
}
}

@media(max-width: 620px){

 .about-one{
  background: #0c1f3e;
  width: 100%;
}

.about-two h1{
  font-size: 40px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.about-two p{
  font-size: 15px;
  text-align: center;
  font-weight: 300;
  color: white;

}
.about-two{
  padding-top: 10px;
}
.text-body p{
  padding-left: 5vh;
  padding-right: 5vh;
  padding-top: 10vh;
  font-size: 16px;
  opacity: 1;
  color: white;
  text-align: justify;
  font-weight: 300;
}
.text-body .image img{
  width: 100%;
  opacity: 0.7;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.about{
  background-image: url('../assets/31.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 130%;
}
.mission{
  display: grid;
  grid-template-columns: 40% 25% 33%;
  column-gap: 3%;
  padding-left: 5vh;
  padding-right: 5vh;
  background-image: linear-gradient(to right, #d4d6d7 , #ebecec);
  width: 100%;
  padding-top: 5vh;
  padding-bottom: 5vh;
}
.mission p{
  font-size: 16px;
  opacity: 0.8;
}
.mission h1{
  font-size: 18px;
}
}
@media(max-width: 583px){

 .about-one{
  background: #0c1f3e;
  width: 100%;
}

.about-two h1{
  font-size: 40px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.about-two p{
  font-size: 15px;
  text-align: center;
  font-weight: 300;
  color: white;

}
.about-two{
  padding-top: 10px;
}
.text-body p{
  padding-left: 5vh;
  padding-right: 5vh;
  padding-top: 10vh;
  font-size: 16px;
  opacity: 1;
  color: white;
  text-align: justify;
  font-weight: 300;
}
.text-body .image img{
  width: 100%;
  opacity: 0.7;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.about{
  background-image: url('../assets/31.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 150%;
}
.mission{
  display: grid;
  grid-template-columns: 40% 25% 33%;
  column-gap: 3%;
  padding-left: 5vh;
  padding-right: 5vh;
  background-image: linear-gradient(to right, #d4d6d7 , #ebecec);
  width: 100%;
  padding-top: 5vh;
  padding-bottom: 5vh;
}
.mission p{
  font-size: 16px;
  opacity: 0.8;
}
.mission h1{
  font-size: 18px;
}
}
@media(max-width: 505px){

 .about-one{
  background: #0c1f3e;
  width: 100%;
}

.about-two h1{
  font-size: 40px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.about-two p{
  font-size: 15px;
  text-align: center;
  font-weight: 300;
  color: white;

}
.about-two{
  padding-top: 10px;
}
.text-body p{
  padding-left: 5vh;
  padding-right: 5vh;
  padding-top: 10vh;
  font-size: 16px;
  opacity: 1;
  color: white;
  text-align: justify;
  font-weight: 300;
}
.text-body .image img{
  width: 100%;
  opacity: 0.7;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.about{
  background-image: url('../assets/31.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 170%;
}
.mission{
  display: grid;
  grid-template-columns: 40% 25% 33%;
  column-gap: 3%;
  padding-left: 5vh;
  padding-right: 5vh;
  background-image: linear-gradient(to right, #d4d6d7 , #ebecec);
  width: 100%;
  padding-top: 5vh;
  padding-bottom: 5vh;
}
.mission p{
  font-size: 16px;
  opacity: 0.8;
}
.mission h1{
  font-size: 18px;
}
}
@media(max-width: 446px){

 .about-one{
  background: #0c1f3e;
  width: 100%;
}

.about-two h1{
  font-size: 40px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.about-two p{
  font-size: 15px;
  text-align: center;
  font-weight: 300;
  color: white;

}
.about-two{
  padding-top: 10px;
}
.text-body p{
  padding-left: 3vh;
  padding-right: 3vh;
  padding-top: 5vh;
  font-size: 16px;
  opacity: 1;
  color: white;
  text-align: justify;
  font-weight: 300;
}
.text-body .image img{
  width: 100%;
  opacity: 0.7;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.about{
  background-image: url('../assets/31.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 190%;
}
.mission{
  display: grid;
  grid-template-columns: 40% 25% 33%;
  column-gap: 3%;
  padding-left: 3vh;
  padding-right: 3vh;
  background-image: linear-gradient(to right, #d4d6d7 , #ebecec);
  width: 100%;
  padding-top: 3vh;
  padding-bottom: 3vh;
}
.mission p{
  font-size: 16px;
  opacity: 0.8;
}
.mission h1{
  font-size: 18px;
}
}
@media(max-width: 399px){

 .about-one{
  background: #0c1f3e;
  width: 100%;
}

.about-two h1{
  font-size: 40px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.about-two p{
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  color: white;

}
.about-two{
  padding-top: 10px;
}
.text-body p{
  padding-left: 2vh;
  padding-right: 2vh;
  padding-top: 4vh;
  font-size: 16px;
  opacity: 1;
  color: white;
  text-align: justify;
  font-weight: 300;
}
.text-body .image img{
  width: 100%;
  opacity: 0.7;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.about{
  background-image: url('../assets/31.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 240%;
}
.mission{
  display: grid;
  grid-template-columns: 40% 25% 33%;
  column-gap: 3%;
  padding-left: 2vh;
  padding-right: 2vh;
  background-image: linear-gradient(to right, #d4d6d7 , #ebecec);
  width: 100%;
  padding-top: 2vh;
  padding-bottom: 2vh;
}
.mission p{
  font-size: 16px;
  opacity: 0.8;
}
.mission h1{
  font-size: 14px;
}
}
@media(max-width: 332px){

 .about-one{
  background: #0c1f3e;
  width: 100%;
}

.about-two h1{
  font-size: 40px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.about-two p{
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  color: white;

}
.about-two{
  padding-top: 10px;
}
.text-body p{
  padding-left: 2vh;
  padding-right: 2vh;
  padding-top: 4vh;
  font-size: 15px;
  opacity: 1;
  color: white;
  text-align: justify;
  font-weight: 300;
}
.text-body .image img{
  width: 100%;
  opacity: 0.7;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.about{
  background-image: url('../assets/31.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 280%;
}
.mission{
  display: grid;
  grid-template-columns: 40% 25% 33%;
  column-gap: 3%;
  padding-left: 2vh;
  padding-right: 2vh;
  background-image: linear-gradient(to right, #d4d6d7 , #ebecec);
  width: 100%;
  padding-top: 2vh;
  padding-bottom: 2vh;
}
.mission p{
  font-size: 16px;
  opacity: 0.8;
}
.mission h1{
  font-size: 14px;
}
}


</style>






