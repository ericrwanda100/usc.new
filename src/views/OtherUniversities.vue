<template>
<div>
    <div class="event">
    <div class="header">
          <div class="header-one">
          <p>Study Abroad</p>
          <h1>ABROAD</h1>
          </div>
      </div>
      <br><br>
      <div class="poland">
          <h2>WE HAVE PARTNERSHIP WITH SOME OF THE TOP
              <br>
             UNIVERSITIES IN THE WORLD
          </h2>
        <p>Below are the list of our Partner Universities in the WORLD.</p>
      </div>
      

      <div class="country">
          <div class="country-one">
          <div class="image">
              <center><img src="../assets/un1.png" alt=""></center>
          </div>

          <div class="text">
              <div class="image">
              <img src="../assets/trine.jpg" alt="">
              </div>
              <div class="text-one">
                  <h2>Why Choose Antalya University Turkey?</h2>
                  <br><br>
                  <p>-You wish to continue your master and PhD degree abroad? Antalya is the best choice you can ever make for your future. <br> <br>
                      -It is located in Turkey with high qualified faculty members<br> <br>
                      -the good thing to know here is their best offers to qualified students.<br> <br>
                    
                  </p>
                  <br>
                  <button>Visit Website</button>
              </div>

          </div>

          </div>

          <div class="country-one">
          <div class="image1">
              <center><img src="../assets/middle.jpg" alt=""></center>
          </div>

          <div class="text">
              <div class="image">
              <img src="../assets/trine.jpg" alt="">
              </div>
              <div class="text-one">
                  <h2>Why Choose Middle East Technical University?</h2>
                  <br><br>
                  <p>- It is in Turkey with some good offers, this is very affordable university with almost faculties in technology.<br> <br>
                      -it has quality education in Turkey<br> <br>
                      -academic year is divided into two semesters<br><br>
                      -it is very affordable university.
                      
                      
                  </p>
                  <br>
                  <button>Visit Website</button>
              </div>

          </div>

          </div>   
          <div class="country-one">
          <div class="image2">
              <center><img src="../assets/final.png" alt=""></center>
          </div>

          <div class="text">
              <div class="image">
              <img src="../assets/trine.jpg" alt="">
              </div>
              <div class="text-one">
                  <h2>Why Choose Final International University?</h2>
                  <br><br>
                  <p>- it is an institute which is affordable,<br> <br>
                      -it is high tech university in USA,
                      <br><br>
                      -there are some job opportunities for students.
<br> <br>
                      -it offers attomatic discounts on talented and qualified students.
                  </p>
                 
                  <button>Visit Website</button>
              </div>

          </div>
          </div> 

          <div class="country-one">
          <div class="image6">
              <center><img src="../assets/nest.png" alt=""></center>
          </div>

          <div class="text">
              <div class="image">
              <img src="../assets/trine.jpg" alt="">
              </div>
              <div class="text-one">
                  <h2>Why Choose Nest Academy?</h2>
                  <br><br>
                  <p>- It is located in Dubai most tourist counrty around the world and most commercial state in the world<br> <br>
                      -This is rich in Advertising technology and interactive branding.<br> <br>
                     
                      
                      <br><br><br>
                  </p>
                  <br>
                  <button>Visit Website</button>
                  <br>
              </div>

          </div>
          </div> 

           <div class="country-one">
          <div class="image4">
              <center><img src="../assets/near.jpg" alt=""></center>
          </div>

          <div class="text">
              <div class="image">
              <img src="../assets/trine.jpg" alt="">
              </div>
              <div class="text-one">
                  <h2>Why Choose Near East University?</h2>
                  <br><br>
                  <p>- Near East University is in Nothern Cyprus and is where you can find all faculties with affordable tuition fee.
                     <br> <br> -it's specialy is in medicine and faculty of dentist is the best around Cyprus.
                      <br><br><br>
                  </p>
                  <br><br>
                  <button>Visit Website</button>
                  <br><br>
              </div>

          </div>
          </div>

          
          

      </div>

      <div class="why-poland">
      <h1>WHY STUDY ABROAD</h1>
      <p>Here are the reasons why you should choose to study abroad</p>

      <div class="why-poland-one">
          <div class="one">
              <img src="../assets/thumbs-up.png" alt="">
              <p>Hub Of Top Global Universities</p></div>

          <div class="one">
              <img src="../assets/earnings.png" alt="">
              <p>

Academic Flexibility</p></div>
              
          <div class="one">
              <img src="../assets/job-opportunities.png" alt="">
              <p>Career Opportunities</p></div>
          <div class="one">
              <img src="../assets/teamwork.png" alt="">
              <p>Campus Life</p></div>
          <div class="one">
              <img src="../assets/hard-work.png" alt="">
              <p>Campus Life</p></div>
          <div class="one">
              <img src="../assets/united.png" alt="">
              <p>Campus Life</p> </div>
      </div>
      </div>

      </div>

      <Footer />
</div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {

    components: {
                Footer
            } 

}
</script>

<style scoped>

.event .header{
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
.poland h2{
    color: #0c1f3e;
    font-size: 20px;
}
.poland p{
    font-size: 16px;
    margin-top: 15px;
    font-weight: 400;
}

.country {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    column-gap: 3.3%;
    padding: 10%;
    padding-top: 4%;
    padding-bottom: 4%;
}
.country .text{
    height: 400px;
    position: relative;
    overflow: hidden;
}
.country-one .image img{
    width: 110%;
}
.country-one .image1 img{
    width: 35%;
    margin-top: 5vh;
}.country-one .image2 img{
    width: 69%;
    margin-top: 0vh;
}.country-one .image4 img{
    width: 17%;
    margin-top: 0vh;
}.country-one .image5 img{
    width: 23%;
    margin-top: 0vh;
}
.country-one .image6 img{
    width: 70%;
    margin-top: 0vh;
}
.country-one .image7 img{
    width: 80%;
    margin-top: 0vh;
}

.country-one .text .image img{
    width: 600px;
    height: 350px;
    
}
.country-one .text .image{
    border: 2px solid #d8172e;
}
.poland{
    text-align: center;
}
.country-one .text .text-one{
    margin-top: -740px;
    background: #d8172e;
    width: 100%;
    position: absolute;
    padding: 20px;
}
.country-one .text .text-one p{
    font-size: 16px;
}
.country-one .text .text-one h2{
    font-size: 18px;
}
.country-one .text:hover .text-one{
    margin-top: -370px;
    background: #d8172e;
    color: white;
    width: 100%;
    position: absolute;
    transition: all 1s ease-in-out;
}
.country-one .text .text-one button{
    background:#0c1f3e;
    color: white;
    width: 120px;
    height: 30px;
    font-size: 14px;
}
.why-poland h1{
    text-align: center;
    font-size: 20px;
    color: #0c1f3e;
    

}
.why-poland p{
    text-align: center;
    font-size: 16px;
    margin-bottom: 10vh;
}
.why-poland-one{
    display: grid;
    grid-template-columns: 30% 30% 30%;
    column-gap: 3.3%;
    padding-left: 10vh;
    font-size:20px; 
}
.why-poland-one .one img{
    width: 30%; 
    margin-left: 40px;
}
.why-poland-one .one p{
    font-size: 20px;
    
}

@media(max-width: 320px) {
    .header-one h1{
    font-size: 50px;
}  
.header-one p{
    font-size: 16px;
    margin-top: -40px;
}
.poland h2{
    font-size: 13px;
}
.country{
    display: flex;
    flex-flow: column;
    padding: 3%;
    padding-top: 4%;
    padding-bottom: 2%;
}
.why-poland-one{
    display: flex;
    flex-flow: column;
}
.why-poland h1{
    font-size: 20px; 
}
.why-poland p{
    font-size: 15px;
}
.why-poland-one .one img{
    width: 60%; 
    margin-left: -60px;
}
.why-poland-one .one p{
    font-size: 15px;
    margin-left: -29vh;
}

}
@media(max-width: 375px) {
    .header-one h1{
    font-size: 50px;
}  
.header-one p{
    font-size: 16px;
    margin-top: -40px;
}
.poland h2{
    font-size: 13px;
}
.country{
    display: flex;
    flex-flow: column;
    padding: 3%;
    padding-top: 4%;
    padding-bottom: 2%;
}
.why-poland-one{
    display: flex;
    flex-flow: column;
}
.why-poland h1{
    font-size: 20px; 
}
.why-poland p{
    font-size: 15px;
}
.why-poland-one .one img{
    width: 60%; 
    margin-left: -60px;
}
.why-poland-one .one p{
    font-size: 15px;
    margin-left: -29vh;
}
}
@media(max-width: 414px) {
    .header-one h1{
    font-size: 50px;
}  
.header-one p{
    font-size: 16px;
    margin-top: -40px;
}
.poland h2{
    font-size: 13px;
}
.country{
    display: flex;
    flex-flow: column;
    padding: 3%;
    padding-top: 4%;
    padding-bottom: 2%;
}
.why-poland-one{
    display: flex;
    flex-flow: column;
}
.why-poland h1{
    font-size: 20px; 
}
.why-poland p{
    font-size: 15px;
}
.why-poland-one .one img{
    width: 60%; 
    margin-left: -60px;
}
.why-poland-one .one p{
    font-size: 15px;
    margin-left: -29vh;
}
}
</style>