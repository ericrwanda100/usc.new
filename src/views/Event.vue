<template>
<div>
    <div class="event">
    <div class="header">
          <div class="header-one" data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
          <p>Our Events</p>
          <h1>Events</h1>
          </div>
      </div>
      </div>

      <div class="event-one">

          <div class="event-one-one">
          <div class="image">
              <img src="../assets/5.jpg" alt="">
          </div>
          <div class="text">
              <h2>Global Education Fair</h2>
              <p>9pm-12pm | United Scholars Center</p>
              <br>

              <p>22-23Sep, 09:00 – 12:00 EAT
              Location: Kigali Marriott Hotel
               Rwanda-Kigali</p>
               <button>View More</button>
          </div>
          </div>
          <div class="event-one-one">
          <div class="image">
              <img src="../assets/4.jpg" alt="">
          </div>
          <div class="text">
             <h2> Global Education Fair</h2>
             
<p>9pm-12pm | United Scholars Center
<br><br>
18-19Sep, 09:00 – 12:00 EAT
Location: King's Conference Center
Burundi-Bujumbura</p>
<button>View More</button>
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

<style scoope>
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
.event-one{
    display: grid;
    grid-template-columns: 30% 30%;
    column-gap: 3%;
    padding: 10vh;
    padding-left: 20vh;
    padding-right: 20vh;
}
.event-one  .event-one-one .image img{
    width: 100%;
}
.event-one  .event-one-one .text {
    transform: translateY(-20px);
    padding: 20px;
    width: 100%;
    background: white;
    border: 1px solid grey;
}
.event-one  .event-one-one {
    height: 400px;
    overflow: hidden;
    
}

.event-one .event-one-one:hover .text{
    transform: translateY(-130px);
    transition: ease-in-out 1s all;
}
.event-one .event-one-one:hover .text button{
    width: 100px;
    height: 30px;
    background: #d8172e;
    border-color: #d8172e;
    margin-left: 15vh;
    color: white;
    font-size: 16px;
}
.event-one .event-one-one:hover .text p {
    text-align: center;
}
.event-one .event-one-one p{
    font-size: 16px;
}
@media(max-width: 360px){

    .event .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 50px;
  text-align: center;
  color: white;
  padding-bottom: 10vh;
}
.header-one p{
     font-size: 2px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 80px;
}
.event-one{
    display: flex;
    flex-direction: column;
    column-gap: 3%;
    padding: 10vh;
    padding-left: 2vh;
    padding-right: 2vh;
}
.event-one  .event-one-one .image img{
    width: 100%;
}
.event-one  .event-one-one .text {
    transform: translateY(-20px);
    padding: 20px;
    width: 100%;
    background: white;
    border: 1px solid grey;
}
.event-one  .event-one-one {
    height: 400px;
    overflow: hidden;
    
}

.event-one .event-one-one:hover .text{
    transform: translateY(-130px);
    transition: ease-in-out 1s all;
}
.event-one .event-one-one:hover .text button{
    width: 100px;
    height: 30px;
    background: #d8172e;
    border-color: #d8172e;
    margin-left: 15vh;
    color: white;
    font-size: 16px;
}
.event-one .event-one-one:hover .text p {
    text-align: center;
}
.event-one .event-one-one p{
    font-size: 16px;
}
}
</style>