<template>
    <div class="notifies__date-label">
        <p class="notifies__label">09/23/2022</p>
        <div class="notify">
          <div class="notify__inner">
            <div class="notify__icon">
              <img :src="require('@/assets/images/personals/' + data.img)" alt="5" class="notify__img">
            </div>
            <div class="notify__content">
              <div class="notify__header">
                <span class="datetime notify__date">{{data.date}}</span>
                <span class="notify__chip" v-if = "data.isNew">New</span>
              </div>
              <p class="notify__title">{{data.title}}</p>
              <p class="notify__text">{{data.desc}}</p>
            </div>
          </div>
          <div class="notify__footer">
            <div>
              <div>
                <a class="link link_sm">
                    <span class="link__text">Receive now</span>
                    <font-awesome-icon icon="fa-solid fa-chevron-right" class="ms-2"/>
                </a>
              </div>
            </div>
            <button class="notify__mark-btn">
                <span class="mark-read mark-btn_text">Mark as read</span>
                <svg width="16" height="16" focusable="false" aria-hidden="true" class="">
                    <use xlink:href="/_nuxt/img/svg-sprite.9307dce.svg#icon-checkmark-circle" class="svg-use"></use>
                </svg>
            </button>
          </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'PersonalCard',
    props: {
      data: Object,
    },
  }
</script>
<style lang="scss" scoped>
  .notifies__date-label {
    margin-bottom: 12px;
    .notifies__label {
      font-weight: 600;
      font-size: 11px;
      line-height: 16px;
      color: #55657e;
      padding-bottom: 4px;
      border-bottom: 1px solid #202a39;
      margin-bottom: 12px;
    }
    .notify {
        position: relative;
        border-radius: 8px;
        background-color: #1c2532;
        cursor: pointer;
        transition: background-color .1s ease-in-out,border-color .1s ease-in-out;
        .notify__inner {
          position: relative;
          min-height: 44px;
          display: flex;
          padding: 12px;
          .notify__icon {
            flex-direction: column;
            min-width: 40px;
            margin-right: 12px;
            display: flex;
            align-items: center;
            .notify__img {
              width: 40px;
              height: 40px;
            }
          }
          .notify__content{
            flex-grow: 1;
            .notify__header {
              display: flex;
              justify-content: space-between;
              height: 18.5px;
              .notify__date {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 18px;
                    color: #55657e;
                }
                .notify__chip {
                  background-color: #1bb83d;
                  text-transform: uppercase;
                  font-weight: 700;
                  padding: 1px 7px;
                  font-size: 11px;
                  letter-spacing: .06em;
                  border-radius: 56px;
                  display: flex;
                  align-items: center;
                }
                .datetime {
                    white-space: nowrap;
                }
            }
            .notify__title {
              font-weight: 600;
              font-size: 14px;
              margin-bottom: 0.25em;
            }
            .notify__text {
              font-size: 12px;
              color: #93acd3;
              margin-bottom: 0;
              overflow: hidden;
              transition: all .3s;
            }
          }
        }
        .notify__footer {
          display: flex;
          align-items: center;
          border-top: 1px solid #2a3546;
          background-color: #202a39;
          justify-content: space-between;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          padding: 10px 12px;
          .notify__mark-btn {
            color: #55657e;
            font-weight: 600;
            letter-spacing: .02em;
            font-size: 11px;
            margin-left: auto;
            display: flex;
            align-items: center;
            grid-gap: 4px;
            gap: 4px;
            transition: color .1s ease-in-out;
          }
        }
      }
  }
</style>