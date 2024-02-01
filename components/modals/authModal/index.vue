<template>
  <div @click="(event) => event.stopPropagation()" class="fury-modal modal-intro modal-login" style="max-width: 735px">
    <div class="modal-container">
      <button class="modal-btn-close" @click="$store.commit('closeModal')">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
      <div class="modal-intro-intro">
        <p>Leading Crypto Casino</p>
      </div>
      <div class="modal-intro-content">
        <div class="modal-login-head">
          <button type="button" size="sm" class="button-tab button-tab-sm button-tab-blue"
            @click="loginSignUpToggleHandler" :class="$store.state.modalType == 'login' ? 'active' : ''"
          >
            <span>{{ $t("login") }}</span>
          </button>
          <button type="button" size="sm" class="button-tab button-tab-sm button-tab-blue"
            :class="$store.state.modalType == 'signup' ? 'active' : ''" @click="loginSignUpToggleHandler"
          >
            <span>{{ $t("signup") }}</span>
          </button>
        </div>
        <div class="modal-login-body">
          <form v-on:keyup.enter="userLogin">
            <div class="modal-login-inputs">
              <div class="input input-md" type="email" placeholder="Enter your email" required="required">
                <div class="input-inner">
                  <span class="input-icon">
                    <font-awesome-icon icon="fa-solid fa-envelope" color="#55657e"/>
                  </span>
                  <input
                    class="input-tag"
                    type="email"
                    placeholder="Enter your email"
                    required="required"
                    v-model="userEmail"
                    @keyup="getEmailLength"
                  />
                  <button
                    type="button"
                    :class="
                      emailLength > 0
                        ? 'input-btn-clear visible'
                        : 'input-btn-clear'
                    "
                    @click="clearEmail"
                  >
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                  </button>
                  <div class="input-btn-successful">
                    <font-awesome-icon icon="fa-solid fa-check" />
                  </div>
                </div>
              </div>
              <div
                class="input input-md"
                minlength="8"
                type="password"
                placeholder="Enter your password"
                required="required"
              >
                <div class="input-inner">
                  <span class="input-icon">
                    <font-awesome-icon
                      icon="fa-solid fa-lock"
                      color="#55657e"
                    />
                  </span>
                  <input
                    class="input-tag"
                    :type="isPasswordShown ? 'text' : 'password'"
                    placeholder="Enter your password"
                    minlength="8"
                    required="required"
                    v-model="userPassword"
                    @keyup="getPwdLength"
                  />
                  <button
                    type="button"
                    :class="
                      pwdLength > 0
                        ? 'input-btn-clear visible'
                        : 'input-btn-clear'
                    "
                    @click="clearPassword"
                  >
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                  </button>
                  <div class="input-btn-successful">
                    <font-awesome-icon icon="fa-solid fa-check" />
                  </div>
                  <button
                    type="button"
                    class="
                      button
                      button-sm
                      button-blue
                      button-center
                      button-only-icon
                    "
                    @click="passwordShownToggler"
                  >
                    <span class="button-inner">
                      <span class="button-icon">
                        <font-awesome-icon
                          :icon="
                            isPasswordShown
                              ? 'fa-solid fa-eye-slash'
                              : 'fa-solid fa-eye'
                          "
                        />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
              <div v-if = "$store.state.modalType == 'signup'" class="input input-md" type="text" placeholder="Promo code (optional)">
                <div class="input-inner input-inner-light-icons">
                  <span class="input-icon">
                    <font-awesome-icon icon="fa-solid fa-tag" color="#55657e" />
                  </span>
                  <input class="input-tag" type="text" placeholder="Promo code (optional)" v-model="promoInput" @keyup="getPromoLength"/>
                  <button type="button" :class="promoLength > 0 ? 'visible' : ''" class="input-btn-clear" @click="clearPromoCode">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                  </button>
                  <div class="input-btn-successful">
                    <font-awesome-icon icon="fa-solid fa-check" />
                  </div>
                  <button type="button" :class=" promoLength > 0 ? ' visible' : ''" class="promoBtn button button-sm button-blue button-center">
                    <span class="button-inner">
                      <span class="button-text"> Apply </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div v-if ="$store.state.modalType == 'login'" class="modal-login-check-block">
              <label class="checkbox" style="display: flex; align-items: center;">
                <b-form-checkbox v-model="rememberMe" name="check-button"></b-form-checkbox> 
                <span><span>Remember Me</span></span>
              </label>
            </div>
            <div v-else class="modal-login-check-block">
              <label class="checkbox">
                <Checkbox
                  :is-checked="isConfirmTerm"
                  :is-term="true"
                  @check-term="isConfirmTerm = !isConfirmTerm"
                />
                <span>
                  <span>
                    I confirm that I am 18 years old and I have read the
                    <a target="_blank" href="#">Terms of Service</a>
                  </span>
                </span>
              </label>
              <span
                :class="isConfirmTerm ? 'hidden' : ''"
                style="color: red; font-size: 14px; font-weight: 500"
              >
                Please accept the terms of service</span
              >
              <label class="checkbox" style="display: flex; align-items: center;">
                <Checkbox :is-checked="true" :is-term="false" />
                <span><span>Receive Email Promos</span></span>
              </label>
            </div>
            <div :class=" $store.state.modalType == 'login' ? 'modal-login-captcha hidden' : 'modal-login-captcha'">
              <div class="captcha">
                <iframe
                  src="https://newassets.hcaptcha.com/captcha/v1/1f7dc62/static/hcaptcha.html#frame=checkbox&amp;id=0n4iipj2qq9&amp;host=betfury.io&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=off&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;sitekey=932977c7-788d-4846-94f2-dca52df9fb6f&amp;theme=dark"
                  title="widget containing checkbox for hCaptcha security challenge"
                  tabindex="0"
                  frameborder="0"
                  scrolling="no"
                  data-hcaptcha-widget-id="0n4iipj2qq9"
                  data-hcaptcha-response=""
                  style="width: 303px; height: 78px; overflow: hidden"
                ></iframe>
              </div>
            </div>
            <a :class=" $store.state.modalType == 'login' ? 'forgot-pwd' : 'forgot-pwd hidden'" @click="showForgotModal">
              Forgot your password?
            </a>
            <button @click="userLogin" type="button" class=" button button-lg button-blue button-center button-full button-submit">
              <span class="button-inner">
                <span class="button-text">
                  {{$store.state.modalType == 'login' ? $t("login") : $t("signup")}}
                </span>
              </span>
            </button>
          </form>
          <div class="login-variants">
            <span class="login-variants-label">Or {{ $store.state.modalType == 'login' ? "Login" : "Sign Up" }} with</span>
            <Variants/>
          </div>
          <p :class="$store.state.modalType == 'login' ? 'hint' : 'hint hidden'">
            By accessing the site, I confirm that I am 18 years old and I have
            read the
            <a target="_blank" href="#"> terms of service </a>
          </p>
        </div>
        <div class="modal-login-footer">
          <p>
            {{ $store.state.modalType == 'login'? "Don't you have an account" : "Do you have an account"}}
            <button @click="loginSignUpToggleHandler">
              {{ $store.state.modalType == 'login' ? $t("signup") : $t("login")}}
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  import { Auth }  from 'aws-amplify';
  import Checkbox from "@/components/views/Checkbox.vue";
  import Variants from './Variants.vue'

import axios from 'axios'
  
  export default {
    name: "AuthModal",
    components: { Checkbox, Variants},
    props: {
      type: String,
    },
    data() {
      return {
        modalType: this._props.type,
        rememberMe: false,
        isPasswordShown: false,
        isConfirmTerm: false,
        userEmail: "",
        emailLength: 0,
        userPassword: "",
        pwdLength: 0,
        promoInput: "",
        promoLength: 0,
      };
    },
    watch: {
      type: {
        immediate: true, 
        handler (val, oldVal) {
          this.modalType = this._props.type
        }
      }
    },
    mounted() {
      let email = this.getCookie("userEmail");
      console.log(email)
      if (email) {
        this.userEmail = email
        this.rememberMe = true
      }
    },
    methods: {
      loginSignUpToggleHandler: function () {
        if(this.modalType == 'login'){
          this.modalType = 'signup'
          this.$store.dispatch('setModalType', 'signup')
        } else {
          this.modalType = 'login'
          this.$store.dispatch('setModalType', 'login')

        }
      },
      passwordShownToggler: function () {
        this.isPasswordShown = !this.isPasswordShown;
      },
      getEmailLength: function () {
        this.emailLength = this.userEmail.length;
      },
      clearEmail: function () {
        this.userEmail = "";
        this.emailLength = 0;
      },
      getPwdLength: function () {
        this.pwdLength = this.userPassword.length;
      },
      clearPassword: function () {
        this.userPassword = "";
        this.pwdLength = 0;
      },
      getPromoLength: function () {
        this.promoLength = this.promoInput.length;
      },
      clearPromoCode: function () {
        this.promoInput = "";
        this.promoLength = 0;
      },
      showForgotModal: function () {
        this.$store.commit("showForgotModal");
      },
      getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      },
      async userLogin() {
          try {
            if (!this.userEmail) {
              this.$toast.error('Please type your email.')
              return
            }
            if (!this.userPassword) {
              this.$toast.error('Please type your password.')
              return
            }
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!this.userEmail.match(validRegex)) {
              this.$toast.error('An invalid email.')
              return
            }
            var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            if(!format.test( this.userPassword )) {
              this.$toast.error('Your password should contain the special letters.')
              return
            }
            if (this.$store.state.modalType == 'login') {
              console.log('login')
              let response = await Auth.signIn(this.userEmail, this.userPassword)
              // this.$auth.setUserToken(response.signInUserSession.accessToken.jwtToken)
              // this.$auth.strategy.token.set('Bearer ' + response.signInUserSession.accessToken.jwtToken);
              // this.$auth.setUser(response.attributes);
              //https://awstip.com/using-aws-cognito-with-vue-nuxt-auth-a82ec5653e71?gi=701e44fbe72f
              console.log(response.signInUserSession.idToken.jwtToken)
              if (response.signInUserSession.idToken.jwtToken) {
                window.sessionStorage.setItem("token", response.signInUserSession.idToken.jwtToken)
                this.$store.dispatch('account/checkAWSLogin')
                this.$store.commit("closeModal");
                if (this.rememberMe) {
                  var d = new Date();
                  // let expire = process.env.APP_COOKIE_EXPIRE || 5
                  let expire = 5
                  d.setTime(d.getTime() + (expire*24*60*60*1000))
                  let expires = "expires="+ d.toUTCString();
                  document.cookie = "userEmail=" + this.userEmail + ";" + expires + ";path=/";
                  // this.$cookies.set('auth._refresh_token.local', this.userEmail, 60*60*24*expire)
                  // let authExpire = this.$cookies.get('auth_expire');
                  // let authRefreshTokenLocal = this.$cookies.get('auth._refresh_token.local')
                  // let authTokenLocal = this.$cookies.get('auth._token.local')
                  // let authStrategy = this.$cookies.get('auth.strategy')
                  // this.$cookies.set('auth._token.local', authTokenLocal, authExpire)
                  // this.$cookies.set('auth.strategy', authStrategy, authExpire)
                }
              }
              // Without cognito login
              // // const response = await this.$api.auth.userLogin(
              // //   this.emailInput,
              // //   this.pwdInput
              // // );
              // // if (response.name) {
              // //   this.$store.dispatch('account/setAccount', response)
              // //   this.$store.commit("closeModal");
              // // }
            } else {
              console.log('signup')
              await Auth.signUp({
                username: this.userEmail,
                password: this.userPassword,
                attributes: {
                  email: this.userEmail,
                  nickname: ''
                },
              })
              .then((data) => {
                console.log(data);
                this.$toast.show('Success! Please confirm your email.')
                this.userEmail = ''
                this.userPassword = ''
                this.$store.dispatch('setModalType', 'login')
              })
              .catch((error) => {
                console.log(error.message)
                this.$toast.error(error.message)
              });

            }
          } catch {
            this.$toast.error('Something went wrong while you are connecting to AWS Cognito.')
          }
      },
    },
  };
</script>
<style lang="scss" scoped>

</style>
