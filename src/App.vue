<template>
  <div class="alpha">
    <navigation-view/>
    <a href="https://wa.me/15102569690?text="  target="_blank" class="whatsapp_float">
      <i class='bx bxl-whatsapp'></i>
    </a>


    <router-view/>

  </div>
</template>



<script>
import NavigationView from "@/components/baseComponents/NavigationView.vue";
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export default {
  components: {NavigationView},
  data() {
    return {
      messages: [
        "🇨🇦 Noah made a deposit of $1,100",
        "🇩🇪 Emma made a deposit of $2,200",
        "🇮🇹 Liam made a deposit of $3,300",
        "🇫🇷 Olivia made a deposit of $4,400",
        "🇺🇸 William made a deposit of $5,500",
        "🇲🇽 Sophia made a deposit of $6,600",
        "🇧🇷 James made a deposit of $7,700",
        "🇮🇳 Benjamin made a deposit of $8,800",
        "🇯🇵 Lucas made a deposit of $9,900",
        "🇨🇳 Mia made a deposit of $11,000",
        "🇦🇺 Charlotte made a deposit of $12,100",
        "🇿🇦 Amelia made a deposit of $13,200",
        "🇬🇧 Elijah made a deposit of $14,300",
        "🇨🇦 Harper made a deposit of $15,400",
        "🇺🇸 Evelyn made a deposit of $16,500",
        "🇫🇷 Abigail made a deposit of $17,600",
        "🇲🇽 Elijah made a withdrawal of $18,700",
        "🇧🇷 Logan made a deposit of $19,800",
        "🇮🇳 Oliver made a deposit of $20,900",
        "🇯🇵 Isabella made a deposit of $22,000",
        "🇨🇳 Jacob made a deposit of $23,100",
        "🇦🇺 Sofia made a deposit of $24,200",
        "🇿🇦 Aiden made a deposit of $25,300",
        "🇬🇧 Camila made a deposit of $26,400",
        "🇨🇦 Samuel made a deposit of $27,500",
        "🇺🇸 Victoria made a deposit of $28,600",
        "🇫🇷 Madison made a deposit of $29,700",
        "🇲🇽 Matthew made a deposit of $30,800",
        "🇧🇷 Scarlett made a deposit of $31,900",
        "🇮🇳 Chloe made a deposit of $33,000",
        "🇯🇵 Aria made a deposit of $34,100",
        "🇨🇳 Emily made a deposit of $35,200",
        "🇦🇺 Henry made a deposit of $36,300",
        "🇿🇦 Aubrey made a deposit of $37,400",
        "🇬🇧 Mila made a deposit of $38,500",
        "🇨🇦 Ethan made a deposit of $39,600",
        "🇺🇸 Riley made a deposit of $40,700",
        "🇫🇷 Zoe made a deposit of $41,800",
        "🇲🇽 Layla made a deposit of $42,900",
        "🇧🇷 Lillian made a deposit of $44,000",
        "🇮🇳 Grace made a deposit of $45,100",
        "🇯🇵 Ryan made a deposit of $46,200",
        "🇨🇳 Nora made a deposit of $47,300",
        "🇦🇺 Hannah made a deposit of $48,400",
        "🇿🇦 Lily made a deposit of $49,500",
        "🇬🇧 Owen made a deposit of $50,600",
        "🇨🇦 John made a deposit of $51,700",
        "🇺🇸 Addison made a deposit of $52,800",
        "🇫🇷 Aiden made a deposit of $53,900",
        "🇲🇽 Ella made a deposit of $55,000",
        "🇧🇷 Gabriel made a deposit of $56,100",
        "🇮🇳 Nathan made a deposit of $57,200",
        "🇯🇵 Samuel made a deposit of $58,300",
        "🇨🇳 Mason made a deposit of $59,400",
        "🇦🇺 Penelope made a deposit of $60,500",
        "🇿🇦 Isaac made a deposit of $61,600",
        "🇬🇧 Naomi made a deposit of $62,700",
        "🇨🇦 Carter made a deposit of $63,800",
        "🇺🇸 Christian made a deposit of $64,900",
        "🇫🇷 Audrey made a deposit of $66,000",
        "🇲🇽 Savannah made a deposit of $67,100",
        "🇧🇷 Joshua made a deposit of $68,200",
        "🇮🇳 Wyatt made a deposit of $69,300",
        "🇯🇵 Kennedy made a deposit of $70,400",
        "🇨🇳 Landon made a deposit of $71,500",
        "🇦🇺 Julian made a deposit of $72,600",
        "🇿🇦 Bella made a deposit of $73,700",
        "🇬🇧 Piper made a deposit of $74,800",
        "🇨🇦 Hazel made a deposit of $75,900",
        "🇺🇸 Stella made a deposit of $77,000",
        "🇫🇷 Levi made a deposit of $78,100",
        "🇲🇽 Allison made a deposit of $79,200",
        "🇧🇷 Alexis made a deposit of $80,300",
        "🇮🇳 Nevaeh made a deposit of $81,400",
        "🇯🇵 Clara made a deposit of $82,500",
        "🇨🇳 Elio made a deposit of $83,600",
        "🇦🇺 Luke made a deposit of $84,700",
        "🇿🇦 Eliana made a deposit of $85,800",
        "🇬🇧 Colin made a deposit of $86,900",
        "🇨🇦 Sarah made a deposit of $88,000",
        "🇺🇸 Lincoln made a deposit of $89,100",
        "🇫🇷 Nora made a deposit of $90,200",
        "🇲🇽 Jace made a deposit of $91,300",
        "🇧🇷 Victoria made a deposit of $92,400",
        "🇮🇳 Bryson made a deposit of $93,500",
        "🇯🇵 Lucy made a deposit of $94,600",
        "🇨🇳 Parker made a deposit of $95,700",
        "🇦🇺 Kayden made a deposit of $96,800",
        "🇿🇦 Mateo made a deposit of $97,900",
        "🇬🇧 Josiah made a deposit of $99,000",
        "🇨🇦 Easton made a deposit of $100,100",
        "🇺🇸 Mary made a deposit of $101,200",
        "🇫🇷 Adeline made a deposit of $102,300",
        "🇲🇽 Genesis made a deposit of $103,400",
        "🇧🇷 Ximena made a deposit of $104,500",
        "🇮🇳 Zoe made a deposit of $105,600",
        "🇯🇵 Dylan made a deposit of $106,700",
        "🇨🇳 Ivan made a deposit of $107,800",
        "🇦🇺 Anastasia made a deposit of $108,900",
        "🇿🇦 Wesley made a deposit of $110,000",
        "🇺🇸 John made a deposit of $5,000",
        "🇮🇹 Ivan made a deposit of $1,660",
        "🇪🇸 Evan made a deposit of $750",
        "🇺🇸 Rachel made a deposit of $300",
        "🇮🇳 Quinn made a deposit of $550",
        "🇪🇸 Fiona made a deposit of $2,450",
        "🇨🇳 Ivan made a deposit of $1,500",
        "🇺🇸 Evan made a deposit of $3,450",
        "🇲🇽 Diana made a withdrawal of $280",
        "🇲🇽 Quinn made a deposit of $390",
        "🇿🇦 Bob made a deposit of $1,600",
        "🇦🇪 Oscar made a deposit of $870",
        "🇷🇺 Penny made a deposit of $868",
        "🇩🇪 Evan made a withdrawal of $2,410",
        "🇷🇺 Fiona made a deposit of $485",
        "🇺🇸 Charlie made a deposit of $1,200",
        "🇧🇷 Charlie made a deposit of $458",
        "🇨🇦 Steve made a deposit of $310",
        "🇸🇬 Steve made a withdrawal of $2,170",
        "🇦🇪 Linda made a deposit of $305",
        "🇦🇪 Steve made a deposit of $230",
        "🇦🇪 Evan made a deposit of $1,540",
        "🇰🇷 Ivan made a deposit of $139",
        "🇯🇵 Evan made a deposit of $640",
        "🇸🇬 Linda made a withdrawal of $140",
        "🇺🇸 Rachel made a deposit of $319",
        "🇷🇺 Oscar made a deposit of $106",
        "🇳🇿 Julia made a deposit of $2,064",
        "🇬🇧 Steve made a deposit of $430",
        "🇬🇧 Penny made a deposit of $189",
        "🇫🇷 Mike made a deposit of $920",
        "🇯🇵 Hannah made a deposit of $299",
        "🇨🇳 Ivan made a deposit of $4,530",
        "🇮🇹 Steve made a deposit of $468",
        "🇨🇦 Charlie made a deposit of $1,590",
        "🇦🇪 George made a deposit of $2,160",
        "🇪🇸 George made a deposit of $451",
        "🇨🇦 Fiona made a deposit of $6,470",
        "🇦🇪 Steve made a deposit of $320",
        "🇮🇳 Bob made a deposit of $340",
        "🇷🇺 Ivan made a deposit of $3,000",
        "🇸🇬 Alice made a withdrawal of $327",
        "🇧🇷 Oscar made a deposit of $2,360",
        "🇦🇺 Quinn made a deposit of $1,560",
        "🇸🇦 Steve made a deposit of $470",
        "🇫🇷 Ivan made a deposit of $1,690",
        "🇫🇷 Steve made a withdrawal of $3,340",
        "🇿🇦 Hannah made a deposit of $610",
        "🇲🇽 Linda made a deposit of $4,470",
        "🇧🇷 Nora made a withdrawal of $4,060",
        "🇰🇷 Nora made a deposit of $2,620",
        "🇦🇪 Fiona made a withdrawal of $230",
        "🇦🇪 Hannah made a deposit of $1,040",
        "🇸🇬 Steve made a deposit of $380",
        "🇳🇿 Diana made a deposit of $2,480",
        "🇯🇵 Linda made a deposit of $570",
        "🇰🇷 Linda made a deposit of $540",
        "🇮🇹 Linda made a deposit of $1,250",
        "🇫🇷 George made a deposit of $2,970",
        "🇨🇳 Rachel made a deposit of $1,430",
        "🇨🇦 Bob made a withdrawal of $4,940",
        "🇩🇪 George made a deposit of $1,550",
        "🇩🇿 Alex made a deposit of $50,000",
        "🇮🇹 Maria made a deposit of $166,000",
        "🇪🇸 Lucas made a deposit of $750,000",
        "🇺🇸 Emma made a deposit of $300,000",
        "🇮🇳 Aryan made a withdrawal of $550,000",
        "🇪🇸 Sofia made a deposit of $2,450,000",
        "🇨🇳 Leo made a deposit of $1,000,000",
        "🇲🇽 Diego made a deposit of $280,000",
        "🇲🇽 Isabella made a deposit of $390,000",
        "🇿🇦 Ethan made a deposit of $900,000",
        "🇦🇪 Noah made a deposit of $870,000",
        "🇷🇺 Olivia made a deposit of $868,000",
        "🇩🇪 Daniel made a deposit of $410,000",
        "🇷🇺 Ava made a withdrawal of $485,000",
        "🇺🇸 William made a deposit of $1,000,000",
        "🇧🇷 James made a deposit of $458,000",
        "🇨🇦 Harper made a deposit of $310,000",
        "🇸🇬 Benjamin made a deposit of $170,000",
        "🇦🇪 Amelia made a deposit of $305,000",
        "🇦🇪 Jack made a deposit of $230,000",
        "🇦🇪 Charlotte made a deposit of $540,000",
        "🇰🇷 Henry made a deposit of $139,000",
        "🇯🇵 Evelyn made a deposit of $640,000",
        "🇸🇬 Logan made a deposit of $140,000",
        "🇺🇸 Sophia made a deposit of $319,000",
        "🇷🇺 Jacob made a deposit of $106,000",
        "🇳🇿 Mila made a deposit of $964,000",
        "🇬🇧 Aiden made a deposit of $430,000",
        "🇬🇧 Lily made a deposit of $189,000",
        "🇫🇷 Joseph made a deposit of $920,000",
        "🇯🇵 Zoe made a deposit of $299,000",
        "🇨🇳 Owen made a deposit of $530,000",
        "🇮🇹 Michael made a deposit of $468,000",
        "🇨🇦 Grace made a deposit of $590,000",
        "🇦🇪 Ryan made a deposit of $960,000",
        "🇪🇸 Chloe made a withdrawal of $451,000",
        "🇨🇦 Nora made a deposit of $770,000",
        "🇦🇪 Luke made a deposit of $320,000",
        "🇮🇳 Adam made a deposit of $340,000",
        "🇷🇺 Hannah made a deposit of $1,000,000",
        "🇸🇬 Zoe made a deposit of $327,000",
        "🇧🇷 Eli made a deposit of $860,000",
        "🇦🇺 Ella made a deposit of $560,000",
        "🇸🇦 Scarlett made a deposit of $470,000",
        "🇫🇷 Mason made a deposit of $690,000",
        "🇫🇷 Carter made a deposit of $940,000",
        "🇿🇦 Riley made a deposit of $610,000",
        "🇲🇽 Layla made a deposit of $870,000",
        "🇧🇷 Lillian made a withdrawal of $4,060",
        "🇰🇷 Madison made a deposit of $2,620",
        "🇦🇪 Aria made a withdrawal of $230",
        "🇦🇪 Penelope made a deposit of $1,040",
        "🇸🇬 David made a deposit of $380",
        "🇳🇿 Victoria made a deposit of $2,480",
        "🇯🇵 Samuel made a deposit of $570",
        "🇰🇷 Josephine made a deposit of $540",
        "🇮🇹 Camila made a deposit of $1,250",
        "🇫🇷 Gabriel made a deposit of $2,970",
        "🇨🇳 Julian made a deposit of $1,430",
        "🇨🇦 Lucas made a deposit of $4,940",
        "🇩🇪 Mateo made a deposit of $1,550",
        "🇩🇿 Alex made a deposit of $50,000",
        "🇮🇹 Maria made a deposit of $166,000",
        "🇪🇸 Lucas made a deposit of $750,000",
        "🇺🇸 Emma made a deposit of $300,000",
        "🇮🇳 Aryan made a withdrawal of $550,000",
        "🇪🇸 Sofia made a deposit of $2,450,000",
        "🇨🇳 Leo made a deposit of $1,000,000",
        "🇲🇽 Diego made a deposit of $280,000",
        "🇲🇽 Isabella made a deposit of $390,000",
        "🇿🇦 Ethan made a deposit of $900,000",
        "🇦🇪 Noah made a deposit of $870,000",
        "🇷🇺 Olivia made a deposit of $868,000",
        "🇩🇪 Daniel made a deposit of $410,000",
        "🇷🇺 Ava made a withdrawal of $485,000",
        "🇺🇸 William made a deposit of $1,000,000",
        "🇧🇷 James made a deposit of $458,000",
        "🇨🇦 Harper made a deposit of $310,000",
        "🇸🇬 Benjamin made a deposit of $170,000",
        "🇦🇪 Amelia made a deposit of $305,000",
        "🇦🇪 Jack made a deposit of $230,000",
        "🇦🇪 Charlotte made a deposit of $540,000",
        "🇰🇷 Henry made a deposit of $139,000",
        "🇯🇵 Evelyn made a deposit of $640,000",
        "🇸🇬 Logan made a deposit of $140,000",
        "🇺🇸 Sophia made a deposit of $319,000",
        "🇷🇺 Jacob made a deposit of $106,000",
        "🇳🇿 Mila made a deposit of $964,000",
        "🇬🇧 Aiden made a deposit of $430,000",
        "🇬🇧 Lily made a deposit of $189,000",
        "🇫🇷 Joseph made a deposit of $920,000",
        "🇯🇵 Zoe made a deposit of $299,000",
        "🇨🇳 Owen made a deposit of $530,000",
        "🇮🇹 Michael made a deposit of $468,000",
        "🇨🇦 Grace made a deposit of $590,000",
        "🇦🇪 Ryan made a deposit of $960,000",
        "🇪🇸 Chloe made a withdrawal of $451,000",
        "🇨🇦 Nora made a deposit of $770,000",
        "🇦🇪 Luke made a deposit of $320,000",
        "🇮🇳 Adam made a deposit of $340,000",
        "🇷🇺 Hannah made a deposit of $1,000,000",
        "🇸🇬 Zoe made a deposit of $327,000",
        "🇧🇷 Eli made a deposit of $860,000",
        "🇦🇺 Ella made a deposit of $560,000",
        "🇸🇦 Scarlett made a deposit of $470,000",
        "🇫🇷 Mason made a deposit of $690,000",
        "🇫🇷 Carter made a deposit of $940,000",
        "🇿🇦 Riley made a deposit of $610,000",
        "🇲🇽 Layla made a deposit of $870,000",
        "🇧🇷 Lillian made a withdrawal of $4,060",
        "🇰🇷 Madison made a deposit of $2,620",
        "🇦🇪 Aria made a withdrawal of $230",
        "🇦🇪 Penelope made a deposit of $1,040",
        "🇸🇬 David made a deposit of $380",
        "🇳🇿 Victoria made a deposit of $2,480",
        "🇯🇵 Samuel made a deposit of $570",
        "🇰🇷 Josephine made a deposit of $540",
        "🇮🇹 Camila made a deposit of $1,250",
        "🇫🇷 Gabriel made a deposit of $2,970",
        "🇨🇳 Julian made a deposit of $1,430",
        "🇨🇦 Lucas made a deposit of $4,940",
        "🇩🇪 Mateo made a deposit of $1,550",
        "🇩🇿 Alex made a deposit of $50,000",
        "🇮🇹 Maria made a deposit of $166,000",
        "🇪🇸 Lucas made a deposit of $750,000",
        "🇺🇸 Emma made a deposit of $300,000",
        "🇮🇳 Aryan made a withdrawal of $550,000",
        "🇪🇸 Sofia made a deposit of $2,450,000",
        "🇨🇳 Leo made a deposit of $1,000,000",
        "🇲🇽 Diego made a deposit of $280,000",
        "🇲🇽 Isabella made a deposit of $390,000",
        "🇿🇦 Ethan made a deposit of $900,000",
        "🇦🇪 Noah made a deposit of $870,000",
        "🇷🇺 Olivia made a deposit of $868,000",
        "🇩🇪 Daniel made a deposit of $410,000",
        "🇷🇺 Ava made a withdrawal of $485,000",
        "🇺🇸 William made a deposit of $1,000,000",
        "🇧🇷 James made a deposit of $458,000",
        "🇨🇦 Harper made a deposit of $310,000",
        "🇸🇬 Benjamin made a deposit of $170,000",
        "🇦🇪 Amelia made a deposit of $305,000",
        "🇦🇪 Jack made a deposit of $230,000",
        "🇦🇪 Charlotte made a deposit of $540,000",
        "🇰🇷 Henry made a deposit of $139,000",
        "🇯🇵 Evelyn made a deposit of $640,000",
        "🇸🇬 Logan made a deposit of $140,000",
        "🇺🇸 Sophia made a deposit of $319,000",
        "🇷🇺 Jacob made a deposit of $106,000",
        "🇳🇿 Mila made a deposit of $964,000",
        "🇬🇧 Aiden made a deposit of $430,000",
        "🇬🇧 Lily made a deposit of $189,000",
        "🇫🇷 Joseph made a deposit of $920,000",
        "🇯🇵 Zoe made a deposit of $299,000",
        "🇨🇳 Owen made a deposit of $530,000",
      ],
      currentMessageIndex: 0, // Track the current message index
    };
  },
  methods: {
    // showToast() {
    //   Toastify({
    //     text: "This is a toast",
    //     duration: 5000,
    //     destination: "https://github.com/apvarun/toastify-js",
    //     newWindow: true,
    //     close: true,
    //     gravity: "bottom", // `top` or `bottom`
    //     position: "left", // `left`, `center` or `right`
    //     stopOnFocus: true, // Prevents dismissing of toast on hover
    //     style: {
    //       background: "linear-gradient(to right, grey, grey)",
    //       width: "400px"
    //     },
    //   }).showToast();
    // },
    // showToast() {
    //   // Define the interval duration in milliseconds (e.g., every 10 seconds)
    //   const intervalDuration = 10000;
    //
    //   setInterval(() => {
    //     Toastify({
    //       text: "This is a toast",
    //       duration: 5000,
    //       destination: "https://github.com/apvarun/toastify-js",
    //       newWindow: true,
    //       close: true,
    //       gravity: "bottom", // `top` or `bottom`
    //       position: "left", // `left`, `center` or `right`
    //       stopOnFocus: true, // Prevents dismissing of toast on hover
    //       style: {
    //         background: "linear-gradient(to right, grey, grey)",
    //         width: "400px"
    //       },
    //     }).showToast();
    //   }, intervalDuration);
    // }

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        // Generate random index
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
      }
    },

    showToast() {
      // Shuffle the messages array before starting the interval
      this.shuffleArray(this.messages);

      const intervalDuration = 40000; // Interval duration in milliseconds

      const intervalId = setInterval(() => {
        // Check if all messages have been shown
        if (this.currentMessageIndex >= this.messages.length) {
          clearInterval(intervalId); // Clear the interval
          return; // Exit the function
        }

        // Show the toast with the current message
        Toastify({
          text: this.messages[this.currentMessageIndex],
          duration: 5000,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#0f171c",
            // width: "20%",
            color: "#ffffff",
            boxShadow: "none",
            borderRadius: "4px"
          },
        }).showToast();

        this.currentMessageIndex++; // Move to the next message
      }, intervalDuration);
    }


    // showToast() {
    //   const intervalDuration = 20000; // Interval duration in milliseconds
    //
    //   const intervalId = setInterval(() => {
    //     // Check if all messages have been shown
    //     if (this.currentMessageIndex >= this.messages.length) {
    //       clearInterval(intervalId); // Clear the interval
    //       return; // Exit the function
    //     }
    //
    //     // Show the toast with the current message
    //     Toastify({
    //       text: this.messages[this.currentMessageIndex],
    //       duration: 5000,
    //       close: true,
    //       gravity: "bottom",
    //       position: "left",
    //       stopOnFocus: true,
    //       style: {
    //         background: "linear-gradient(to right, #ffffff, #ffffff)",
    //         width: "320px",
    //         padding: "10px",
    //         color: "#232323"
    //       },
    //     }).showToast();
    //
    //     this.currentMessageIndex++; // Move to the next message
    //   }, intervalDuration);
    // }
  },

  mounted() {
    this.showToast()
  }
}

</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  cursor: pointer;
  counter-reset: Serial;
  font-family: 'Outfit', sans-serif;
  background: #161616 !important;
}
a{
  text-decoration: none;
}
input{
  font-family: 'Outfit', sans-serif;
}
textarea{
  font-family: 'Outfit', sans-serif;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 1s ease-in;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(-250px);
}

.mobile-nav-enter-to{
  transform: translateX(0);
}

.whatsapp_float {
  position: fixed;
  width: 55px;
  height: 55px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
}

.bxl-whatsapp {
  position: absolute;
  top: 21%;
  right: 22.5%;
}

/* for mobile */
@media screen and (max-width: 767px){
  .whatsapp-icon {
    margin-top: 10px;
  }
  .whatsapp_float {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 10px;
    font-size: 22px;
  }
}

</style>