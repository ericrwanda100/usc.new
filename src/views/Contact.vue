<template>
<div class="contact">
  <div class="header">
          <div class="header-one" data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
          <p>Get in touch</p>
          <h1>Contact Us</h1>
          </div>
      </div>


      <div class="contact-detail-one">
      <div class="phone-number">
          <h1>Contact info</h1>
          <p> <span class="fa fa-phone"></span> +250788307538 | +250788304387</p>
          <p>  <span class="fa fa-envelope"></span> info@uscworldeducation.com</p>
          <br>
          <hr>
          <h4>Opening hours</h4>
          <p>Monday - Friday — 8:00 AM - 05:00 PM</p>
      </div>
      <div class="contact-us">
          <h1>Contact Us</h1>
              <label for="names">First Name*</label>
              <input type="text" class="form">
              <label for="lastname">Last Name*</label>
              <input type="text" class="form">

              <label for="email">Email*</label>
              <input type="text" class="form">

              <label for="subject">Subject</label>
              <input type="text" class="form">
    
              <label for="comment">Comment or Message*</label>
              <textarea name="" id="" cols="30" rows="10" class="message"></textarea>
              <button name="submit" class="submit">SEND MESSAGE</button>
  
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
.contact {
    background:#eaeaea;
}
.contact .header{
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
.contact-detail-one{
    margin-top: 10vh;
    margin-bottom: 10vh;
}

.contact-detail-one{
    display: grid;
    grid-template-columns: 40% 40%;
    column-gap: 10%;
}
.contact-detail-one .phone-number{
    padding-left: 10vh;
}
.contact-detail-one .contact-us{
    display: flex;
    flex-flow: column;
}
.contact-detail-one .contact-us .form{
    height: 30px;
    border: 2px solid white;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 30px;
}
.contact-detail-one .contact-us{
    font-size: 16px;
    opacity: 0.8;
}
.contact-detail-one .contact-us .message{
    margin-top: 10px;
    margin-bottom: 30px;
    border-color: white;
    border-radius: 5px;
}
.contact-detail-one .contact-us .submit{
    height: 40px;
    width: 150px;
    border-radius: 20px;
    background: #d8172e;
    border: #d8172e;
    color: white;
}
.contact-detail-one .contact-us h1{
    margin-bottom: 50px;
    opacity: 0.8;
    font-size: 30px;
}
.contact-detail-one .phone-number h1{
    font-size: 30px;
    opacity: 0.6;
    margin-bottom: 6vh;
}
.contact-detail-one .phone-number p{
    font-size: 16px;
}
.contact-detail-one .phone-number h4{
    font-size:20px;
    opacity: 0.6;
    margin-bottom: 2vh;
    margin-top: 2vh;

}
.contact-detail-one .phone-number .fa{
    color: #d8172e;
    font-size: 20px;
}
@media(max-width: 414px){
    .contact {
    background:#eaeaea;
}
.contact .header{
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
     font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
  padding-left: 2vh;
}
.header-one{
    padding-top: 80px;
}
.contact-detail-one{
    margin-top: 10vh;
    margin-bottom: 10vh;
    
}

.contact-detail-one{
    display: flex;
    flex-direction: column;
    column-gap: 10%;
    padding-left: 2vh;
    padding-right: 2vh;
}
.contact-detail-one .phone-number{
    padding-left: 0vh;
}
.contact-detail-one .contact-us{
    display: flex;
    flex-flow: column;
}
.contact-detail-one .contact-us .form{
    height: 30px;
    border: 2px solid white;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 30px;
}
.contact-detail-one .contact-us{
    font-size: 16px;
    opacity: 0.8;
}
.contact-detail-one .contact-us .message{
    margin-top: 10px;
    margin-bottom: 30px;
    border-color: white;
    border-radius: 5px;
}
.contact-detail-one .contact-us .submit{
    height: 40px;
    width: 150px;
    border-radius: 20px;
    background: #d8172e;
    border: #d8172e;
    color: white;
}
.contact-detail-one .contact-us h1{
    margin-bottom: 20px;
    margin-top: 20px;
    opacity: 0.8;
    font-size: 20px;
}
.contact-detail-one .phone-number h1{
    font-size: 20px;
    opacity: 0.6;
    margin-bottom: 6vh;
}
.contact-detail-one .phone-number p{
    font-size: 16px;
}
.contact-detail-one .phone-number h4{
    font-size:16px;
    opacity: 0.6;
    margin-bottom: 2vh;
    margin-top: 2vh;

}
.contact-detail-one .phone-number .fa{
    color: #d8172e;
    font-size: 20px;
}
}
@media(max-width: 411px){
    .contact {
    background:#eaeaea;
}
.contact .header{
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
     font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
  padding-left: 2vh;
}
.header-one{
    padding-top: 80px;
}
.contact-detail-one{
    margin-top: 10vh;
    margin-bottom: 10vh;
    
}

.contact-detail-one{
    display: flex;
    flex-direction: column;
    column-gap: 10%;
    padding-left: 2vh;
    padding-right: 2vh;
}
.contact-detail-one .phone-number{
    padding-left: 0vh;
}
.contact-detail-one .contact-us{
    display: flex;
    flex-flow: column;
}
.contact-detail-one .contact-us .form{
    height: 30px;
    border: 2px solid white;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 30px;
}
.contact-detail-one .contact-us{
    font-size: 16px;
    opacity: 0.8;
}
.contact-detail-one .contact-us .message{
    margin-top: 10px;
    margin-bottom: 30px;
    border-color: white;
    border-radius: 5px;
}
.contact-detail-one .contact-us .submit{
    height: 40px;
    width: 150px;
    border-radius: 20px;
    background: #d8172e;
    border: #d8172e;
    color: white;
}
.contact-detail-one .contact-us h1{
    margin-bottom: 20px;
    margin-top: 20px;
    opacity: 0.8;
    font-size: 20px;
}
.contact-detail-one .phone-number h1{
    font-size: 20px;
    opacity: 0.6;
    margin-bottom: 6vh;
}
.contact-detail-one .phone-number p{
    font-size: 16px;
}
.contact-detail-one .phone-number h4{
    font-size:16px;
    opacity: 0.6;
    margin-bottom: 2vh;
    margin-top: 2vh;

}
.contact-detail-one .phone-number .fa{
    color: #d8172e;
    font-size: 20px;
}
}
@media(max-width: 360px){
    .contact {
    background:#eaeaea;
}
.contact .header{
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
     font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
  padding-left: 2vh;
}
.header-one{
    padding-top: 80px;
}
.contact-detail-one{
    margin-top: 10vh;
    margin-bottom: 10vh;
    
}

.contact-detail-one{
    display: flex;
    flex-direction: column;
    column-gap: 10%;
    padding-left: 2vh;
    padding-right: 2vh;
}
.contact-detail-one .phone-number{
    padding-left: 0vh;
}
.contact-detail-one .contact-us{
    display: flex;
    flex-flow: column;
}
.contact-detail-one .contact-us .form{
    height: 30px;
    border: 2px solid white;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 30px;
}
.contact-detail-one .contact-us{
    font-size: 16px;
    opacity: 0.8;
}
.contact-detail-one .contact-us .message{
    margin-top: 10px;
    margin-bottom: 30px;
    border-color: white;
    border-radius: 5px;
}
.contact-detail-one .contact-us .submit{
    height: 40px;
    width: 150px;
    border-radius: 20px;
    background: #d8172e;
    border: #d8172e;
    color: white;
}
.contact-detail-one .contact-us h1{
    margin-bottom: 20px;
    margin-top: 20px;
    opacity: 0.8;
    font-size: 20px;
}
.contact-detail-one .phone-number h1{
    font-size: 20px;
    opacity: 0.6;
    margin-bottom: 6vh;
}
.contact-detail-one .phone-number p{
    font-size: 16px;
}
.contact-detail-one .phone-number h4{
    font-size:16px;
    opacity: 0.6;
    margin-bottom: 2vh;
    margin-top: 2vh;

}
.contact-detail-one .phone-number .fa{
    color: #d8172e;
    font-size: 20px;
}
}
</style>