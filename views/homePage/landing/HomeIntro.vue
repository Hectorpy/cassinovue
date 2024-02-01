<template>
    <div class="intro">
        <div class="intro__inner">
            <h1 class="intro__title"><span>Leading</span> Crypto Casino</h1> 
            <h2 class="intro__subtitle"> Enjoy 5000+ crypto games, fast payouts and 24/7 live support. Make the best of the superior Bitcoin Casino.</h2>
            <div class="login">
                <button @click="$store.dispatch('setModalType', 'signup')" type="button" class="button login__btn button_xl button_red button_center">
                    <span class="button__inner"><span class="button__text">{{ $t("signup") }}</span></span>
                </button>
                <div class="login__hint">
                    <span>Get <b>300</b> Free Spins + <br> <b>150%</b> on your deposit</span>
                    <img width="37" height="37" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEVMaXHBfSerFSzmJ0LSjTvXKEPyrU3Of1rUZkvCgTf7u13LgyzeFzToijvKGTH6QFf/WGiYMCC0VCaGCyNVBRZ0TBnXTDf+55aHEbVYAAAACnRSTlMA////ycj/ImCe9pb1CAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAllJREFUSImN1emWgyAMBWABDXtQsfj+bzonwYp16TTzY7b7GYxUuq6VHobB6O1nY63RnTbGmO6pTEpKDabrtLa9915YM4yJ/3JbekyKynCaKo5jSgqHbw2oSssTUE+A2nMhllJqvrYw+tuKqBKptAMcLkIbKxpItBAcG8AToaFE3wCv/NAh5+ll91nRUGKM0Y/jDsgiNeJecnlR0XOh/OooHb0f95umC6uSVErcYOL8LAR3sW5dgUgFKPOylDEpXGSpDbACQevoTWcA1tVB9GVMmBeuLNktWRYCex4cWALg1jUiypqmIMPM3yTmvLxeIoJz4EUFAECLqFfNmSJTzjlLmbeawbnohRC205yPNBmaNyLmaaaqvzBBxELpD0DDDCGgnGaecvRluwCVnMUVqDSmUmr6TegSKKU8gHoTUQUVlCr8UFpBqfEK6j10nY0AsG1sxyPe0s7BXOOtAz26HmIExS3QOSI17cD7MzC0OfrtHoJi4NZ1pXSkD+kZaAKWbqKwYECE4/7aQTcQAm27CmgxXtDXdxAUQgPPHQzPNYTwCZ47mB0EpD1z6PA/mDxsA+W9M09vIA5AH0GEuo9vgP8AwCBMjAG2vSmeO8Ab8DPb/t3AdAWqAXftMG1Lqm+l/gzeY7106A+gnMDtkvr6KvsBzB/Atrn+BnR/C/wV2P392kAd03lK8wl0ut8edfwC7MfBYvEE/AnY86FiNgC3HezNqWWGCuAKhttDrtNDBXAG5j7PTXx9Nx823/Ac59OOWzTwPV5JA59z/NqEX6M/xZn0cTsAfy1tn+N/5Lw6Ublu/TcAAAAASUVORK5CYII=" alt="">
                </div>
            </div>
        </div>
        <picture>
            <img fetchpriority="high" rel="preload" width="526" height="308" src="@/assets/images/landing/racoon@1x.799279f.jpeg" alt="">
        </picture>
    </div> 
</template>
<script>

    export default {
        data(){
            return {
              modalType: '',
            }
        },
        methods: {

        }

    }
</script>
<style lang="scss" scoped>
    .intro {
        display: flex;
        align-items: center;
        position: relative;
        min-height: 308px;
        @media (max-width: 750px) {
            min-height: auto;
        }
        picture {
            pointer-events: none;
            position: absolute;
            top: 0;
            bottom: 0;
            height: 100%;
            right: -60px;
            @media (max-width: 950px){
                right: -158px;
            }
            @media (max-width: 750px){
                display: none;
            }
        }
        .intro__inner {
            margin-top: 20px;
            z-index: 1;
            max-width: 550px;
            @media (max-width: 750px) {
                margin-top: 0;
                padding-top: 15px;
                padding-bottom: 35px;
            }
            @media (max-width: 950px) {
                max-width: 450px;
            }
            h1 {
                margin-top: 0;
                margin-bottom: 1rem;
                font-weight: 700;
                line-height: 1.2;
                color: #fff;
            }
            .intro__title {
                font-size: 34px;
                font-weight: 700;
                @media (max-width: 750px) {
                    font-size: 28px;
                }
                span {
                    color: #ed1d49;
                }
            }
            .intro__subtitle {
                line-height: 1.4;
                font-weight: 500;
                font-size: 16px;
                color: #55657e;
                margin-bottom: 23px;
                @media (max-width: 750px) {
                    font-size: 14px;
                }
                h2 {
                    font-size: 30px;
                    color: #1b1c1f;
                    line-height: 36px;
                }
            }
            .login {
                display: flex;
                align-items: center;
                position: relative;
                .button_red.button {
                    background-color: #ed1d49;
                    color: #fff;
                    border-color: transparent;
                }
                .login__btn {
                    overflow: hidden;
                    box-shadow: 0 0 25px rgb(237 29 73 / 50%);
                    transition: all .1s;
                }
                .login__hint {
                    background: linear-gradient(270deg,#fffafb .1%,#ffe7ec);
                    margin-left: -10px;
                    padding-right: 5px;
                    border-radius: 0 22px 22px 0;
                    display: flex;
                    align-items: center;
                    @media (max-width: 400px){
                        > span {
                            padding: 9px 8px 9px 16px!important;
                        }
                    }
                    > span {
                        padding: 9px 10px 9px 22px;
                        line-height: 1.3;
                        font-size: 14px;
                        color: #55657e;
                        
                        > b {
                            color: #000;
                            font-weight: 600;
                        }
                    }
                }
            }
        }

    }
</style>