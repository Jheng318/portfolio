<template>
  <div class="loaderBG">
    <div class="loader-1"><span></span></div>
  </div>
</template>
<style lang="css" scoped>
.loaderBG {
  position: absolute;
  background-color: rgb(226 232 240 / 0.2);
  inset: 0px;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader-1 {
  height: 32px;
  width: 32px;
  -webkit-animation: loader-1-1 4.8s linear infinite;
  animation: loader-1-1 4.8s linear infinite;
}
@-webkit-keyframes loader-1-1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes loader-1-1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader-1 span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 32px;
  width: 32px;
  clip: rect(0, 32px, 32px, 16px);
  -webkit-animation: loader-1-2 1.2s linear infinite;
  animation: loader-1-2 1.2s linear infinite;
}
@-webkit-keyframes loader-1-2 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(220deg);
  }
}
@keyframes loader-1-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(220deg);
  }
}
.loader-1 span::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 32px;
  width: 32px;
  clip: rect(0, 32px, 32px, 16px);
  border: 4px solid #65556b;
  border-radius: 50%;
  -webkit-animation: loader-1-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  animation: loader-1-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}
@-webkit-keyframes loader-1-3 {
  0% {
    -webkit-transform: rotate(-140deg);
  }
  50% {
    -webkit-transform: rotate(-160deg);
  }
  100% {
    -webkit-transform: rotate(140deg);
  }
}
@keyframes loader-1-3 {
  0% {
    transform: rotate(-140deg);
  }
  50% {
    transform: rotate(-160deg);
  }
  100% {
    transform: rotate(140deg);
  }
}
</style>
