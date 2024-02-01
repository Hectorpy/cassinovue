<template>
    <div class="check-box">
      <label>
        <input
          @change="checkboxToggle"
          type="checkbox"
          :checked="checkboxChecked"
        />
        <span>
          <font-awesome-icon icon="fa-solid fa-check" size="1x" />
        </span>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: "check-box",
    props: {
      isChecked: Boolean,
      isTerm: Boolean,
    },
    data() {
      return {
        checkboxChecked: this.isChecked,
      };
    },
    methods: {
      checkboxToggle: function () {
        this.checkboxChecked = !this.checkboxChecked;
        if (this.isTerm) {
          this.$emit("check-term");
        }
      },
    },
  };
  </script>
  <style lang="scss" scoped>
    .check-box {
  label {
    height: 24px;
    width: 24px;
    margin-right: 8px;
    background-color: #202a39;
    display: block;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    span {
      position: absolute;
      font-size: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    span,
    input {
      display: none;
    }

    input:checked ~ span {
      background-color: #2ddc4b;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      font-size: 12px;
    }
  }
}

  </style>
  