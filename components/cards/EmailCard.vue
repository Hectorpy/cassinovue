<template>
    <!-- Email Card Building -->
    <div class="mail">
      <div class="mail-head">
        <div>
          <ul>
            <li>
              <!-- Email -->
              <font-awesome-icon icon="fa-solid fa-envelope-circle-check" />
              <h5>My Email</h5>
            </li>
            <li><font-awesome-icon icon="fa-solid fa-check" /> Verified</li>
          </ul>
        </div>
        <p>
          Set the email to have access to your account anytime. Use this email to
          open the platform on any device.
        </p>
        <div class="mail-head-checkbox">
          <!-- Checkbox -->
          <label>
            <Checkbox :checkbox="checkedHandler" :is-checked="isChecked" />
            <span>Receive Email Promos</span>
          </label>
        </div>
      </div>
      <!-- Email Input  -->
      <div class="mail-input">
        <p>wiredo2535@yubua.com</p>
        <button>
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import Checkbox from "@/components/views/Checkbox.vue";
  export default {
    name: "email-card",
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
    background-color: #111923;
    padding: 20px;
    border-radius: 10px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
    &-head {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
  
        li {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          color: #fff;
  
          &:last-child {
            font-weight: 400;
            color: #2ddc4b;
          }
        }
      }
  
      p {
        font-size: 16px;
        font-weight: 400;
        color: #55657e;
        padding: 14px 0;
        line-height: 24px;
      }
    }
  
    &-input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #55657e;
      padding: 12px 20px;
      border-radius: 10px;
  
      p {
        padding: 0;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
      }
  
      button {
        background-color: #1c2532;
        height: 24px;
        width: 24px;
        border-radius: 4px;
        color: #55657e;
        font-size: 10px;
        transition: all 0.3s;
  
        &:hover {
          color: #93acd3;
        }
      }
    }
  }
  
  .mail-head-checkbox {
    label {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      vertical-align: middle;
  
      span {
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s;
        user-select: none;
  
        &:hover {
          color: #55657e;
        }
      }
    }
  }
  </style>
  