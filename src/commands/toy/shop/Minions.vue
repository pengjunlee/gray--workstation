<template>
  <div id="container">
    <!-- 小黄人 -->
    <div class="minions">
      <!-- 身体 -->
      <div class="body">
        <!-- 裤子 -->
        <div class="trousers">
          <!-- 吊带 -->
          <div class="condole-belt">
            <div class="left"></div>
            <div class="right"></div>
          </div>
          <!-- 裤子突出部分 -->
          <div class="trousers-top"></div>
          <!-- 裤袋 -->
          <div class="pocket"></div>
          <!-- 线条 -->
          <span class="line-left"></span>
          <span class="line-right"></span>
          <span class="line-bottom"></span>
        </div>
      </div>
      <!-- 头发 -->
      <div class="hair">
        <span class="left-hair-one"></span>
        <span class="left-hair-two"></span>
      </div>
      <!-- 眼睛 -->
      <div class="eyes">
        <!-- 左眼 -->
        <div class="left-eye">
          <div class="left-black-eye">
            <div class="left-white"></div>
          </div>
        </div>
        <!-- 右眼 -->
        <div class="right-eye">
          <div class="right-black-eye">
            <div class="right-white"></div>
          </div>
        </div>
      </div>
      <!-- 嘴巴 -->
      <div class="mouse">
        <div class="mouse-shape"></div>
      </div>
      <!-- 双手 -->
      <div class="hands">
        <div class="left-hand"></div>
        <div class="right-hand"></div>
      </div>
      <!-- 双脚 -->
      <div class="feet">
        <div class="left-foot"></div>
        <div class="right-foot"></div>
      </div>
      <!-- 脚底阴影 -->
      <div class="ground-shadow"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#container {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 550px;
  width: 100vw;
  background-color: #607d8b;
}
.minions {
  display: inline-block;
  position: relative;
  width: 240px;
  height: 400px;
}

.body {
  position: absolute;
  width: 240px;
  height: 400px;
  border: 5px solid #000;
  border-radius: 115px;
  background-color: rgb(249, 217, 70);
  overflow: hidden;
  z-index: 2;
}

.body .condole-belt {
  position: absolute;
}

.body .condole-belt .left,
.body .condole-belt .right {
  width: 100px;
  height: 16px;
  border: 5px solid #000;
  background-color: rgb(32, 116, 160);
  position: absolute;
  top: -90px;
  left: -35px;
  z-index: 2;
  transform: rotate(45deg);
}

.body .condole-belt .left {
  top: -88px;
  left: 165px;
  transform: rotate(-45deg);
}

.body .condole-belt .left::after,
.body .condole-belt .right::after {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  top: 4px;
  left: 88px;
}

.body .condole-belt .left::after {
  left: 5px;
}

.body .trousers {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-top: 6px solid #000;
  background-color: rgb(32, 116, 160);
}

.body .trousers-top {
  width: 160px;
  height: 60px;
  border: 6px solid #000;
  border-bottom: none;
  border-radius: 0 0 5px 5px;
  background-color: rgb(32, 116, 160);
  position: absolute;
  bottom: 100px;
  left: 34px;
}

.body .pocket {
  width: 60px;
  height: 45px;
  border: 6px solid #000;
  border-radius: 0 0 25px 25px;
  position: absolute;
  bottom: 65px;
  left: 84px;
}

.body .line-left,
.body .line-right {
  width: 30px;
  height: 30px;
  border-bottom: 6px solid #000;
  position: absolute;
}

.body .line-left {
  right: 0;
  bottom: 63px;
  border-bottom-right-radius: 100px;
  border-right: 6px solid #000;
  transform: rotate(75deg);
}

.body .line-right {
  left: 0;
  bottom: 60px;
  border-bottom-left-radius: 100px;
  border-left: 6px solid #000;
  transform: rotate(-75deg);
}

.body .line-bottom {
  height: 40px;
  border: 3px solid #000;
  border-radius: 3px;
  position: absolute;
  left: 118px;
  bottom: 0px;
}

.hair {
  position: relative;
}

.hair .left-hair-one {
  width: 130px;
  height: 100px;
  border-radius: 50%;
  border-top: 8px solid #000;
  position: absolute;
  left: 17px;
  top: -17px;
  transform: rotate(27deg);
  animation: lefthair 2s ease-in-out infinite;
}

@keyframes lefthair {
  0%,
  25%,
  31%,
  100% {
  }
  30% {
    transform: rotate(31deg) translate3d(-3px, -1px, 0);
  }
}

.hair .left-hair-two {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-top: 6px solid #000;
  position: absolute;
  left: 45px;
  top: -10px;
  transform: rotate(15deg);
}

.eyes {
  position: relative;
  z-index: 3;
}

.eyes .left-eye,
.eyes .right-eye {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  border: 6px solid #000;
  background-color: #fff;
  position: absolute;
  top: 60px;
  left: 27px;
}

.eyes .left-eye {
  left: 124px;
}

.eyes .left-eye .left-black-eye,
.eyes .right-eye .right-black-eye {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  top: 24px;
  left: 22px;
  animation: blackeye 5s ease-in infinite;
}

@keyframes blackeye {
  0%,
  20%,
  50%,
  70%,
  100% {
    transform: translateX(0px);
  }
  30%,
  40% {
    transform: translateX(15px);
  }
  80%,
  90% {
    transform: translateX(-15px);
  }
}

.eyes .left-eye .left-white,
.eyes .right-eye .right-white {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 7px;
  left: 17px;
  animation: white-eye 5s ease-in-out infinite;
}

@keyframes white-eye {
  0%,
  20%,
  50%,
  70%,
  100% {
    transform: translateX(0px);
  }
  30%,
  40% {
    transform: translate3d(3px, 4px, 0);
  }
  80%,
  90% {
    transform: translate3d(-15px, 4px, 0);
  }
}

.eyes .left-eye .left-white {
  top: 4px;
  left: 17px;
}

.eyes .left-eye::after,
.eyes .right-eye::after {
  content: "";
  width: 28px;
  height: 18px;
  background-color: #000;
  position: absolute;
  left: -30px;
  top: 37px;
  transform: skewX(20deg) rotate(7deg);
}

.eyes .left-eye::after {
  left: 89px;
  top: 37px;
  transform: skewX(-20deg) rotate(-7deg);
}

.mouse {
  position: relative;
}

.mouse .mouse-shape {
  width: 55px;
  height: 35px;
  border: 5px solid #000;
  border-bottom-left-radius: 30px;
  background-color: #fff;
  position: absolute;
  top: 175px;
  left: 98px;
  z-index: 3;
  transform: rotate(-35deg);
  animation: mouse 5s ease-in-out infinite;
}

@keyframes mouse {
  40%,
  43% {
    width: 45px;
    height: 25px;
    top: 180px;
  }
  0%,
  35%,
  48%,
  100% {
    width: 55px;
    height: 35px;
    top: 175px;
    transform: rotate(-35deg);
  }
}

.mouse .mouse-shape::after {
  content: "";
  width: 70px;
  height: 32px;
  border-bottom: 5px solid #000;
  border-radius: 35px 26px 5px 5px;
  background-color: rgb(249, 217, 70);
  position: absolute;
  top: -16px;
  left: 3px;
  transform: rotate(34deg);
  animation: mouse-mask 5s ease-in-out infinite;
}

@keyframes mouse-mask {
  40%,
  43% {
    width: 60.5px;
    top: -19.3px;
    left: 1.5px;
  }
  0%,
  35%,
  48%,
  100% {
    width: 70px;
    top: -16px;
    left: 3px;
    transform: rotate(33deg);
  }
}

.hands {
  position: relative;
}

.hands .left-hand,
.hands .right-hand {
  width: 80px;
  height: 80px;
  border: 6px solid #000;
  border-radius: 25px;
  background-color: rgb(249, 217, 70);
  position: absolute;
  top: 220px;
  left: -23px;
  transform: rotate(40deg);
  animation: right-hand 0.8s ease-in-out infinite;
}

@keyframes right-hand {
  0%,
  50%,
  100% {
    transform: rotate(40deg);
  }
  30% {
    transform: rotate(37deg) translateX(1px);
  }
}

.hands .left-hand {
  left: 182px;
  top: 220px;
  transform: rotate(-40deg);
  animation: left-hand 0.8s ease-in-out infinite;
}

@keyframes left-hand {
  0%,
  50%,
  100% {
    transform: rotate(-40deg);
  }
  30% {
    transform: rotate(-37deg) translateX(-1px);
  }
}

.hands .left-hand::after,
.hands .right-hand::after {
  content: "";
  width: 6px;
  border: 3px solid #000;
  border-radius: 3px;
  position: absolute;
  left: 13px;
  top: 50px;
  transform: rotate(90deg);
}

.hands .left-hand::after {
  left: 53px;
  top: 50px;
  transform: rotate(-90deg);
}

.feet {
  position: relative;
}

.feet .left-foot,
.feet .right-foot {
  width: 36px;
  height: 50px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 9px;
  background-color: #000;
  position: absolute;
  top: 406px;
  left: 88px;
  transform-origin: right top;
  animation: right-foot 0.8s ease-in-out infinite;
}

@keyframes right-foot {
  0%,
  50%,
  100% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(10deg);
  }
}

.feet .left-foot {
  border-bottom-right-radius: 9px;
  border-bottom-left-radius: 6px;
  left: 130px;
  transform-origin: left top;
  animation: left-foot 0.8s ease-in-out infinite;
}

@keyframes left-foot {
  0%,
  50%,
  100% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(-10deg);
  }
}

.feet .left-foot::after,
.feet .right-foot::after {
  content: "";
  width: 60px;
  height: 35px;
  border-radius: 20px 10px 21px 15px;
  background-color: #000;
  position: absolute;
  left: -36px;
  top: 14.4px;
  transform: rotate(5deg);
}

.feet .left-foot::after {
  border-radius: 10px 20px 15px 21px;
  left: 13px;
  transform: rotate(-5deg);
}

.ground-shadow {
  width: 200px;
  height: 2px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  top: 455px;
  left: 25px;
}

</style>
