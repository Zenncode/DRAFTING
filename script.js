// const heroes = [
//     { name: 'Aamon', img: '/Assets/HeroPick/aamon.png', sound: '/Assets/Sound/herovoice/aamon.mp3' },
//     { name: 'Akai', img: '/Assets/HeroPick/akai.png', sound: '/Assets/Sound/herovoice/akai.mp3' },
//     { name: 'Aldous', img: '/Assets/HeroPick/aldous.png', sound: '/Assets/Sound/herovoice/aldous.mp3' },
//     { name: 'Alice', img: '/Assets/HeroPick/alice.png', sound: '/Assets/Sound/herovoice/alice.mp3' },
//     { name: 'Alpha', img: '/Assets/HeroPick/alpha.png', sound: '/Assets/Sound/herovoice/alpha.mp3' },
//     { name: 'Alucard', img: '/Assets/HeroPick/alucard.png', sound: '/Assets/Sound/herovoice/alucard.mp3' },
//     { name: 'Angela', img: '/Assets/HeroPick/angela.png', sound: '/Assets/Sound/herovoice/angela.mp3' },
//     { name: 'Argus', img: '/Assets/HeroPick/argus.png', sound: '/Assets/Sound/herovoice/argus.mp3' },
//     { name: 'Arlott', img: '/Assets/HeroPick/arlott.png', sound: '/Assets/Sound/herovoice/arlott.mp3' },
//     { name: 'Atlas', img: '/Assets/HeroPick/atlas.png', sound: '/Assets/Sound/herovoice/atlas.mp3' },
//     { name: 'Aulus', img: '/Assets/HeroPick/aulus.png', sound: '/Assets/Sound/herovoice/aulus.mp3' },
//     { name: 'Aurora', img: '/Assets/HeroPick/aurora.png', sound: '/Assets/Sound/herovoice/aurora.mp3' },
//     { name: 'Badang', img: '/Assets/HeroPick/badang.png', sound: '/Assets/Sound/herovoice/badang.mp3' },
//     { name: 'Balmond', img: '/Assets/HeroPick/balmond.png', sound: '/Assets/Sound/herovoice/balmond.mp3' },
//     { name: 'Bane', img: '/Assets/HeroPick/bane.png', sound: '/Assets/Sound/herovoice/bane.mp3' },
//     { name: 'Barats', img: '/Assets/HeroPick/barats.png', sound: '/Assets/Sound/herovoice/barats.mp3' },
//     { name: 'Baxia', img: '/Assets/HeroPick/baxia.png', sound: '/Assets/Sound/herovoice/baxia.mp3' },
//     { name: 'Beatrix', img: '/Assets/HeroPick/beatrix.png', sound: '/Assets/Sound/herovoice/beatrix.mp3' },
//     { name: 'Beleric', img: '/Assets/HeroPick/beleric.png', sound: '/Assets/Sound/herovoice/belerick.mp3' },
//     { name: 'Benedetta', img: '/Assets/HeroPick/benedetta.png', sound: '/Assets/Sound/herovoice/benedetta.mp3' },
//     { name: 'Brody', img: '/Assets/HeroPick/brody.png', sound: '/Assets/Sound/herovoice/brody.mp3' },
//     { name: 'Bruno', img: '/Assets/HeroPick/bruno.png', sound: '/Assets/Sound/herovoice/bruno.mp3' },
//     { name: 'Carmila', img: '/Assets/HeroPick/carmila.png', sound: '/Assets/Sound/herovoice/carmila.mp3' },
//     { name: 'Cecilion', img: '/Assets/HeroPick/cecilion.png', sound: '/Assets/Sound/herovoice/cecilion.mp3' },
//     { name: 'Chang\'e', img: '/Assets/HeroPick/chang_e.png', sound: '/Assets/Sound/herovoice/change.mp3' },
//     { name: 'Chip', img: '/Assets/HeroPick/chip.png', sound: '/Assets/Sound/herovoice/chip.mp3' },
//     { name: 'Chou', img: '/Assets/HeroPick/chou.png', sound: '/Assets/Sound/herovoice/chou.mp3' },
//     { name: 'Cici', img: '/Assets/HeroPick/cici.png', sound: '/Assets/Sound/herovoice/cici.mp3' },
//     { name: 'Claude', img: '/Assets/HeroPick/claude.png', sound: '/Assets/Sound/herovoice/claude.mp3' },
//     { name: 'Clint', img: '/Assets/HeroPick/clint.png', sound: '/Assets/Sound/herovoice/clint.mp3' },
//     { name: 'Cyclops', img: '/Assets/HeroPick/cyclops.png', sound: '/Assets/Sound/herovoice/cyclops.mp3' },
//     { name: 'Diggie', img: '/Assets/HeroPick/diggie.png', sound: '/Assets/Sound/herovoice/diggie.mp3' },
//     { name: 'Dyroth', img: '/Assets/HeroPick/dyroth.png', sound: '/Assets/Sound/herovoice/dyroth.mp3' },
//     { name: 'Edith', img: '/Assets/HeroPick/edith.png', sound: '/Assets/Sound/herovoice/edith.mp3' },
//     { name: 'Esmeralda', img: '/Assets/HeroPick/esmeralda.png', sound: '/Assets/Sound/herovoice/esmeralda.mp3' },
//     { name: 'Estes', img: '/Assets/HeroPick/estes.png', sound: '/Assets/Sound/herovoice/estes.mp3' },
//     { name: 'Eudora', img: '/Assets/HeroPick/eudora.png', sound: '/Assets/Sound/herovoice/eudora.mp3' },
//     { name: 'Fanny', img: '/Assets/HeroPick/fanny.png', sound: '/Assets/Sound/herovoice/fanny.mp3' },
//     { name: 'Faramis', img: '/Assets/HeroPick/faramis.png', sound: '/Assets/Sound/herovoice/faramis.mp3' },
//     { name: 'Floryn', img: '/Assets/HeroPick/floryn.png', sound: '/Assets/Sound/herovoice/floryn.mp3' },
//     { name: 'Franco', img: '/Assets/HeroPick/franco.png', sound: '/Assets/Sound/herovoice/franco.mp3' },
//     { name: 'Fredrin', img: '/Assets/HeroPick/fredrin.png', sound: '/Assets/Sound/herovoice/fredrin.mp3' },
//     { name: 'Freya', img: '/Assets/HeroPick/freya.png', sound: '/Assets/Sound/herovoice/freya.mp3' },
//     { name: 'Gatotkaca', img: '/Assets/HeroPick/gatotkaca.png', sound: '/Assets/Sound/herovoice/gatotkaca.mp3' },
//     { name: 'Gloo', img: '/Assets/HeroPick/gloo.png', sound: '/Assets/Sound/herovoice/gloo.mp3' },
//     { name: 'Gord', img: '/Assets/HeroPick/gord.png', sound: '/Assets/Sound/herovoice/gord.mp3' },
//     { name: 'Granger', img: '/Assets/HeroPick/granger.png', sound: '/Assets/Sound/herovoice/granger.mp3' },
//     { name: 'Grock', img: '/Assets/HeroPick/grock.png', sound: '/Assets/Sound/herovoice/grock.mp3' },
//     { name: 'Guinevere', img: '/Assets/HeroPick/guinevere.png', sound: '/Assets/Sound/herovoice/guinevere.mp3' },
//     { name: 'Gusion', img: '/Assets/HeroPick/gusion.png', sound: '/Assets/Sound/herovoice/gusion.mp3' },
//     { name: 'Hanabi', img: '/Assets/HeroPick/hanabi.png', sound: '/Assets/Sound/herovoice/hanabi.mp3' },
//     { name: 'Hanzo', img: '/Assets/HeroPick/hanzo.png', sound: '/Assets/Sound/herovoice/hanzo.mp3' },
//     { name: 'Harith', img: '/Assets/HeroPick/harith.png', sound: '/Assets/Sound/herovoice/harith.mp3' },
//     { name: 'Harley', img: '/Assets/HeroPick/harley.png', sound: '/Assets/Sound/herovoice/harley.mp3' },
//     { name: 'Hayabusa', img: '/Assets/HeroPick/hayabusa.png', sound: '/Assets/Sound/herovoice/hayabusa.mp3' },
//     { name: 'Helcurt', img: '/Assets/HeroPick/helcurt.png', sound: '/Assets/Sound/herovoice/helcurt.mp3' },
//     { name: 'Hilda', img: '/Assets/HeroPick/hilda.png', sound: '/Assets/Sound/herovoice/hilda.mp3' },
//     { name: 'Hylos', img: '/Assets/HeroPick/hylos.png', sound: '/Assets/Sound/herovoice/hylos.mp3' },
//     { name: 'Irithel', img: '/Assets/HeroPick/irithel.png', sound: '/Assets/Sound/herovoice/irithel.mp3' },
//     { name: 'Ixia', img: '/Assets/HeroPick/ixia.png', sound: '/Assets/Sound/herovoice/ixia.mp3' },
//     { name: 'Jawhead', img: '/Assets/HeroPick/jawhead.png', sound: '/Assets/Sound/herovoice/jawhead.mp3' },
//     { name: 'Johnson', img: '/Assets/HeroPick/johnson.png', sound: '/Assets/Sound/herovoice/johnson.mp3' },
//     { name: 'Joy', img: '/Assets/HeroPick/joy.png', sound: '/Assets/Sound/herovoice/joy.mp3' },
//     { name: 'Julian', img: '/Assets/HeroPick/julian.png', sound: '/Assets/Sound/herovoice/julian.mp3' },
//     { name: 'Kadita', img: '/Assets/HeroPick/kadita.png', sound: '/Assets/Sound/herovoice/kadita.mp3' },
//     { name: 'Kagura', img: '/Assets/HeroPick/kagura.png', sound: '/Assets/Sound/herovoice/kagura.mp3' },
//     { name: 'Kaja', img: '/Assets/HeroPick/kaja.png', sound: '/Assets/Sound/herovoice/kaja.mp3' },
//     { name: 'Karina', img: '/Assets/HeroPick/karina.png', sound: '/Assets/Sound/herovoice/karina.mp3' },
//     { name: 'Karrie', img: '/Assets/HeroPick/karrie.png', sound: '/Assets/Sound/herovoice/karrie.mp3' },
//     { name: 'Khaleed', img: '/Assets/HeroPick/khaleed.png', sound: '/Assets/Sound/herovoice/khaleed.mp3' },
//     { name: 'Khufra', img: '/Assets/HeroPick/khufra.png', sound: '/Assets/Sound/herovoice/khufra.mp3' },
//     { name: 'Kimmy', img: '/Assets/HeroPick/kimmy.png', sound: '/Assets/Sound/herovoice/kimmy.mp3' },
//     { name: 'Lancelot', img: '/Assets/HeroPick/lancelot.png', sound: '/Assets/Sound/herovoice/lancelot.mp3' },
//     { name: 'Lukas', img: '/Assets/HeroPick/lukas.png', sound: '/Assets/Sound/herovoice/lukas.mp3' },
//     { name: 'Lapu Lapu', img: '/Assets/HeroPick/lapulapu.png', sound: '/Assets/Sound/herovoice/lapulapu.mp3' },
//     { name: 'Layla', img: '/Assets/HeroPick/layla.png', sound: '/Assets/Sound/herovoice/layla.mp3' },
//     { name: 'Leomord', img: '/Assets/HeroPick/leomord.png', sound: '/Assets/Sound/herovoice/leomord.mp3' },
//     { name: 'Lesley', img: '/Assets/HeroPick/lesley.png', sound: '/Assets/Sound/herovoice/lesley.mp3' },
//     { name: 'Ling', img: '/Assets/HeroPick/ling.png', sound: '/Assets/Sound/herovoice/ling.mp3' },
//     { name: 'Lolita', img: '/Assets/HeroPick/lolita.png', sound: '/Assets/Sound/herovoice/lolita.mp3' },
//     { name: 'Lunox', img: '/Assets/HeroPick/lunox.png', sound: '/Assets/Sound/herovoice/lunox.mp3' },
//     { name: 'Luo Yi', img: '/Assets/HeroPick/luoyi.png', sound: '/Assets/Sound/herovoice/luoyi.mp3' },
//     { name: 'Lylia', img: '/Assets/HeroPick/lylia.png', sound: '/Assets/Sound/herovoice/lylia.mp3' },
//     { name: 'Martis', img: '/Assets/HeroPick/martis.png', sound: '/Assets/Sound/herovoice/martis.mp3' },
//     { name: 'Masha', img: '/Assets/HeroPick/masha.png', sound: '/Assets/Sound/herovoice/masha.mp3' },
//     { name: 'Mathilda', img: '/Assets/HeroPick/mathilda.png', sound: '/Assets/Sound/herovoice/mathilda.mp3' },
//     { name: 'Melissa', img: '/Assets/HeroPick/melissa.png', sound: '/Assets/Sound/herovoice/melissa.mp3' },
//     { name: 'Minotaur', img: '/Assets/HeroPick/minotour.png', sound: '/Assets/Sound/herovoice/minotaur.mp3' },
//     { name: 'Minsitthar', img: '/Assets/HeroPick/minsitthar.png', sound: '/Assets/Sound/herovoice/minsitthar.mp3' },
//     { name: 'Miya', img: '/Assets/HeroPick/miya.png', sound: '/Assets/Sound/herovoice/miya.mp3' },
//     { name: 'Moskov', img: '/Assets/HeroPick/moskov.png', sound: '/Assets/Sound/herovoice/moskov.mp3' },
//     { name: 'Nana', img: '/Assets/HeroPick/nana.png', sound: '/Assets/Sound/herovoice/nana.mp3' },
//     { name: 'Natalia', img: '/Assets/HeroPick/natalia.png', sound: '/Assets/Sound/herovoice/natalia.mp3' },
//     { name: 'Nathan', img: '/Assets/HeroPick/nathan.png', sound: '/Assets/Sound/herovoice/nathan.mp3' },
//     { name: 'Nolan', img: '/Assets/HeroPick/nolan.png', sound: '/Assets/Sound/herovoice/nolan.mp3' },
//     { name: 'Novaria', img: '/Assets/HeroPick/novaria.png', sound: '/Assets/Sound/herovoice/novaria.mp3' },
//     { name: 'Odette', img: '/Assets/HeroPick/odette.png', sound: '/Assets/Sound/herovoice/odette.mp3' },
//     { name: 'Paquito', img: '/Assets/HeroPick/paquito.png', sound: '/Assets/Sound/herovoice/paquito.mp3' },
//     { name: 'Pharsa', img: '/Assets/HeroPick/parsha.png', sound: '/Assets/Sound/herovoice/pharsa.mp3' },
//     { name: 'Phoveus', img: '/Assets/HeroPick/phoveus.png', sound: '/Assets/Sound/herovoice/phoveus.mp3' },
//     { name: 'Popol and Kupa', img: '/Assets/HeroPick/popolandkupa.png', sound: '/Assets/Sound/herovoice/popol.mp3' },
//     { name: 'Rafaela', img: '/Assets/HeroPick/rafaela.png', sound: '/Assets/Sound/herovoice/rafaela.mp3' },
//     { name: 'Roger', img: '/Assets/HeroPick/roger.png', sound: '/Assets/Sound/herovoice/roger.mp3' },
//     { name: 'Ruby', img: '/Assets/HeroPick/ruby.png', sound: '/Assets/Sound/herovoice/ruby.mp3' },
//     { name: 'Saber', img: '/Assets/HeroPick/saber.png', sound: '/Assets/Sound/herovoice/saber.mp3' },
//     { name: 'Selena', img: '/Assets/HeroPick/selena.png', sound: '/Assets/Sound/herovoice/selena.mp3' },
//     { name: 'Silvanna', img: '/Assets/HeroPick/silvanna.png', sound: '/Assets/Sound/herovoice/silvanna.mp3' },
//     { name: 'Sora', img: '/Assets/HeroPick/sora.png', sound: '/Assets/Sound/herovoice/sora.mp3' },
//     { name: 'Sun', img: '/Assets/HeroPick/sun.png', sound: '/Assets/Sound/herovoice/sun.mp3' },
//     { name: 'Suyou', img: '/Assets/HeroPick/suyou.png', sound: '/Assets/Sound/herovoice/suyou.mp3' },
//     { name: 'Terizla', img: '/Assets/HeroPick/terizla.png', sound: '/Assets/Sound/herovoice/terizla.mp3' },
//     { name: 'Thamuz', img: '/Assets/HeroPick/thamuz.png', sound: '/Assets/Sound/herovoice/thamuz.mp3' },
//     { name: 'Tigreal', img: '/Assets/HeroPick/tigreal.png', sound: '/Assets/Sound/herovoice/tigreal.mp3' },
//     { name: 'Uranus', img: '/Assets/HeroPick/uranus.png', sound: '/Assets/Sound/herovoice/uranus.mp3' },
//     { name: 'Vale', img: '/Assets/HeroPick/vale.png', sound: '/Assets/Sound/herovoice/vale.mp3' },
//     { name: 'Valentina', img: '/Assets/HeroPick/valentina.png', sound: '/Assets/Sound/herovoice/valentina.mp3' },
//     { name: 'Valir', img: '/Assets/HeroPick/valir.png', sound: '/Assets/Sound/herovoice/valir.mp3' },
//     { name: 'Vexana', img: '/Assets/HeroPick/vexana.png', sound: '/Assets/Sound/herovoice/vexana.mp3' },
//     { name: 'Wanwan', img: '/Assets/HeroPick/wanwan.png', sound: '/Assets/Sound/herovoice/wanwan.mp3' },
//     { name: 'Xavier', img: '/Assets/HeroPick/xavier.png', sound: '/Assets/Sound/herovoice/xavier.mp3' },
//     { name: 'Xborg', img: '/Assets/HeroPick/xborg.png', sound: '/Assets/Sound/herovoice/xborg.mp3' },
//     { name: 'Yin', img: '/Assets/HeroPick/yin.png', sound: '/Assets/Sound/herovoice/yin.mp3' },
//     { name: 'Yisunshin', img: '/Assets/HeroPick/yisunshin.png', sound: '/Assets/Sound/herovoice/yisunshin.mp3' },
//     { name: 'Yuzhong', img: '/Assets/HeroPick/yuzhong.png', sound: '/Assets/Sound/herovoice/yuzhong.mp3' },
//     { name: 'Yve', img: '/Assets/HeroPick/yve.png', sound: '/Assets/Sound/herovoice/yve.mp3' },
//     { name: 'Zhask', img: '/Assets/HeroPick/zhask.png', sound: '/Assets/Sound/herovoice/zhask.mp3' },
//     { name: 'Zhuxin', img: '/Assets/HeroPick/zhuxin.png', sound: '/Assets/Sound/herovoice/zhuxin.mp3' },
//     { name: 'Zilong', img: '/Assets/HeroPick/zilong.png', sound: '/Assets/Sound/herovoice/zilong.mp3' },
//     { name: 'Kalea', img: '/Assets/HeroPick/kalea.png', sound: '/Assets/Sound/herovoice/kalea.mp3' },
//     { name: 'Lukas', img: '/Assets/HeroPick/lukas.png', sound: '/Assets/Sound/herovoice/lukas.mp3' },
//     { name: 'Obsidia', img: '/Assets/HeroPick/obsidia.png', sound: '/Assets/Sound/herovoice/obsidia.mp3' },
//     { name: 'Zetian', img: '/Assets/HeroPick/zetian.png', sound: '/Assets/Sound/herovoice/zetian.mp3' }
// ];

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
  { name: "Zetian", img: "/Assets/HeroPick/zetian.png" },
];

const organization = [
  //FIRTS MATCH
  {
    name: "PICE",
    members: ["SUPER EGO", "Dasval", "SlashTzy", "Tinn", "Optix | Kairu "], //5PLAYERS
  },
  {
    name: "HMS",
    members: [
      "Marcel GD",
      "Incyvincy",
      "Bullet",
      "Benzmodee",
      "HobbySyo",
      //,"Madilim Na Sistema"
    ],
  },
  //SECOND MATCH
  {
    name: "YES",
    members: [
      "Rebongskie",
      "Owdêll",
      "Gēr.",
      "Seigi",
      "Jayeel",
      // , "Rea And?"
    ],
  },
  {
    name: "JFINEX",
    members: [
      "Abelyana.",
      "_CYRUS ",
      "       ",
      "Rovina. ",
      "THE HOLYNIGHT10",
      //, Jefu
    ],
  },
  //THIRD MATCH
  {
    name: "PADS",
    members: [
      "Nini.",
      "J 4 C",
      "SuperPatorikku",
      "KH3RT",
      "Zander.",
      //, "Mumid"
    ],
  },
  {
    name: "JPIA",
    members: [
      "Return of Diablo.",
      "Super Neil",
      "Flemming Stein.",
      "Rod Kamonohashi",
      "AhronnShikii",
      //   , "Slay Danigurl~"
    ],
  },
  //FOUTH MATCH
  {
    name: "ILS",
    members: [
      "Gearboi.",
      "ʜᴏɢᴏsʜᴀ",
      "iyakhen",
      "暗•|ᴅᴀʀᴋ.",
      "kcir",
      //, "Nadine Luśtre"
    ],
  },

  {
    name: "SYNERTECH",
    members: [
      "Noxura",
      "PASSIVE SABAY BEG",
      "Sassy chloe",
      "    .",
      "Francheskaツ",
    ], //5PLAYERS
  },

  //--------------------
  {
    name: "JME",
    members: ["Vinny", "lionill", "Hiroshi", "fionn", "Exødus"], //5PLAYERS
  },
  {
    name: "IIEE",
    members: [
      "About you",
      "jiwoo.sze",
      "Fʀᴏsᴛᴢʏ",
      "Enderbro",
      "ꜱᴇᴠvツ",
      //,"Water"
    ],
  },
  {
    name: "PASOA",
    members: [
      "패트릭.",
      "Upin",
      "indraaa.",
      "célesta.",
      "Angu",
      // , "ERYZ"
    ],
  },
  {
    name: "IBITS",
    members: ["Mark Angelo", "ced2", "2wo.", "fae.", "ZJ."], //5PLAYERS
  },
  {
    name: "ABS",
    members: [
      "La Flame.",
      "Chasing Pavements.",
      "greý",
      "Ri Leyunel Hyeok",
      "Tomoya Okazaki",
    ], //5PLAYERS
  },
  {
    name: "PAN-YC",
    members: [
      "Gluconeogenesis",
      "Son Chaeyoung",
      "Augustine",
      "Carlolo",
      "tways tzuyu",
      // , "R A T B U"
    ],
  }
];
function filterDropdown(id) {
  const searchInput = document
    .getElementById(`search-${id}`)
    .value.toLowerCase();
  const dropdownItems = document.getElementById(`dropdown-items-${id}`);
  dropdownItems.innerHTML = "";

  heroes
    .filter((hero) => hero.name.toLowerCase().includes(searchInput))
    .forEach((hero) => {
      const item = document.createElement("div");
      item.classList.add("dropdown-item");
      item.textContent = hero.name;
      item.onclick = () => selectHero(hero, id);
      dropdownItems.appendChild(item);
    });
}

function selectHero(hero, id) {
  const imageDisplay = document.getElementById(`image-display-${id}`);
  const existingImage = imageDisplay.querySelector("img");

  if (existingImage) {
    existingImage.classList.add("fly-out");

    setTimeout(() => {
      updateHeroImage(hero, id);
    }, 500);
  } else {
    updateHeroImage(hero, id);
  }
}

// function selectHero(hero, id) {
//     const imageDisplay = document.getElementById(`image-display-${id}`);
//     const existingImage = imageDisplay.querySelector('img');

//     // Play sound if available
//     if (hero.sound) {
//         const audio = new Audio(hero.sound);
//         audio.play().catch(error => {
//             console.log('Audio playback failed:', error);
//         });
//     }

//     if (existingImage) {
//
//         existingImage.classList.add('fly-out');
//
//         setTimeout(() => {
//             updateHeroImage(hero, id);
//         }, 500);
//     } else {
//         updateHeroImage(hero, id);
//     }
// }

function updateHeroImage(hero, id) {
  const imageDisplay = document.getElementById(`image-display-${id}`);
  imageDisplay.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
  document.getElementById(`search-${id}`).value = hero.name;
  document.getElementById(`dropdown-items-${id}`).innerHTML = "";
}

function resetAllDropdowns() {
  for (let i = 1; i <= 20; i++) {
    const imageDisplay = document.getElementById(`image-display-${i}`);
    if (imageDisplay.innerHTML) {
      imageDisplay.querySelector("img").classList.add("fly-out");
    }

    setTimeout(() => {
      document.getElementById(`search-${i}`).value = "";
      imageDisplay.innerHTML = "";
      document.getElementById(`dropdown-items-${i}`).innerHTML = "";
    }, 500);
  }
}

function updateOutput() {
  for (let i = 1; i <= 10; i++) {
    const inputText = document.getElementById("input" + i).value;
    document.getElementById("output" + i).textContent = ` ${inputText}`;
  }
}

function resetInputs() {
  for (let i = 1; i <= 10; i++) {
    document.getElementById("input" + i).value = "";
    document.getElementById("output" + i).textContent = ` `;
  }
}

function switchInputs() {
  for (let i = 1; i <= 5; i++) {
    const temp = document.getElementById("input" + i).value;
    document.getElementById("input" + i).value = document.getElementById(
      "input" + (i + 5),
    ).value;
    document.getElementById("input" + (i + 5)).value = temp;
  }

  updateOutput();
}

function swapContent() {
  const img1 = document.getElementById("image1");
  const img2 = document.getElementById("image2");
  const tempSrc = img1.src;
  img1.src = img2.src;
  img2.src = tempSrc;

  const teamDisplay1 = document.getElementById("teamNameDisplay1");
  const teamDisplay2 = document.getElementById("teamNameDisplay2");
  const tempTeamDisplay = teamDisplay1.textContent;
  teamDisplay1.textContent = teamDisplay2.textContent;
  teamDisplay2.textContent = tempTeamDisplay;
}

function loadImage(event, imgId) {
  const img = document.getElementById(imgId);
  img.src = URL.createObjectURL(event.target.files[0]);
}

function populateOrgDropdowns() {
  const team1Dropdown = document.getElementById("team1");
  const team2Dropdown = document.getElementById("team2");

  // Clear existing options
  team1Dropdown.innerHTML = "";
  team2Dropdown.innerHTML = "";

  // Add default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "TEAM SELECT:";
  team1Dropdown.appendChild(defaultOption.cloneNode(true));
  team2Dropdown.appendChild(defaultOption.cloneNode(true));

  // Add organization options
  organization.forEach((org) => {
    const option1 = document.createElement("option");
    option1.value = org.name;
    option1.textContent = org.name;
    team1Dropdown.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = org.name;
    option2.textContent = org.name;
    team2Dropdown.appendChild(option2);
  });
}

function displayPlayersFromOrg(teamNumber) {
  let selectedOrg;
  let startInput;

  if (teamNumber === 1) {
    selectedOrg = document.getElementById("team1").value;
    startInput = 1;
  } else if (teamNumber === 2) {
    selectedOrg = document.getElementById("team2").value;
    startInput = 6;
  }

  const org = organization.find((org) => org.name === selectedOrg);

  if (org) {
    for (let i = 0; i < 5; i++) {
      const inputField = document.getElementById("input" + (startInput + i));
      if (inputField && i < org.members.length) {
        inputField.value = org.members[i];
      }
    }
    // Update output
    updateOutput();
  }
}

function updateTeamName() {
  const team1 = document.getElementById("team1").value || "Team 1";
  const team2 = document.getElementById("team2").value || "Team 2";
  document.getElementById("teamNameDisplay1").textContent = team1;
  document.getElementById("teamNameDisplay2").textContent = team2;
}

function resetContent() {
  // Reset dropdown
  document.getElementById("team1").value = "";
  document.getElementById("team2").value = "";
  updateTeamName();

  document.getElementById("image1").src =
    "https://via.placeholder.com/300x200?text=Image+1";
  document.getElementById("image2").src =
    "https://via.placeholder.com/300x200?text=Image+2";

  document.getElementById("file1").value = "";
  document.getElementById("file2").value = "";

  for (let i = 1; i <= 6; i++) {
    document.getElementById("checkbox" + i).checked = false;
    document.getElementById("extraImage" + i).style.display = "block";
  }

  // Reset input player names
  resetInputs();
}

function toggleImage(imageId) {
  const image = document.getElementById(imageId);
  const checkbox = document.getElementById("checkbox" + imageId.slice(-1));
  image.style.display = checkbox.checked ? "block" : "none";
}

function switchAll() {
  const team1 = document.getElementById("team1");
  const team2 = document.getElementById("team2");
  const tempName = team1.value;
  team1.value = team2.value;
  team2.value = tempName;

  updateTeamName();
  if (team1.value) displayPlayersFromOrg(1);
  if (team2.value) displayPlayersFromOrg(2);

  const img1 = document.getElementById("image1");
  const img2 = document.getElementById("image2");
  const tempSrc = img1.src;
  img1.src = img2.src;
  img2.src = tempSrc;

  for (let i = 1; i <= 3; i++) {
    const checkboxA = document.getElementById("checkbox" + i);
    const checkboxB = document.getElementById("checkbox" + (i + 3));
    const extraImageA = document.getElementById("extraImage" + i);
    const extraImageB = document.getElementById("extraImage" + (i + 3));

    const tempChecked = checkboxA.checked;
    checkboxA.checked = checkboxB.checked;
    checkboxB.checked = tempChecked;

    extraImageA.style.display = checkboxA.checked ? "block" : "none";
    extraImageB.style.display = checkboxB.checked ? "block" : "none";
  }

  switchInputs();
}

document.addEventListener("DOMContentLoaded", function () {
  const tournamentnameInput = document.getElementById("tournamentnamemid");
  const tournamentnameOutput = document.getElementById("tournamentnameOutput");

  if (tournamentnameInput && tournamentnameOutput) {
    tournamentnameInput.addEventListener("input", function () {
      tournamentnameOutput.textContent = tournamentnameInput.value;
    });
  }
});

// Timer functionality
const phases = [
  { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" }, // B- BAN1
  { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" }, // R- BAN1
  { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" }, // B- BAN2
  { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" }, // R- BAN2

  { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" }, // B- PICK1
  { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" }, // R- PICK2
  { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" }, // B- PICK2
  { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" }, // R- PICK1

  { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" }, // R- BAN3
  { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" }, // B- BAN3

  { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" }, // R- PICK1
  { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" }, // B- PICK2
  { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" }, // R- PICK1
];

let currentPhaseIndex = 0; // Track the current phase
let timer = 40; // Timer duration in seconds
let timerInterval; // Store the interval for the timer
let timerRunning = false; // Track if the timer is running

const phaseElement = document.getElementById("phase");
const arrowElement = document.getElementById("arrow");
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const nextPhaseButton = document.getElementById("nextPhase");
const resetButton = document.getElementById("reset");

// Update the UI based on the current phase
function updateUI() {
  if (currentPhaseIndex < phases.length) {
    const currentPhase = phases[currentPhaseIndex];
    phaseElement.textContent = `${currentPhase.type}`;
    arrowElement.src = currentPhase.direction; // Update arrow image
    timerElement.textContent = timer;
    nextPhaseButton.disabled = false; // Enable "Next Phase" button
  } else {
    // When all phases are completed
    phaseElement.textContent = "Finalizing";
    arrowElement.src = "/Assets/Other/Adjustment.gif"; // Remove arrow image
    timerElement.textContent = "VS";
    nextPhaseButton.disabled = true; // Disable the button
  }
}

// Start the timer
function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    timerInterval = setInterval(() => {
      if (timer > 0) {
        timer--;
        timerElement.textContent = timer;
      } else {
        clearInterval(timerInterval); // Stop timer when it reaches 0
        timerRunning = false; // Timer stops running
        moveToNextPhase(); // Automatically move to the next phase
      }
    }, 1000);
  }
}

// Stop the timer
function stopTimer() {
  clearInterval(timerInterval); // Stop the timer
  timerRunning = false;
}

// Move to the next phase
function moveToNextPhase() {
  if (currentPhaseIndex < phases.length) {
    currentPhaseIndex++;
    updateUI();
    if (currentPhaseIndex < phases.length) {
      timer = 40; // Reset timer
      startTimer(); // Restart timer
    }
  }
}

// Reset the entire process
function reset() {
  clearInterval(timerInterval); // Stop the timer
  currentPhaseIndex = 0; // Reset phase index
  timer = 40; // Reset timer
  timerRunning = false;
  updateUI(); // Reset UI
}

// Initialize everything when page loads
document.addEventListener("DOMContentLoaded", function () {
  // Populate organization dropdowns
  populateOrgDropdowns();

  // Add event listeners for team selection
  document.getElementById("team1").addEventListener("change", function () {
    updateTeamName();
    if (this.value) {
      displayPlayersFromOrg(1);
    }
  });

  document.getElementById("team2").addEventListener("change", function () {
    updateTeamName();
    if (this.value) {
      displayPlayersFromOrg(2);
    }
  });

  // Initialize tournament name display
  const tournamentnameInput = document.getElementById("tournamentnamemid");
  const tournamentnameOutput = document.getElementById("tournamentnameOutput");

  if (tournamentnameInput && tournamentnameOutput) {
    tournamentnameInput.addEventListener("input", function () {
      tournamentnameOutput.textContent = tournamentnameInput.value;
    });
  }

  // Initialize timer buttons
  if (startButton) startButton.addEventListener("click", startTimer);
  if (stopButton) stopButton.addEventListener("click", stopTimer);
  if (nextPhaseButton)
    nextPhaseButton.addEventListener("click", () => {
      stopTimer();
      moveToNextPhase();
    });
  if (resetButton) resetButton.addEventListener("click", reset);

  // Initialize UI
  updateUI();
});
