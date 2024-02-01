<template>
    <div class="features">
          <div class="features__inner">
              <button class="features__cell label">
                  <picture>
                      <img width="156" height="98" src="@/assets/images/landing/bg-1@1x.8f696b5.png" alt="Win Real Crypto by Free Play">
                  </picture>
                  <span class="features__label">Win Real Crypto by Free Play</span>
              </button>
              <a href="https://betfury.io/cashback" class="features__cell features__cell_small">
                  <picture>
                      <img width="94" height="98" src="@/assets/images/landing/bg-2@1x.070a6e5.png" alt="Cashback up to 25%">
                  </picture>
                  <span class="features__label">Cashback up to 25%</span>
              </a>
              <button class="features__cell features__cell_small">
                  <picture>
                      <img width="104" height="98" src="@/assets/images/landing/bg-3@1x.11fd08e.png" alt="Rakeback">
                  </picture>
                  <span class="features__label">Rakeback</span>
              </button>
              <button class="features__cell spin">
                  <div class="features__preview">
                      <p class="features__subtitle">Welcome bonus</p>
                      <span class="features__label">Get 300 Free Spins + 150% <br>on deposit up to $500</span>
                  </div>
                  <div class="bonus-preview">
                      <div class="bonus-preview__blur-bg"></div>
                      <img src="@/assets/images/landing/box.cba439e.png" alt="" class="bonus-preview__box-img">
                      <img src="@/assets/images/landing/50.29f0fe9.png" alt="" class="bonus-preview__bonus1-img">
                      <img src="@/assets/images/landing/100.2db330e.png" alt="" class="bonus-preview__bonus2-img">
                      <img src="@/assets/images/landing/300fs.b8bcb98.png" alt="" class="bonus-preview__bonus3-img">
                  </div>
              </button>
              <button class="features__cell features__cell_small">
                  <picture>
                      <img width="121" height="98" src ="@/assets/images/landing/bg-4@1x.dcbe2a3.png" alt="Fury Charge">
                  </picture>
                  <span class="features__label">Fury Charge</span>
              </button>
              <a href="https://betfury.io/boxes/all" class="features__cell features__cell_small label">
                  <picture>
                      <img width="110" height="98" src ="@/assets/images/landing/bg-5@1x.a777d9f.png" alt="Free Crypto Boxes">
                  </picture> 
                  <span class="features__label">Free Crypto Boxes</span>
              </a>
              <a href="https://betfury.io/staking" class="features__cell">
                  <picture>
                      <img width="142" height="98" src ="@/assets/images/landing/bg-6@1x.7f3e7b0.png" alt="Mining &amp; Staking up to 100% APY">
                  </picture>
                  <span class="features__label">Mining &amp; Staking up to 100% APY</span>
              </a>
          </div>
      </div>
</template>
<style lang="scss" scoped>
 .bonus-preview__box-img{
      position: absolute;
      transform: translate(-50%) scale(1);
      width: 128px;
      height: 119px!important;
      bottom: 0 !important;
      left: 50%;
      z-index: 3;
      top:initial!important;
  }
  .bonus-preview {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
  }
  .bonus-preview__blur-bg {
      position: absolute;
      bottom: -40%;
      left: 50%;
      transform: translate3d(-50%,0,0);
      width: 210px;
      height: 155px;
      background: #0035f0;
      -webkit-filter: blur(60px);
  }
  .bonus-preview__bonus1-img{
      position: absolute;
      transform: translate(-50%) scale(1);
      width: 80px;
      height: 67px!important;
      bottom: 28%!important;
      left: 38%;
      z-index: 2;
      top:initial!important;
      -webkit-animation: pulse-data-v-1ebe12ae 3s linear .8s infinite;
      animation: pulse-data-v-1ebe12ae 3s linear .8s infinite;
  }
  .bonus-preview__bonus2-img, .bonus-preview__bonus3-img {
      position: absolute;
      bottom: 0!important;
      transform: translate(-50%) scale(1);
      z-index: 4;
      top:initial!important;
  }
  .bonus-preview__bonus2-img {
      width: 118px;
      height: 77px!important;
      left: 25%;
      -webkit-animation: pulse-data-v-1ebe12ae 3s linear .5s infinite;
      animation: pulse-data-v-1ebe12ae 3s linear .5s infinite;
  }
  .bonus-preview__bonus3-img{
      width: 122px;
      height: 73px!important;
      left: 67%;
      -webkit-animation: pulse-data-v-1ebe12ae 3s linear .2s infinite;
      animation: pulse-data-v-1ebe12ae 3s linear .2s infinite;
  }
    .features {
        background: #161f2c;
        border-radius: 20px;
        padding: 10px;
        margin-bottom: 16px;
        position: relative;
        z-index: 3;
        min-height: 228px;
        .features__inner {
            display: grid;
            grid-template-columns: repeat(6,1fr);
            grid-template-rows: repeat(2,98px);
            grid-gap: 12px;
            gap: 12px;
            border-radius: 12px;
            overflow: hidden;
            @media (max-width: 1000px) {
                grid-template-columns: repeat(4,1fr);
                grid-template-rows: repeat(3,98px);
            }
            @media (max-width: 768px) {
                grid-template-columns: repeat(2,1fr);
                grid-template-rows: repeat(6,98px);
            }
            .features__cell {
                background-color: #202a39;
                border-radius: 5px;
                padding: 16px;
                width: 100%;
                display: flex;
                align-items: center;
                text-decoration: none;
                position: relative;
                overflow: hidden;
                transition: background-color .1s ease-in-out;
                
                picture {
                    pointer-events: none;
                }
                img {
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    object-fit: cover;
                }
                
            }
            .features__cell:first-child {
                grid-row: 1/2;
                grid-column: 1/3;
                min-height: 98px;
                @media (max-width: 1000px) {
                    grid-row: 1/2;
                    grid-column: 3/5;
                }
                @media (max-width: 768px) {
                    grid-row: 4/5;
                    grid-column: 1/3;
                }
            }
            .features__cell:nth-child(2) {
                grid-row: 2/3;
                grid-column: 1/2;
                min-height: 98px;
                @media (max-width: 1000px) {
                    grid-row: 3/4;
                    grid-column: 1/2;
                }
            }
            .features__cell:nth-child(3) {
                grid-row: 2/3;
                grid-column: 2/3;
                min-height: 98px;
                @media (max-width: 1000px) {
                    grid-row: 3/4;
                    grid-column: 2/3;
                }
            }
            .features__cell:nth-child(4) {
                grid-row: 1/3;
                grid-column: 3/5;
                min-height: 208px;
                @media (max-width: 1000px) {
                    grid-row: 1/3;
                    grid-column: 1/3;
                }
            }
            .features__cell:nth-child(5) {
                grid-row: 1/2;
                grid-column: 5/6;
                min-height: 98px;
                @media (max-width: 1000px) {
                    grid-row: 2/3;
                    grid-column: 3/4;
                }
                @media (max-width: 768px) {
                    grid-row: 5/6;
                    grid-column: 1/2;
                }
            }
            .features__cell:nth-child(6) {
                grid-row: 1/2;
                grid-column: 6/7;
                min-height: 98px;
                @media (max-width: 1000px) {
                    grid-row: 2/3;
                    grid-column: 4/5;
                }
                @media (max-width: 768px) {
                    grid-row: 5/6;
                    grid-column: 2/3;
                }
            }
            .features__cell:nth-child(7) {
                grid-row: 2/3;
                grid-column: 5/7;
                min-height: 98px;
                @media (max-width: 1000px) {
                    grid-row: 3/4;
                    grid-column: 3/5;
                }
                @media (max-width: 768px) {
                    grid-row: 6/7;
                    grid-column: 1/3;
                }
            }
            .features__subtitle {
                font-weight: 700;
                font-size: 11px;
                line-height: 16px;
                color: #93acd3;
                margin-bottom: 6px;
                text-transform: uppercase;
                letter-spacing: .06em;
            }
            .features__label {
                font-weight: 700;
                font-size: 16px;
                color: #fff;
                position: relative;
                z-index: 1;
                max-width: 65%;
                text-align: left;
            }
            .features__cell_small{
                padding: 12px;
                .features__label {
                    font-size: 14px;
                    max-width: 75%;
                }
            }
            .spin {
                justify-content: center;
                align-items: flex-start;
                padding-top: 16px;
                .features__label {
                    max-width: none;
                }
            }
            .features__cell.label {
                border-start-start-radius: 14px;
                &:before{
                    text-align: left;
                    padding-left: 7px;
                    padding-top: 3px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    width: 95px;
                    height: 23px;
                    content: "Free-to-play";
                    font-style: italic;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 10px;
                    color: #fff;
                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='95' height='23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23a)'%3E%3Cpath d='M0 12A12 12 0 0112 0h83l-3.6 11.2a12 12 0 01-10.9 8.31L0 23V12z' fill='%232283F6'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='a' x='0' y='0' width='95' height='24' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='1'/%3E%3CfeGaussianBlur stdDeviation='1.5'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'/%3E%3CfeBlend in2='shape' result='effect1_innerShadow_791_18552'/%3E%3C/filter%3E%3Cfilter id='b' x='5.7' y='4.88' width='80.9' height='11.24' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_791_18552'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_791_18552' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
                }
            }
            a{
                color: #2283f6;
                text-decoration: underline;
                padding: 0;
                border: none;
                cursor: pointer;
                transition: color .1s ease-in-out;
            }
        }
    }
    </style>