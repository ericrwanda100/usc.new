<template>
  <div class="services-on">
      <div class="header">
          <div class="header-one"
          data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
          >
          <p>services we offer</p>
          <h1>Services</h1>
          </div>
      </div>


      <div class="services">
    <div class="services-one">

      <div class="services-one-one">
        <span><i class="fa fa-codepen"></i></span>
        <h4>School Orientation Program</h4>
        <p>It is one thing to have or wishing to study in any country, but how to choose 
            a school and a program that matches with student career aspirations and dream 
            is another crucial step; It is our core role to ensure students and their 
            families are assisted through this step; beyond that families are assisted 
            to know best, quality and affordable options that matches with the budgets.
             First forward service in the Ontario and Alberta Regions, USA (i20), 
             Poland As “Empathize” Our aim is to make the;</p>
        </div>

      <div class="services-one-two">
        <span><i class="fa fa-leanpub"></i></span>
        <h4>Online Education Consultancy</h4>
        <p>We believe some adults are busy working and taking care of their loved
             ones; some of them thinking on how they can upgrade their academic 
             standards as well as career advancement ; it is probably hard to 
             leave their current position fearing on losing your job? We partner
              with the best and affordable international schools with international
              accreditation that offer 
            degrees and diploma online. These degrees are considered and have 
            the same values as traditional on-campus ones </p>
        </div>
      <div class="services-one-three">
        <span><i class="fa fa-ioxhost"></i></span>
        <h4>Visa Application Center</h4>
        <p>We have officially launched Visa Application Center to facilitate all the
           individuals who would love to visit their loved ones, business meetings,
            trade and investment across the world.</p>

        </div>
        <div class="services-one-four">
        <span><i class="fa fa-binoculars"></i></span>
        <h4>Carreer Guidance Program</h4>
        <p>We believe education is should go beyond chalk and talk; we
             define education as homogeneous blend that involves every
              step of life how to live, how study how grow and ready to 
              do affective work. We train scholars how to exploit their
               potential in career paths.Our word is simple “If you choose
                to study go for extra mile; be extra ordinary person; choose to think big”</p>

        </div>
        <div class="services-one-five">
        <span><i class="fa fa-drivers-license"></i></span>
        <h4>Study Permit Visa advisory</h4>
        <p>This is one of the most challenging and stressing step but ” Remember
             we empathize “scholars and families sometimes think it’s impossible;
              we assist to know what the
            requirements are and make sure files are mistake free and submitted
             on timeliness. Your success is our success</p>

        </div>
        <div class="services-one-six">
        <span><i class="fa fa-money"></i></span>
        <h4>Business Consultancy</h4>
        <p>Our team and partners will ensure your projects and business are in the right. We believe in the diversity, our team is composed with diverse sets of skills and expertise’s (Professional Hoteliers, Certified Accountants, IT engineers, Investments advisors, University Teachers)</p>

        </div>
      
    </div>
    <br><br><br>

    
    
  </div>
<Footer />

  </div>
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
    data(){
        return{
            
        }
    },
    components: {
        Footer
    }
}
</script>

<style scoped>
.services-on .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 100px;
  text-align: center;
  color: white;
  padding-bottom: 10vh;
}
.header-one p{
     font-size: 30px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 80px;
}

.services{
  margin-left: -44px;
  padding-top: 50px;
  padding-left: 100px;
  padding-right: 100px;
}

   .services-one{
     display: grid;
     grid-template-columns: 33% 33% 33%;
     margin-left: 8vh;
   }
   .services-one-one span{
     font-size: 100px;
     margin-left: 20vh;
     font-weight: 300;
     opacity: 0.8;
     color: #0c1f3e;
   }
   .services-one-one h4{
     margin-left: 4vh;
     font-weight: 600;
     font-size: 20px;

   }
   .services-one-one p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 25px;
     text-align: justify;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-one button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 15px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-two span{
     font-size: 100px;
     margin-left: 18vh;
     font-weight:300;
     opacity: 0.8;
     color: #d8172e;
   }
   .services-one-two h4{
     margin-left: 2vh;
     font-size: 20px;
   }
   .services-one-two p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 20px;
     text-align: justify;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-two button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     color: white;
     border-color: #d8172e;
     margin-top: 20px;
   }
   
   .services-one-three span{
     font-size: 100px;
     font-weight: 300;
     margin-left: 15vh; 
     opacity: 0.8;  
     color: #0c1f3e; 

   }
   .services-one-three p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-three h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-three button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-four span{
     font-size: 100px;
     font-weight: 300;
     margin-left: 15vh; 
     opacity: 0.8;  
     color: #d8172e; 

   }
   .services-one-four p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-four h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-four button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-five span{
     font-size: 100px;
     font-weight: 300;
     margin-left: 15vh; 
     opacity: 0.8;   
     color: #0c1f3e;

   }
   .services-one-five p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-five h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-five button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-six span{
     font-size: 100px;
     font-weight: 300;
     margin-left: 15vh; 
     opacity: 0.8;   
     color: #d8172e;

   }
   .services-one-six p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-six h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-six button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one div{
       border: 4px solid #d8172e;
       margin-left: 20px;
       margin-bottom: 20px;
       padding: 0px;
       background: #10101021;
   }
   .services-one div:nth-child(even){
       border-color: #0c1f3e;
   }
@media(max-width: 920px) {
  .services-on .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 80px;
  text-align: center;
  color: white;
  padding-bottom: 3vh;
}
.header-one p{
     font-size: 25px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 80px;
}

.services{
  margin-left: -4vh;
  padding-top: 50px;
  padding-left: 1vh;
  padding-right: 1vh;
}

   .services-one{
     display: grid;
     grid-template-columns: 33% 33% 33%;
     margin-left: 8vh;
   }
   .services-one-one span{
     font-size: 100px;
     margin-left: 20vh;
     font-weight: 300;
     opacity: 0.8;
     color: #0c1f3e;
   }
   .services-one-one h4{
     margin-left: 4vh;
     font-weight: 600;
     font-size: 20px;

   }
   .services-one-one p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 25px;
     text-align: justify;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-one button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 15px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-two span{
     font-size: 100px;
     margin-left: 18vh;
     font-weight:300;
     opacity: 0.8;
     color: #d8172e;
   }
   .services-one-two h4{
     margin-left: 2vh;
     font-size: 20px;
   }
   .services-one-two p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 20px;
     text-align: justify;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-two button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     color: white;
     border-color: #d8172e;
     margin-top: 20px;
   }
   
   .services-one-three span{
     font-size: 100px;
     font-weight: 300;
     margin-left: 15vh; 
     opacity: 0.8;  
     color: #0c1f3e; 

   }
   .services-one-three p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-three h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-three button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-four span{
     font-size: 100px;
     font-weight: 300;
     margin-left: 15vh; 
     opacity: 0.8;  
     color: #d8172e; 

   }
   .services-one-four p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-four h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-four button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-five span{
     font-size: 100px;
     font-weight: 300;
     margin-left: 15vh; 
     opacity: 0.8;   
     color: #0c1f3e;

   }
   .services-one-five p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-five h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-five button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-six span{
     font-size: 100px;
     font-weight: 300;
     margin-left: 15vh; 
     opacity: 0.8;   
     color: #d8172e;

   }
   .services-one-six p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-six h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-six button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one div{
       border: 4px solid #d8172e;
       margin-left: 20px;
       margin-bottom: 20px;
       padding: 0px;
       background: #10101021;
   }
   .services-one div:nth-child(even){
       border-color: #0c1f3e;
   }
}
@media(max-width: 820px) {
  .services-on .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 80px;
  text-align: center;
  color: white;
  padding-bottom: 3vh;
}
.header-one p{
     font-size: 25px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 80px;
}

.services{
  margin-left: -4vh;
  padding-top: 50px;
  padding-left: 1vh;
  padding-right: 1vh;
}

   .services-one{
     display: grid;
     grid-template-columns: 33% 33% 33%;
     margin-left: 8vh;
   }
   .services-one-one span{
     font-size: 100px;
     margin-left: 15vh;
     font-weight: 300;
     opacity: 0.8;
     color: #0c1f3e;
   }
   .services-one-one h4{
     margin-left: 4vh;
     font-weight: 600;
     font-size: 20px;

   }
   .services-one-one p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 25px;
     text-align: justify;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-one button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 15px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-two span{
     font-size: 100px;
     margin-left: 10vh;
     font-weight:300;
     opacity: 0.8;
     color: #d8172e;
   }
   .services-one-two h4{
     margin-left: 2vh;
     font-size: 20px;
   }
   .services-one-two p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 20px;
     text-align: justify;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-two button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     color: white;
     border-color: #d8172e;
     margin-top: 20px;
   }
   
   .services-one-three span{
     font-size: 80px;
     font-weight: 300;
     margin-left: 10vh; 
     opacity: 0.8;  
     color: #0c1f3e; 

   }
   .services-one-three p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-three h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-three button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-four span{
     font-size: 80px;
     font-weight: 300;
     margin-left: 10vh; 
     opacity: 0.8;  
     color: #d8172e; 

   }
   .services-one-four p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-four h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-four button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-five span{
     font-size: 80px;
     font-weight: 300;
     margin-left: 10vh; 
     opacity: 0.8;   
     color: #0c1f3e;

   }
   .services-one-five p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-five h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-five button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-six span{
     font-size: 80px;
     font-weight: 300;
     margin-left: 10vh; 
     opacity: 0.8;   
     color: #d8172e;

   }
   .services-one-six p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 16px;
     font-weight: 300;
   }
   .services-one-six h4{
     margin-left: 4vh;
     font-size: 20px;
   }
   .services-one-six button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one div{
       border: 4px solid #d8172e;
       margin-left: 20px;
       margin-bottom: 20px;
       padding: 0px;
       background: #10101021;
   }
   .services-one div:nth-child(even){
       border-color: #0c1f3e;
   }
}
@media(max-width: 720px) {
  .services-on .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 80px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.header-one p{
     font-size: 25px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 40px;
}

.services{
  margin-left: 0vh;
  padding-top: 50px;
  padding-left: 0vh;
  padding-right: 0vh;
}

   .services-one{
     display: grid;
     grid-template-columns: 33% 33% 33%;
     margin-left: 0vh;
   }
   .services-one-one span{
     font-size: 60px;
     margin-left: 15vh;
     font-weight: 300;
     opacity: 0.8;
     color: #0c1f3e;
   }
   .services-one-one h4{
     margin-left: 4vh;
     font-weight: 600;
     font-size: 16px;

   }
   .services-one-one p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 25px;
     text-align: justify;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-one button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 15px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-two span{
     font-size: 60px;
     margin-left: 10vh;
     font-weight:300;
     opacity: 0.8;
     color: #d8172e;
   }
   .services-one-two h4{
     margin-left: 2vh;
     font-size: 16px;
   }
   .services-one-two p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 20px;
     text-align: justify;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-two button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     color: white;
     border-color: #d8172e;
     margin-top: 20px;
   }
   
   .services-one-three span{
     font-size: 60px;
     font-weight: 300;
     margin-left: 10vh; 
     opacity: 0.8;  
     color: #0c1f3e; 

   }
   .services-one-three p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-three h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-three button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-four span{
     font-size: 60px;
     font-weight: 300;
     margin-left: 10vh; 
     opacity: 0.8;  
     color: #d8172e; 

   }
   .services-one-four p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-four h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-four button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-five span{
     font-size: 60px;
     font-weight: 300;
     margin-left: 10vh; 
     opacity: 0.8;   
     color: #0c1f3e;

   }
   .services-one-five p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-five h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-five button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-six span{
     font-size: 60px;
     font-weight: 300;
     margin-left: 10vh; 
     opacity: 0.8;   
     color: #d8172e;

   }
   .services-one-six p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-six h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-six button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one div{
       border: 4px solid #d8172e;
       margin-left: 20px;
       margin-bottom: 20px;
       padding: 0px;
       background: #10101021;
   }
   .services-one div:nth-child(even){
       border-color: #0c1f3e;
   }
}

@media(max-width: 620px) {
  .services-on .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 80px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.header-one p{
     font-size: 25px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 40px;
}

.services{
  margin-left: 0vh;
  padding-top: 50px;
  padding-left: 0vh;
  padding-right: 0vh;
}

   .services-one{
     display: grid;
     grid-template-columns: 48% 48%;
     margin-left: 0vh;
   }
   .services-one-one span{
     font-size: 60px;
     margin-left: 22vh;
     font-weight: 300;
     opacity: 0.8;
     color: #0c1f3e;
   }
   .services-one-one h4{
     margin-left: 4vh;
     font-weight: 600;
     font-size: 16px;

   }
   .services-one-one p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 25px;
     text-align: justify;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-one button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 15px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-two span{
     font-size: 60px;
     margin-left: 22vh;
     font-weight:300;
     opacity: 0.8;
     color: #d8172e;
   }
   .services-one-two h4{
     margin-left: 2vh;
     font-size: 16px;
   }
   .services-one-two p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 20px;
     text-align: justify;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-two button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     color: white;
     border-color: #d8172e;
     margin-top: 20px;
   }
   
   .services-one-three span{
     font-size: 60px;
     font-weight: 300;
     margin-left: 20vh; 
     opacity: 0.8;  
     color: #0c1f3e; 

   }
   .services-one-three p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-three h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-three button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-four span{
     font-size: 60px;
     font-weight: 300;
     margin-left: 20vh; 
     opacity: 0.8;  
     color: #d8172e; 

   }
   .services-one-four p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-four h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-four button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-five span{
     font-size: 60px;
     font-weight: 300;
     margin-left: 20vh; 
     opacity: 0.8;   
     color: #0c1f3e;

   }
   .services-one-five p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-five h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-five button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-six span{
     font-size: 60px;
     font-weight: 300;
     margin-left: 20vh; 
     opacity: 0.8;   
     color: #d8172e;

   }
   .services-one-six p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-six h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-six button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one div{
       border: 4px solid #d8172e;
       margin-left: 20px;
       margin-bottom: 20px;
       padding: 0px;
       background: #10101021;
   }
   .services-one div:nth-child(even){
       border-color: #0c1f3e;
   }
}
@media(max-width: 420px) {
  .services-on .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 80px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.header-one p{
     font-size: 25px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 40px;
}

.services{
  margin-left: 0vh;
  padding-top: 50px;
  padding-left: 10vh;
  padding-right: 0vh;
}

   .services-one{
     display: grid;
     grid-template-columns: 80%;
     margin-left: 0vh;
   }
   .services-one-one span{
     font-size: 60px;
     display: flex;
     align-items: center;
     font-weight: 300;
     opacity: 0.8;
     color: #0c1f3e;
   }
   .services-one-one h4{
     margin-left: 4vh;
     font-weight: 600;
     font-size: 16px;

   }
   .services-one-one p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 25px;
     text-align: justify;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-one button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 15px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-two span{
     font-size: 60px;
    display: flex;
     align-items: center;
     font-weight:300;
     opacity: 0.8;
     color: #d8172e;
   }
   .services-one-two h4{
     margin-left: 2vh;
     font-size: 16px;
   }
   .services-one-two p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 20px;
     text-align: justify;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-two button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     color: white;
     border-color: #d8172e;
     margin-top: 20px;
   }
   
   .services-one-three span{
     font-size: 60px;
     font-weight: 300;
     display: flex;
     align-items: center; 
     opacity: 0.8;  
     color: #0c1f3e; 

   }
   .services-one-three p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-three h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-three button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-four span{
     font-size: 60px;
     font-weight: 300;
    display: flex;
     align-items: center;
     opacity: 0.8;  
     color: #d8172e; 

   }
   .services-one-four p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-four h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-four button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-five span{
     font-size: 60px;
     font-weight: 300;
    display: flex;
     align-items: center;
     opacity: 0.8;   
     color: #0c1f3e;

   }
   .services-one-five p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-five h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-five button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-six span{
     font-size: 60px;
     font-weight: 300;
     display: flex;
     align-items: center;
     display: flex;
     align-items: center;
     opacity: 0.8;   
     color: #d8172e;

   }
   .services-one-six p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-six h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-six button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one div{
       border: 4px solid #d8172e;
       margin-left: 20px;
       margin-bottom: 20px;
       padding: 0px;
       background: #10101021;
   }
   .services-one div:nth-child(even){
       border-color: #0c1f3e;
   }
}
 @media(max-width: 360px) {
  .services-on .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 70px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.header-one p{
     font-size: 25px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 40px;
}

.services{
  margin-left: 0vh;
  padding-top: 50px;
  padding-left: 0vh;
  padding-right: 0vh;
}

   .services-one{
     display: grid;
     grid-template-columns: 90%;
     margin-left: 0vh;
   }
   .services-one-one span{
     font-size: 60px;
     display: flex;
     align-items: center;
     font-weight: 300;
     opacity: 0.8;
     color: #0c1f3e;
   }
   .services-one-one h4{
     margin-left: 4vh;
     font-weight: 600;
     font-size: 16px;

   }
   .services-one-one p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 25px;
     text-align: justify;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-one button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 15px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-two span{
     font-size: 60px;
    display: flex;
     align-items: center;
     font-weight:300;
     opacity: 0.8;
     color: #d8172e;
   }
   .services-one-two h4{
     margin-left: 2vh;
     font-size: 16px;
   }
   .services-one-two p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 20px;
     text-align: justify;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-two button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     color: white;
     border-color: #d8172e;
     margin-top: 20px;
   }
   
   .services-one-three span{
     font-size: 60px;
     font-weight: 300;
     display: flex;
     align-items: center; 
     opacity: 0.8;  
     color: #0c1f3e; 

   }
   .services-one-three p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-three h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-three button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-four span{
     font-size: 60px;
     font-weight: 300;
    display: flex;
     align-items: center;
     opacity: 0.8;  
     color: #d8172e; 

   }
   .services-one-four p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-four h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-four button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-five span{
     font-size: 60px;
     font-weight: 300;
    display: flex;
     align-items: center;
     opacity: 0.8;   
     color: #0c1f3e;

   }
   .services-one-five p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-five h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-five button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-six span{
     font-size: 60px;
     font-weight: 300;
     display: flex;
     align-items: center;
     display: flex;
     align-items: center;
     opacity: 0.8;   
     color: #d8172e;

   }
   .services-one-six p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-six h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-six button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one div{
       border: 4px solid #d8172e;
       margin-left: 20px;
       margin-bottom: 20px;
       padding: 0px;
       background: #10101021;
   }
   .services-one div:nth-child(even){
       border-color: #0c1f3e;
   }
} 
@media(max-width: 360px) {
  .services-on .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 65px;
  text-align: center;
  color: white;
  padding-bottom: 0vh;
}
.header-one p{
     font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 40px;
}

.services{
  margin-left: 0vh;
  padding-top: 50px;
  padding-left: 0vh;
  padding-right: 0vh;
}

   .services-one{
     display: grid;
     grid-template-columns: 90%;
     margin-left: 0vh;
   }
   .services-one-one span{
     font-size: 60px;
     display: flex;
     align-items: center;
     font-weight: 300;
     opacity: 0.8;
     color: #0c1f3e;
   }
   .services-one-one h4{
     margin-left: 4vh;
     font-weight: 600;
     font-size: 16px;

   }
   .services-one-one p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 25px;
     text-align: justify;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-one button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 15px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-two span{
     font-size: 60px;
    display: flex;
     align-items: center;
     font-weight:300;
     opacity: 0.8;
     color: #d8172e;
   }
   .services-one-two h4{
     margin-left: 2vh;
     font-size: 16px;
   }
   .services-one-two p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     padding-top: 20px;
     text-align: justify;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-two button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     color: white;
     border-color: #d8172e;
     margin-top: 20px;
   }
   
   .services-one-three span{
     font-size: 60px;
     font-weight: 300;
     display: flex;
     align-items: center; 
     opacity: 0.8;  
     color: #0c1f3e; 

   }
   .services-one-three p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-three h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-three button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-four span{
     font-size: 60px;
     font-weight: 300;
    display: flex;
     align-items: center;
     opacity: 0.8;  
     color: #d8172e; 

   }
   .services-one-four p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-four h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-four button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-five span{
     font-size: 60px;
     font-weight: 300;
    display: flex;
     align-items: center;
     opacity: 0.8;   
     color: #0c1f3e;

   }
   .services-one-five p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-five h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-five button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one-six span{
     font-size: 60px;
     font-weight: 300;
     display: flex;
     align-items: center;
     display: flex;
     align-items: center;
     opacity: 0.8;   
     color: #d8172e;

   }
   .services-one-six p{
     padding: 20px;
     margin-bottom: 20px;
     padding-bottom: 0px;
     text-align: justify;
     padding-top: 20px;
     font-size: 15px;
     font-weight: 300;
   }
   .services-one-six h4{
     margin-left: 4vh;
     font-size: 16px;
   }
   .services-one-six button{
     height: 30px;
     width: 100px;
     border-radius: 20px;
     background: #d8172e;
     margin-left: 22vh;
     margin-top: 40px;
     color: white;
     border-color: #d8172e;
   }
   .services-one div{
       border: 4px solid #d8172e;
       margin-left: 20px;
       margin-bottom: 20px;
       padding: 0px;
       background: #10101021;
   }
   .services-one div:nth-child(even){
       border-color: #0c1f3e;
   }
}  
   
  
  
</style>
