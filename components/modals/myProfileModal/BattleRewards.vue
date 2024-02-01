<template>
    <div class="battles-rewards">
        <div class="battles-rewards__top-title">
            TOP Battles Rewards
        </div>

        <div class="battles-table">
            <div class="no-data">
                <span>No information</span>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .battles-rewards {
        .battles-rewards__top-title {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .battles-table {
            margin-top: 10px;
            overflow-y: auto;
            .no-data {
                min-height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin-bottom: 44px;
                span {
                    white-space: nowrap;
                    font-weight: 500;
                    text-align: center;
                    color: #55657e;
                }
            }
        }
    }
</style>