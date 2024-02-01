<template>
    <div>
        <div class="profile" :style="`width: ${size}px; height:${size}px;`">
            <svg  style="z-index: 125;" :width="size-4" :height="size-4" class="profile-arc">
                <path d="M 64.54741405544378 2.6800992201805016 A 57.5 57.5 0 0 0 60 2.5" fill="none" stroke="#1BB83D" stroke-width="5"></path>
            </svg>
            <div class="user profile-avatar">
                <div class="user-avatar" :style="`width: ${size - 12}px; height:${size - 12}px;`">
                    <div class="user-inner" style="overflow: hidden;">
                        <picture>
                            <img  src="@/assets/images/avatar/avatar1.avif" alt="avatar" style="transform: translateX(0px)"/>
                        </picture>
                    </div>
                </div>
            </div>
        </div>
        <div v-if ="levelShow" style="display: flex; justify-content: center; align-items: center;">
            <div class = "level-txt" :style="`font-size: ${fontSize}px`">1 LVL</div>
        </div>
        <div v-if ="nameShow" style="display: flex; justify-content: center; align-items: center;">
            <div class="name">User97</div>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'avatar',
        props: {
            size: Number,
            levelShow: Boolean,
            nameShow: Boolean,
            fontSize: Number,
        }
     }
</script>
<style lang="scss" scoped>
    .name {
        font-weight: 600;
        font-size: 16px;
      }
    .level-txt {
        font-weight: 700;
        font-size: 12px;
        padding: 2px 9px;
        line-height: 1;
        background-color: #ed1d49;
        border-radius: 8px;
        position: relative;
        margin-top: -3px;
        outline: 2px solid #1c2532;
        text-align: center;
        // width: 75%;
    }
    .profile {
        display: flex;
        position: relative;
        flex-direction: column;
        cursor: pointer;

        .profile-arc,
        .profile-avatar {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
    }
    .user {
        display: flex;
        align-items: center;
        .user-avatar {
            position: relative;
            flex-shrink: 0;
        }
        .user-inner {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: hidden;
            border-radius: 50%;

            img {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                user-select: none;
                pointer-events: none;
                display: block;
                width: auto;
                height: 100%;
                max-width: none;
            }
        }
    }
</style>