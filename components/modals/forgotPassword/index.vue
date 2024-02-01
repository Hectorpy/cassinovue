<template>
    <div
      class="modal modal-resetpasswordfirst"
      style="max-width: 360px"
      @click="(event) => event.stopPropagation()"
    >
      <div class="modal-container">
        <button class="modal-btn-close" @click="$store.commit('closeModal')">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
        <div class="modal-resetpasswordfirst-head">
          <h2 class="modal-resetpasswordfirst-h1">Reset password</h2>
        </div>
        <div class="modal-resetpasswordfirst-body">
          <form>
            <div class="input-block">
              <span class="input-block-label">Enter your email</span>
              <div class="input-block-tag">
                <div
                  class="input input-md"
                  type="email"
                  placeholder="Enter your email"
                  required="required"
                >
                  <div class="input-inner">
                    <span class="input-icon">
                      <font-awesome-icon
                        icon="fa-solid fa-envelope"
                        color="#55657e"
                      />
                    </span>
                    <input
                      class="input-tag"
                      type="email"
                      placeholder="Enter your email"
                      required="required"
                      v-model="emailInput"
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
              </div>
            </div>
            <div class="btns-group">
              <button
                type="button"
                class="
                  button button-lg button-grey1 button-center button-only-icon
                "
                @click="
                  {
                    $store.commit('showLoginModal');
                    $store.commit('closeForgotModal');
                  }
                "
              >
                <span class="button-inner">
                  <span class="button-icon">
                    <font-awesome-icon
                      icon="fa-solid fa-chevron-left"
                      size="1x"
                    />
                  </span>
                </span>
              </button>
              <button
                type="submit"
                class="
                  button button-lg button-blue button-center button-full
                "
                style="margin-top: 0px"
              >
                <span class="button-inner">
                  <span class="button-text"> Reset password </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ForgetPasswordModal",
    data() {
      return {
        emailInput: "",
        emailLength: 0,
      };
    },
    methods: {
      getEmailLength: function () {
        this.emailLength = this.emailInput.length;
      },
      clearEmail: function () {
        this.emailInput = "";
        this.emailLength = 0;
      },
    },
  };
  </script>
  