<template>
    <div class="f-modals">
        <div class="f-modal" style="max-width: 420px; height:424px;">
            <div class="f-modal__container bottom-shadow has-height">

                <button class="f-modal__btn-close" @click="$store.commit('closeModal')">
                    <font-awesome-icon icon="fa-solid fa-xmark" style="width: 24px; height:24px;"/>
                </button>
                
                <div class="default-tab">
                    <div class="tab-inner">

                        <div class="header">
                            <div class="header__title">
                                <label>Change password</label>
                            </div>
                        </div>

                        <div class="body">
                            <form class="mx-5">
                                <div class="input input-md mt-3" minlength="8" type="password"  required="required">
                                    <div class="input-inner">
                                        <span class="input-icon">
                                            <font-awesome-icon icon="fa-solid fa-lock" color="#55657e"/>
                                        </span>
                                        <input class="input-tag" :type="isPasswordShown ? 'text' : 'password'" placeholder="Old password" minlength="8" required="required"/>
                                        <button type="button" :class=" pwdLength > 0 ? 'input-btn-clear visible' : 'input-btn-clear'" @click="clearPassword">
                                            <font-awesome-icon icon="fa-solid fa-xmark" />
                                        </button>
                                        <div class="input-btn-successful">
                                            <font-awesome-icon icon="fa-solid fa-check" />
                                        </div>
                                        <button type="button" class=" button button-sm button-blue button-center button-only-icon" @click="passwordShownToggler">
                                            <span class="button-inner">
                                                <span class="button-icon">
                                                    <font-awesome-icon :icon=" isPasswordShown ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"/>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div class="input input-md" minlength="8" type="password"  required="required">
                                    <div class="input-inner">
                                        <span class="input-icon">
                                            <font-awesome-icon icon="fa-solid fa-lock" color="#55657e"/>
                                        </span>
                                        <input class="input-tag" :type="isPasswordShown ? 'text' : 'password'" placeholder="Enter password" minlength="8" required="required"/>
                                        <button type="button" :class=" pwdLength > 0 ? 'input-btn-clear visible' : 'input-btn-clear'" @click="clearPassword">
                                            <font-awesome-icon icon="fa-solid fa-xmark" />
                                        </button>
                                        <div class="input-btn-successful">
                                            <font-awesome-icon icon="fa-solid fa-check" />
                                        </div>
                                        <button type="button" class=" button button-sm button-blue button-center button-only-icon" @click="passwordShownToggler">
                                            <span class="button-inner">
                                                <span class="button-icon">
                                                    <font-awesome-icon :icon=" isPasswordShown ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"/>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div class="input input-md" minlength="8" type="password"  required="required">
                                    <div class="input-inner">
                                        <span class="input-icon">
                                            <font-awesome-icon icon="fa-solid fa-lock" color="#55657e"/>
                                        </span>
                                        <input class="input-tag" :type="isPasswordShown ? 'text' : 'password'" placeholder="Repeat password" minlength="8" required="required"/>
                                        <button type="button" :class=" pwdLength > 0 ? 'input-btn-clear visible' : 'input-btn-clear'" @click="clearPassword">
                                            <font-awesome-icon icon="fa-solid fa-xmark" />
                                        </button>
                                        <div class="input-btn-successful">
                                            <font-awesome-icon icon="fa-solid fa-check" />
                                        </div>
                                        <button type="button" class=" button button-sm button-blue button-center button-only-icon" @click="passwordShownToggler">
                                            <span class="button-inner">
                                                <span class="button-icon">
                                                    <font-awesome-icon :icon=" isPasswordShown ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"/>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <button type="button" class="button button-lg button-red button-center" style="width: 100%;">
                                    <span class="button-inner">
                                        <span class="button-text">CONFRIM</span>
                                    </span>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ChangePasswordModal",
        data() {
            return {
        isPasswordShown: false,
        isConfirmTerm: false,
        emailInput: "",
        emailLength: 0,
        pwdInput: "",
        pwdLength: 0,
        promoInput: "",
        promoLength: 0,
      };
        },
        methods: {
      loginSignUpToggleHandler: function () {
        if(this.modalType == 'login'){
          this.modalType = 'signup'
        } else {
          this.modalType = 'login'
        }
      },
      passwordShownToggler: function () {
        this.isPasswordShown = !this.isPasswordShown;
      },
      getEmailLength: function () {
        this.emailLength = this.emailInput.length;
      },
      clearEmail: function () {
        this.emailInput = "";
        this.emailLength = 0;
      },
      getPwdLength: function () {
        this.pwdLength = this.pwdInput.length;
      },
      clearPassword: function () {
        this.pwdInput = "";
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
      async userLogin() {
        const response = await this.$api.auth.userLogin(
          this.emailInput,
          this.pwdInput
        );
        if (response.name) {
          this.$store.dispatch('account/setAccount', response)
          this.$store.commit("closeModal");
        }
      },
    },
    }
</script>
<style lang="scss" scoped>
    .input {
            margin-bottom: 25px;
    }
</style>


