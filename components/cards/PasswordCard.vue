<template>
    <!-- Password Card Building -->
    <div class="mail">
      <div class="mail-head">
        <div>
          <ul>
            <li>
              <font-awesome-icon icon="fa-solid fa-lock" />
              <h4>Password</h4>
            </li>
            <li><font-awesome-icon icon="fa-solid fa-check" /> Verified</li>
          </ul>
        </div>
        <!-- Password Limitation -->
        <p>
          Must contain at least 8 characters: a combination of letters and
          characters
        </p>
      </div>
      <button class="btn">Change</button>
    </div>
  </template>
  
  <script>
  import Checkbox from "@/components/views/Checkbox.vue";
  export default {
    name: "password-card",
    components: { Checkbox },
    data() {
      return {
        isChecked: false,
      };
    },
    methods: {
      checkedHandler: function () {
        this.isChecked = !this.isChecked;
      },
    },
  };
  </script>
  
  <style lang="scss">
  .mail {
    .btn {
      height: 50px;
      width: 100%;
      background-color: #2283f6;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      transition: all 0.3s;
  
      &.danger {
        background-color: #ed1d49;
  
        &:hover {
          background-color: #d02247;
        }
      }
  
      &:hover {
        background-color: #1b71da;
      }
    }
  }
  </style>
  