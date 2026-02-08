
// Get picks, bans, team names, and player names from localStorage

// --- HEROES ARRAY (copy from script.js, only name and img needed) ---
const heroes = [
  { name: "Aamon", img: "/Assets/HeroPick/aamon.png" },
  { name: "Akai", img: "/Assets/HeroPick/akai.png" },
  { name: "Aldous", img: "/Assets/HeroPick/aldous.png" },
  { name: "Alice", img: "/Assets/HeroPick/alice.png" },
  { name: "Alpha", img: "/Assets/HeroPick/alpha.png" },
  { name: "Alucard", img: "/Assets/HeroPick/alucard.png" },
  { name: "Angela", img: "/Assets/HeroPick/angela.png" },
  { name: "Argus", img: "/Assets/HeroPick/argus.png" },
  { name: "Arlott", img: "/Assets/HeroPick/arlott.png" },
  { name: "Atlas", img: "/Assets/HeroPick/atlas.png" },
  { name: "Aulus", img: "/Assets/HeroPick/aulus.png" },
  { name: "Aurora", img: "/Assets/HeroPick/aurora.png" },
  { name: "Badang", img: "/Assets/HeroPick/badang.png" },
  { name: "Balmond", img: "/Assets/HeroPick/balmond.png" },
  { name: "Bane", img: "/Assets/HeroPick/bane.png" },
  { name: "Barats", img: "/Assets/HeroPick/barats.png" },
  { name: "Baxia", img: "/Assets/HeroPick/baxia.png" },
  { name: "Beatrix", img: "/Assets/HeroPick/beatrix.png" },
  { name: "Beleric", img: "/Assets/HeroPick/beleric.png" },
  { name: "Benedetta", img: "/Assets/HeroPick/benedetta.png" },
  { name: "Brody", img: "/Assets/HeroPick/brody.png" },
  { name: "Bruno", img: "/Assets/HeroPick/bruno.png" },
  { name: "Carmila", img: "/Assets/HeroPick/carmila.png" },
  { name: "Cecilion", img: "/Assets/HeroPick/cecilion.png" },
  { name: "Chang'e", img: "/Assets/HeroPick/chang_e.png" },
  { name: "Chip", img: "/Assets/HeroPick/chip.png" },
  { name: "Chou", img: "/Assets/HeroPick/chou.png" },
  { name: "Cici", img: "/Assets/HeroPick/cici.png" },
  { name: "Claude", img: "/Assets/HeroPick/claude.png" },
  { name: "Clint", img: "/Assets/HeroPick/clint.png" },
  { name: "Cyclops", img: "/Assets/HeroPick/cyclops.png" },
  { name: "Diggie", img: "/Assets/HeroPick/diggie.png" },
  { name: "Dyroth", img: "/Assets/HeroPick/dyroth.png" },
  { name: "Edith", img: "/Assets/HeroPick/edith.png" },
  { name: "Esmeralda", img: "/Assets/HeroPick/esmeralda.png" },
  { name: "Estes", img: "/Assets/HeroPick/estes.png" },
  { name: "Eudora", img: "/Assets/HeroPick/eudora.png" },
  { name: "Fanny", img: "/Assets/HeroPick/fanny.png" },
  { name: "Faramis", img: "/Assets/HeroPick/faramis.png" },
  { name: "Floryn", img: "/Assets/HeroPick/floryn.png" },
  { name: "Franco", img: "/Assets/HeroPick/franco.png" },
  { name: "Fredrin", img: "/Assets/HeroPick/fredrin.png" },
  { name: "Freya", img: "/Assets/HeroPick/freya.png" },
  { name: "Gatotkaca", img: "/Assets/HeroPick/gatotkaca.png" },
  { name: "Gloo", img: "/Assets/HeroPick/gloo.png" },
  { name: "Gord", img: "/Assets/HeroPick/gord.png" },
  { name: "Granger", img: "/Assets/HeroPick/granger.png" },
  { name: "Grock", img: "/Assets/HeroPick/grock.png" },
  { name: "Guinevere", img: "/Assets/HeroPick/guinevere.png" },
  { name: "Gusion", img: "/Assets/HeroPick/gusion.png" },
  { name: "Hanabi", img: "/Assets/HeroPick/hanabi.png" },
  { name: "Hanzo", img: "/Assets/HeroPick/hanzo.png" },
  { name: "Harith", img: "/Assets/HeroPick/harith.png" },
  { name: "Harley", img: "/Assets/HeroPick/harley.png" },
  { name: "Hayabusa", img: "/Assets/HeroPick/hayabusa.png" },
  { name: "Helcurt", img: "/Assets/HeroPick/helcurt.png" },
  { name: "Hilda", img: "/Assets/HeroPick/hilda.png" },
  { name: "Hylos", img: "/Assets/HeroPick/hylos.png" },
  { name: "Irithel", img: "/Assets/HeroPick/irithel.png" },
  { name: "Ixia", img: "/Assets/HeroPick/ixia.png" },
  { name: "Jawhead", img: "/Assets/HeroPick/jawhead.png" },
  { name: "Johnson", img: "/Assets/HeroPick/johnson.png" },
  { name: "Joy", img: "/Assets/HeroPick/joy.png" },
  { name: "Julian", img: "/Assets/HeroPick/julian.png" },
  { name: "Kadita", img: "/Assets/HeroPick/kadita.png" },
  { name: "Kagura", img: "/Assets/HeroPick/kagura.png" },
  { name: "Kaja", img: "/Assets/HeroPick/kaja.png" },
  { name: "Karina", img: "/Assets/HeroPick/karina.png" },
  { name: "Karrie", img: "/Assets/HeroPick/karrie.png" },
  { name: "Khaleed", img: "/Assets/HeroPick/khaleed.png" },
  { name: "Khufra", img: "/Assets/HeroPick/khufra.png" },
  { name: "Kimmy", img: "/Assets/HeroPick/kimmy.png" },
  { name: "Lancelot", img: "/Assets/HeroPick/lancelot.png" },
  { name: "Lukas", img: "/Assets/HeroPick/lukas.png" },
  { name: "Lapu Lapu", img: "/Assets/HeroPick/lapulapu.png" },
  { name: "Layla", img: "/Assets/HeroPick/layla.png" },
  { name: "Leomord", img: "/Assets/HeroPick/leomord.png" },
  { name: "Lesley", img: "/Assets/HeroPick/lesley.png" },
  { name: "Ling", img: "/Assets/HeroPick/ling.png" },
  { name: "Lolita", img: "/Assets/HeroPick/lolita.png" },
  { name: "Lunox", img: "/Assets/HeroPick/lunox.png" },
  { name: "Luo Yi", img: "/Assets/HeroPick/luoyi.png" },
  { name: "Lylia", img: "/Assets/HeroPick/lylia.png" },
  { name: "Martis", img: "/Assets/HeroPick/martis.png" },
  { name: "Masha", img: "/Assets/HeroPick/masha.png" },
  { name: "Mathilda", img: "/Assets/HeroPick/mathilda.png" },
  { name: "Melissa", img: "/Assets/HeroPick/melissa.png" },
  { name: "Minotaur", img: "/Assets/HeroPick/minotour.png" },
  { name: "Minsitthar", img: "/Assets/HeroPick/minsitthar.png" },
  { name: "Miya", img: "/Assets/HeroPick/miya.png" },
  { name: "Moskov", img: "/Assets/HeroPick/moskov.png" },
  { name: "Nana", img: "/Assets/HeroPick/nana.png" },
  { name: "Natalia", img: "/Assets/HeroPick/natalia.png" },
  { name: "Nathan", img: "/Assets/HeroPick/nathan.png" },
  { name: "Nolan", img: "/Assets/HeroPick/nolan.png" },
  { name: "Novaria", img: "/Assets/HeroPick/novaria.png" },
  { name: "Odette", img: "/Assets/HeroPick/odette.png" },
  { name: "Paquito", img: "/Assets/HeroPick/paquito.png" },
  { name: "Pharsa", img: "/Assets/HeroPick/parsha.png" },
  { name: "Phoveus", img: "/Assets/HeroPick/phoveus.png" },
  { name: "Popol and Kupa", img: "/Assets/HeroPick/popolandkupa.png" },
  { name: "Rafaela", img: "/Assets/HeroPick/rafaela.png" },
  { name: "Roger", img: "/Assets/HeroPick/roger.png" },
  { name: "Ruby", img: "/Assets/HeroPick/ruby.png" },
  { name: "Saber", img: "/Assets/HeroPick/saber.png" },
  { name: "Selena", img: "/Assets/HeroPick/selena.png" },
  { name: "Silvanna", img: "/Assets/HeroPick/silvanna.png" },
  { name: "Sora", img: "/Assets/HeroPick/sora.png" },
  { name: "Sun", img: "/Assets/HeroPick/sun.png" },
  { name: "Suyou", img: "/Assets/HeroPick/suyou.png" },
  { name: "Terizla", img: "/Assets/HeroPick/terizla.png" },
  { name: "Thamuz", img: "/Assets/HeroPick/thamuz.png" },
  { name: "Tigreal", img: "/Assets/HeroPick/tigreal.png" },
  { name: "Uranus", img: "/Assets/HeroPick/uranus.png" },
  { name: "Vale", img: "/Assets/HeroPick/vale.png" },
  { name: "Valentina", img: "/Assets/HeroPick/valentina.png" },
  { name: "Valir", img: "/Assets/HeroPick/valir.png" },
  { name: "Vexana", img: "/Assets/HeroPick/vexana.png" },
  { name: "Wanwan", img: "/Assets/HeroPick/wanwan.png" },
  { name: "Xavier", img: "/Assets/HeroPick/xavier.png" },
  { name: "Xborg", img: "/Assets/HeroPick/xborg.png" },
  { name: "Yin", img: "/Assets/HeroPick/yin.png" },
  { name: "Yisunshin", img: "/Assets/HeroPick/yisunshin.png" },
  { name: "Yuzhong", img: "/Assets/HeroPick/yuzhong.png" },
  { name: "Yve", img: "/Assets/HeroPick/yve.png" },
  { name: "Zhask", img: "/Assets/HeroPick/zhask.png" },
  { name: "Zhuxin", img: "/Assets/HeroPick/zhuxin.png" },
  { name: "Zilong", img: "/Assets/HeroPick/zilong.png" },
  { name: "Kalea", img: "/Assets/HeroPick/kalea.png" },
  { name: "Lukas", img: "/Assets/HeroPick/lukas.png" },
  { name: "Obsidia", img: "/Assets/HeroPick/obsidia.png" },
  { name: "Zetian", img: "/Assets/HeroPick/zetian.png" }
];

const bluePicks = JSON.parse(localStorage.getItem('bluePicks') || '[]');
const redPicks = JSON.parse(localStorage.getItem('redPicks') || '[]');
const teamA = localStorage.getItem('teamA') || 'Blue Side';
const teamB = localStorage.getItem('teamB') || 'Red Side';
const bluePlayers = JSON.parse(localStorage.getItem('bluePlayers') || '[]');
const redPlayers = JSON.parse(localStorage.getItem('redPlayers') || '[]');

const picksAContainer = document.getElementById('picksA-loading');
const picksBContainer = document.getElementById('picksB-loading');
const teamAHeader = document.querySelector('#teamA-loading h2');
const teamBHeader = document.querySelector('#teamB-loading h2');

function getHeroImg(heroName) {
    const hero = heroes.find(h => h.name.toLowerCase() === heroName.toLowerCase());
    return hero ? hero.img : '';
}

function renderLoadingPicks() {
    if (teamAHeader) teamAHeader.textContent = teamA;
    if (teamBHeader) teamBHeader.textContent = teamB;
    picksAContainer.innerHTML = bluePicks.map((h, i) => {
        const img = getHeroImg(h);
        return `<div class="pick-loading pick-blue">${img ? `<img src='${img}' alt='${h}' style='width:100%;height:100%;object-fit:cover;'>` : ''}</div>`;
    }).join('');
    picksBContainer.innerHTML = redPicks.map((h, i) => {
        const img = getHeroImg(h);
        return `<div class="pick-loading pick-red">${img ? `<img src='${img}' alt='${h}' style='width:100%;height:100%;object-fit:cover;'>` : ''}</div>`;
    }).join('');
}

renderLoadingPicks();
