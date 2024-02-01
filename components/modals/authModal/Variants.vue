<template>

    <div class="login-variants-row">
        <div class="variant">
            <div class="variant-tooltip">Telegram</div>
            <button class="variant-btn bg-telegram">
                <img src="@/assets/images/login-signup/telegram-plane.svg" alt="telegram icon"/>
            </button>
        </div>
        <div class="variant">
            <div class="variant-tooltip">Gmail</div>
            <button class="variant-btn bg-gmail">
                <img src="@/assets/images/login-signup/google.png" alt="google icon"/>
            </button>
            </div>
        <div class="variant">
            <div class="variant-tooltip">TronWallet</div>
            <button class="variant-btn bg-tron">
                <img src="@/assets/images/login-signup/tron-wallet.svg" alt="tron wallet icon"/>
            </button>
        </div>
        <div class="variant">
            <div class="variant-tooltip">MetaMask</div>
            <button class="variant-btn bg-metamask">
                <img src="@/assets/images/login-signup/metamask.png" alt="meta mask icon"/>
            </button>
        </div>
        <div class="variant">
            <div class="variant-tooltip">Binance Chain</div>
            <button class="variant-btn bg-binance">
                <img src="@/assets/images/login-signup/binance_chain.svg" alt="binance chain icon"/>
            </button>
        </div>
        <div class="variant">
            <div class="variant-tooltip">Coin 98</div>
            <button class="variant-btn bg-coin98">
                <img src="@/assets/images/login-signup/coin98.png" alt="binance chain icon"/>
            </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .login-variants-row {
        display: flex;
        transition: opacity 0.1s ease-in-out;
        margin-top: 8px;

        .variant-btn {
            &:hover {
            opacity: 1;
            }
        }
    }
</style>