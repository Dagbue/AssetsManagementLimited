<template>
  <transition-group name="fade" mode="out-in" tag="div" class="slides">
    <div class="slideParent" :key="image.id">
      <div class="slideImage" :style="setBackgroundImage">
        <div class="slideTitle">
          <transition appear name="fade2" mode="out-in">
            <h2>{{ image.title }}</h2>
          </transition>

          <transition appear name="fade2" mode="out-in">
            <h2>{{ image.title2 }}</h2>
          </transition>


            <transition appear name="fade2" mode="out-in">
              <p @click="onPostClick">{{ image.para }}</p>
            </transition>


<!--          <a @click.prevent="onPostClick" class="btn btn-white btn-animated"-->
<!--            >GET STARTED</a-->
<!--          >-->
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slides",
  props: ["image"],
  computed: {
    setBackgroundImage() {
      return { backgroundImage: "url(" + this.image.url + ")" };
    },
  },
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.slides .slideParent {
  height: 70vh;
  width: 100%;
}
.slides .slideImage {
  height: 100vh;
  width: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  animation-fill-mode: forwards;
  animation-name: zoom;
  animation-duration: 3s;
  animation-iteration-count: 1;
}
@keyframes zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1);
  }
}
.slideTitle {
  color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  text-align: center;
  margin-left: 13%;
  margin-right: 15%;
  letter-spacing: 0.1px;
}

.slideTitle h2 {
  /*padding-top: 10%;*/
  font-size: 25px;
  line-height: 1.5;
}

.slideTitle p {
  font-size: 20px;
  line-height: 1.5;
  background-color: #5d78ff;
  border: 1px solid #5d78ff;
  color: #FFFFFF;
  margin-right: 39%;
  margin-left: 39%;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  margin-top: 3%;
}

.slideTitle a {
  line-height: 2;
  margin-left: 40%;
  margin-right: 40%;
  margin-top: 1%;
}

.fade-enter-active {
  animation-name: fadeEnter;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
.fade-move {
  transition: all 0.5s;
}
.fade-leave-active {
  animation-name: fadeLeave;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  position: absolute;
}
@keyframes fadeEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeLeave {
  from {
    opacity: 1;
  }
  to {
    opacity: 1;
  }
}


.btn:hover {
  background-color: #071333;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  transition: 4ms ease-in;
}
.btn:active {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
  transition: 4ms ease-in;
}

.btn-white {
  background-color: #FF7A8A;
  color: white;
  font-size: 12px;
  padding: 7px 5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.5s;
  position: relative;
  border-radius: 10px;
}

.fade2-enter-from {
  opacity: 0;
}
.fade2-enter-active {
  transition: opacity 5s ease-in;
}
.fade2-leave-to {
  opacity: 0;
}
.fade2-leave-active {
  transition: opacity 5s ease-in;
}


@media (max-width: 990px) {
  .slideTitle{
    padding-top: 15%;
  }
  .slideTitle h2{
    font-size: 39px;
    margin-right: 20%;
  }
}

@media (max-width: 700px) {
  .slideTitle{
    /*padding-top: 25%;*/
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    align-content: center;
    line-height: 1.5;
  }
  .slideTitle h2{
    font-size: 20px;
    margin-left: 6%;
    margin-right: 5%;
    padding-left: unset;
  }
  .slideTitle p{
    line-height: unset;
    margin-left: 6%;
    margin-right: 5%;
    padding-left: unset;
    font-size: 18px;
  }
  .slideTitle a {
    margin-left: 28%;
    margin-right: 25%;
    font-size: 9px;
    padding: 6px 12px;
    text-align: center;
    align-content: center;
  }
}

@media (max-width: 500px) {
  .slideTitle{
    padding-top: 20%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    align-content: center;
  }
  .slideTitle h2{
    font-size: 20px;
    margin-left: 6%;
    margin-right: 5%;
    padding-left: unset;
  }
  .slideTitle p{
    line-height: unset;
    margin-left: 6%;
    margin-right: 5%;
    padding-left: unset;
  }
  .slideTitle a {
    margin-left: 28%;
    margin-right: 25%;
    font-size: 9px;
    padding: 6px 12px;
    text-align: center;
    align-content: center;
  }
}
</style>
