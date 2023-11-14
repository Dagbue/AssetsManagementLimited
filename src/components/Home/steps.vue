<template>
  <div class="alpha">
    <div class="section-alpha">

      <div class="section-1">

        <div class="section-1-content">
          <img class="image-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/ElEQVR4nO1ZW2sTQRTO/7C+Wf9B6U2TolmpFwRFkm4qvmShD+2rD4qCCuJDbpvHglIhKdrGXSlYg+KD4C8widEm5ibuNkIDtii2CfSUM+nGydU0m2Q3sh8cWDabme87852Z2R2TqQfwB4QhPiiG+KCwQyIgCPzyi2HTIMCP5ANigQ+KUBUBseB5unrMpHfwJPMi+ALiOoopCxJek3tBYcWkd/DENiIgceWe+9nL44ej8FMTUtOz3JCVdYasLLfDODhQos4mVNz2Ll5U/n/Tt3i51bMM1Sbpg+UEKzs33D3yDq5Ad9KOANfS8z0kjuFaWt1rVwCjCHFwhTM35tTXDGa+UQf/EnCUYJq0zzic6muGts2XVAZodEsAjc/JNC1Afc3QGanFYzGsmvwTMVzXLt1nTwVkpDwhoIZ8VsprJ6BXYAwBFIwR6ACMYSEKhoUGzUJ/UimQvV5I2O0QM5tJ4LXs88FuOq1fAfvFIkguF0RHRyEyMtIw8DfJ7Yb9UklfAvaLRUjPzzclXhvphYWWIph+C8DMt0teCdnj0YcA9Hwr29Dx6fw0RA6fjY6NwW4mo70AzGRb5K9eASkXh6ywXBEh+3zaC9iw2aoL1Xy6jnzcdg3k7xuQ//0Dvn14C9FTk+R+YmZGewExi6VCNHbpAkjJj5B89OAvedYOspQg5HPvwxXy5HmLRV8CEndvQf5XnkTy4T2Iz7KwmU+VM//uFUQmJ6pGJjY1pb0AXKRoUkhcEbG5lStn/s0aRCbG66yV0IOFsBBriSXv3ymLQPLrAkTH68mTIvb7tReA24NG0yiORHZthUyXDVdlvUyjCNweHHkhazKFarOVKJXI9mBgtxIIJISLWjPLKLbBzOtuM1dbE0gSZxicYjHwWub5pp6vhfFKScN4pewAjPFVgoJhoQ7AGBaiYGW57coBx9f2PouoQTyZ6vIBB8sJ9JD2M6ysM6RawFk7d5Jhua2+k3dwhXPXnSdM3QCeFuKBG22n3mWd28bMd428AQP/OQ4AR/nDvETNwhAAAAAASUVORK5CYII="/>
          <p class="text-1">Step 1</p>
          <p class="text-2">Complete the Application</p>
          <p class="text-3">It only takes a few minutes</p>
        </div>

        <div class="section-1-content">
          <img class="image-2" src="data:image/png;base64,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"/>
          <p class="text-1">Step 2</p>
          <p class="text-2">Fund Your Account</p>
          <p class="text-3">Connect your bank or transfer an account</p>
        </div>

        <div class="section-1-content">
          <img class="image-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF30lEQVR4nO2W+1MTVxTHM22nMx377/CD+hfoL2W0MYk8hGA2NuGRZBNIKJACIgoBRAcJ1hZB8dWxQB0oFqQ+Cm1htIpQkEcEedbXKCBCBE7nXtmbzWbRhL0gcfY7c4bsPWfP47P37qJQyJIlS5YsWbJkhSCzuegLU0Z+kYaxnlMz1j613jar0duAbzmuMmzC9VBjuiIisAnXUU1UG/VgyjzkQj0pNkIanXV3Zv5RL26csa5qZDiJMQTAe/KgnvYy7K51G1ypVH6qYqwuNa9x9Hs1oxXDAQg+D1vodDo/oQ5AxVhcaoZFBXgF2VWNVowPQPB5VAx7hOrwGp15t1rHAmekIG9NaLRiCIAQ82gYSySV4ZVK5+fq/ZbBcAOg1lk8qHfJAFQJFpVKZwG+cQWF6+sRwwFYUx7GoqQB4LxqvwX4RgoK1tcjhgBYS54E81nJAPYkmPtV+83AN19B//X1iPEBWFOePukAtOaZPQlm4BtXULi+HjEcgDXl0ZpnKOwAEwjNVzDQRzvGB2BteWQAUrVHawKhEeIiPloxmvhkqNgRSXaAe2ckXgs1j2QASm0KCI0rKOajFYMG5obnQwg1j3QA8SkgNFJQxEcrpm3b9gAA7Vu3hZyHAoBkEJqvYKCPVky7CIC2rdtDyhNvtM9JBvB1fDIIjSso5qMVU77jqwAA5TsjQ8rT0zswJB1AXDIIjRQU8dGKUcclgaegkAw/efw4WOwHg85z1F0FSBQAJIHQfAUDfbRi0g8W4wE4AEhXW28FlYcxZ8DM7KvNA+BCbQO8eDkNpvS8oPNcaWr1A7C8vAzz8wuwz5AKjhwXjIxNwIPBh6Di/SOE7kNnv6vnAb6385/70gHs3pcIQuMKivmEMdokB8wvLOCG7nX3BZUHDfLk6XM/APd7B/B134AHlpaWgFP1hVq/PJU1l/E6Am50HPrwAH6qbwK+8kvc781jz3Hh2GfPXxAAJRVnSA4E4O87Xfj36/l5OFpRhfOgHeb1evFuKXJXQ2zStxQAxCaC0EjjIj5+zOFjJ2F25Sy2dd7Ff8cn/wOVNuWdeeobr+HYptY2AmBfcgb0Dw3Do/FJyHaV4+E67/bguJ6+AcgrKQfP8Ci+bv2jA/upANgVawShcY2L+fgxzTfacUO9Ax6IN2XB+ORjfF157rJoHlvWEahraIbZV3M4Lqe4ggDgBuKbOauQHK/BhyP479Tjp6BjszcegCO3CEZGx2HAMwzWrMOQV+KG6ZlZ3JSrvAo3g7YlEhowzpjmdwQ6VrY0p37PCH7q7wKA7NIvV8k9i0tLkF3k9vNLBxBjAKERADEGUCekQH1ji9+LaXFxiWzHkbFJPAjXUNe//W+3d8tNkqfs1Fm8Njf3Gppv/Am5JSfJPe8DoDVlwZNnb1+Ytb+2BvglA7h9r/tBQelJiGIsAQDs2YUwNjFF6Nc3/Q6N1275wThx+qJfQ45DpTgWQXKfPg+ush/JTjlR6R8bDABkZT/UQEPzdYhPyaQPAMhTXYTu3n6ovlgH35+5BO0dd8igoxNTkFVQRoqilxQ6i6PjkxAn0lTzzb/wfUPDj+Budx/+jT5zYsMFA4B7IGI+yQAu1DVBb78HAxAKPckrv10HrdkZUlNGex550SF5vW/AllO8OQHEriTS23Lg2KkauN7eCS+nZ/AT/m7lcxRqU8hqfm4gAC43tKwat2kAxIYwXDAx6LP4aGwCHxOxHfTRA4gNMkYGECHvAJCPQIT8DgD5JZgkfwXgg3wGY5LSw/YzGJOYviwZQLTR4Q1XAFFGu1cygKhv0kbCFsCB1GHJADSMtTRcAWgYa7FkANEsu0V4DMIBQLTB8UZpMHypoKG9OmtBuAFQ6235CprS6K23YxLT0ZuVFOSuxYxWDAcglDyaA9ZOBW05nc7POAibGQAaHvWqWC+pGPZIZn7p8mYDgHpS6y2HFRshlmW3JKbl1mv0tuEog90bbXRsOABUE9VGPSSm5tahnjZkeFmyZMmSJUuW4mPR/wLN7i/dxv4GAAAAAElFTkSuQmCC"/>
          <p class="text-1">Step 3</p>
          <p class="text-2">Get Started Trading</p>
          <p class="text-3">Take your investing to the next level</p>
        </div>

      </div>

      <div class="btn-part" @click="onPostClick">
        <p class="btn">Open An Account</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "steps",
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
  },
}
</script>

<style scoped>
.alpha{
  margin-top: 6%;
}
.section-1{
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-left: 7%;
  margin-right: 7%;
}

.section-alpha{
  background-image: url("https://www.interactivebrokers.com/images/web/candlestick-bkgd.jpg");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 5%;
  padding-bottom: 5%;
}

.btn{
  margin-top: 3%;
  color: #ffffff;
  background-color: #D23535;
  border: 1px solid #D23535;
  padding: 10px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 18%;
  border-radius: 5px;
}

.btn:hover{
  background-color: #ffffff;
  color: #124DA8;
  border: 1px solid #124DA8;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 5px rgba(20, 49, 89, 0.6);
}

.section-1-content{
  color: #ffffff;
}

.text-1{
  font-size: 18px;
  padding-bottom: 0.8%;
}

.text-2{
  font-size: 22px;
  padding-bottom: 0.8%;
}

.image-2{
  height: 70px;
  width: 70px;
  object-fit: cover;
}

@media (max-width: 700px) {
  .section-1{
    margin-left: unset;
    margin-right: unset;
  }
  .text-1{
    font-size: 17px;
    padding-bottom: 0.9%;
  }

  .text-2{
    font-size: 20px;
    padding-bottom: 0.9%;
  }

  .btn{
    width: 40%;
  }

}

@media (max-width: 500px) {
  .section-1{
    display: block;
  }
  .section-1-content{
    margin-bottom: 2%;
  }

  .image-2{
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
}
</style>