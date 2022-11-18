const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Hallo perkenalkan nama saya timus bot",
    `halo ${data?.nama}, berapa usia kamu? `,
    `ohh muda terus ya kamu ${data?.usia}, hobi kamu apatuh?`,
    `waaawwww sama dong aku juga hobi ${data?.hobi}, btw punya pacar ga?`,
    `ohhh ${data?.pacar} , yaudah kalo gitu meet bobo ya`,
  ];
};
pertanyaan.innerHTML = botSay()[0];

let userData = []

function botMulai() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
    console.log({userData : userData});
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, 1000);
  userData.push(jawaban.value)
  jawaban.value = ""
}

function finishing() {
  pertanyaan.innerHTML = `Makaci ya ${userData[0]} udah main ke timusbot
  kali-kali kita ${userData[2]} bareng yaa !!`;

  jawaban.value = "shiap shiap shiap"
}

function botEnd() {
window.location.reload()
}
