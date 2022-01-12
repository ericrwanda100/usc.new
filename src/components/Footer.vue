<template>
  <div class="footer">
    <div class="body">
      <div class="body-one">
        <h1>United Scholars Center</h1>
        <p>
          Centenary Hse 3rd floor in town P.0.Box 1634 Kigali-Rwanda,<br />
          +250788307538 +250788304387
          <br />
          uscworldeducation@gmail.com
          <br />
          Monday-friday: 8:00AM-5:00PM
          <br />
          Saturday: 10:00AM-4:00PM
        </p>
      </div>
      <div class="body-two">
        <h1>USEFUL LINK</h1>
        <ul>
          <router-link to="" class="link"
            ><router-link
              to="/"
              class="link"
              style="text-decoration: none; color: white"
              >Home</router-link
            ></router-link
          >
          <router-link to="" class="link"
            ><router-link
              to="/About"
              class="link"
              style="text-decoration: none; color: white"
              >About us</router-link
            ></router-link
          >
          <router-link to="" class="link"
            ><router-link
              to="/Event"
              class="link"
              style="text-decoration: none; color: white"
              >Event</router-link
            ></router-link
          >
          <router-link to="" class="link"
            ><router-link
              to="/Services"
              class="link"
              style="text-decoration: none; color: white"
              >Services</router-link
            ></router-link
          >
        </ul>
      </div>
      <div class="body-three">
        <h1>don't Follow Us</h1>
        <p>
          Please follow us on social Media profile in order to keep updated.
        </p>

        <div class="icon">
          <i class="fa fa-facebook"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-youtube"></i>
        </div>
      </div>
    </div>
    <div class="footer-one">
      <p>All Right reserved by ©United Scholars Center.2014-2021</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.body-one p {
  font-size: 16px;
}
.footer {
  display: flex;
  flex-direction: column;
  margin-top: 0vh;
}
.footer .body {
  background: #0c1f3e;
  height: 230px;
  width: 100%;
  display: grid;
  padding-left: 10vh;
  padding-right: 10vh;
  padding-top: 3vh;
  grid-template-columns: 33% 33% 33%;
}

.footer .body .body-one h1 {
  color: white;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
}
.footer .body .body-one p {
  color: white;
  margin-top: 5vh;
  font-weight: 300;
  line-height: 23px;
}
.footer-one {
  background: #d8172e;
  height: 40px;
  width: 100%;
}
.footer .body .body-two h1 {
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  font-weight: 500;
}
.footer .body .body-two ul {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-size: 16px;
}
.footer .body .body-two .link {
  text-decoration: none;
  color: white;
  font-weight: 200;
  border-bottom: 1px solid #d8172e;
  margin-top: 10px;
}
.footer .body .body-three h1 {
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  font-weight: 500;
}
.footer-one p {
  text-align: center;
  color: white;
  padding-top: 10px;
  font-size: 16px;
}
.body-three p {
  color: white;
  margin-top: 40px;
  margin-left: 10px;
  font-weight: 300;
  font-size: 18px;
}
.body-three .icon {
  margin-left: 10px;
  margin-top: 15px;
  font-size: 20px;
  letter-spacing: 20px;
  color: white;
  font-weight: 300;
}
.body-three .icon .fa-facebook:hover {
  color: #395797;
}
.body-three .icon .fa-fa-instagram:hover {
  color: #db2f6a;
}
.body-three .icon .fa-fa-twitter:hover {
  color: red;
}

@media screen and (max-width: 520px) {
  .body-one p {
    font-size: 14px;
  }
  .footer {
    display: flex;
    flex-direction: column;
    margin-top: 0vh;
  }
  .footer .body {
    background: #0c1f3e;
    height: 100%;
    width: 100%;
    display: grid;
    padding-left: 3vh;
    padding-right: 3vh;
    padding-top: 2vh;
    grid-template-columns: 50% 50%;
  }

  .footer .body .body-one h1 {
    color: white;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .footer .body .body-one p {
    color: white;
    margin-top: 0vh;
    font-weight: 300;
    line-height: 20px;
  }
  .body-two {
    display: none;
  }
  .footer-one {
    background: #d8172e;
    height: 40px;
    width: 100%;
  }
  .footer .body .body-two h1 {
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    font-weight: 500;
  }
  .footer .body .body-two ul {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    font-size: 16px;
  }
  .footer .body .body-two .link {
    text-decoration: none;
    color: white;
    font-weight: 200;
    border-bottom: 1px solid #d8172e;
    margin-top: 0px;
  }
  .footer .body .body-three h1 {
    font-size: 15px;
    text-transform: uppercase;
    color: white;
    font-weight: 500;
  }
  .footer-one p {
    text-align: center;
    color: white;
    padding-top: 10px;
    font-size: 16px;
  }
  .body-three p {
    color: white;
    margin-top: 40px;
    margin-left: 10px;
    font-weight: 300;
    font-size: 18px;
  }
  .body-three .icon {
    margin-left: 10px;
    margin-top: 15px;
    font-size: 20px;
    letter-spacing: 20px;
    color: white;
    font-weight: 300;
  }
  .body-three .icon .fa-facebook:hover {
    color: #395797;
  }
  .body-three .icon .fa-fa-instagram:hover {
    color: #db2f6a;
  }
  .body-three .icon .fa-fa-twitter:hover {
    color: red;
  }
}

@media screen and (max-width: 411px) {
  /* .footer{
    margin-top: 10vh;
  } */
  .footer .body {
    background: #0c1f3e;
    height: 460px;
    width: 100%;
    display: flex;
    flex-flow: column;
    padding-left: 4vh;
    padding-right: 4vh;
    padding-top: 3vh;
  }
  .footer .body .body-one h1 {
    color: white;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .body-three .icon {
    margin-left: 10px;
    margin-top: 15px;
    font-size: 16px;
    letter-spacing: 20px;
    color: white;
    font-weight: 300;
  }

  .footer .body .body-two h1 {
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    font-weight: 500;
    margin-top: 15px;
  }
  .body-three p {
    color: white;
    margin-top: 0px;
    margin-left: 0px;
    font-weight: 300;
    font-size: 15px;
  }
  .footer .body .body-one p {
    color: white;
    margin-top: 1vh;
    font-weight: 300;
    line-height: 23px;
  }
  .footer .body .body-two ul {
    display: flex;
    flex-direction: column;
    margin-top: 1px;
  }
  .footer .body .body-three h1 {
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    font-weight: 500;
    margin-top: 20px;
  }
  .footer-one p {
    font-size: 10x;
  }
  .footer {
    width: 100%;
  }
}
</style>
