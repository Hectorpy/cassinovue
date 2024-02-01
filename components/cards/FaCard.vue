<template>
    <div class="mail">
        <div class="mail-head">
            <div>
                <ul>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="18px"
                            height="18px"
                        >
                            <path
                                fill="#FFC107"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                            <path
                                fill="#FF3D00"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            />
                            <path
                                fill="#4CAF50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            />
                            <path
                                fill="#1976D2"
                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                        </svg>
                        <h4>2FA</h4>
                    </li>
                    <li class="danger">
                        <font-awesome-icon icon="fa-solid fa-xmark" /> 2FA Not
                        activated
                    </li>
                </ul>
            </div>
            <p>
                2nd security layer of your BetFury account. Set 2FA to protect
                your account (available only when signed up with Google or when
                email and password are set)
            </p>
        </div>
        <button class="btn danger">Active</button>
    </div>
</template>

<script>
import Checkbox from "@/components/views/Checkbox.vue";
export default {
    name: "fa-card",
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
    &-head {
        ul {
            li {
                &:last-child {
                    &.danger {
                        color: #ed1d49;
                    }
                }
            }
        }
    }

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
