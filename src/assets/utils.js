export function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min)
}

export function shuffleArray(arr) {
  // Loop em todos os elementos
  for (let i = arr.length - 1; i > 0; i--) {
    // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1))
    // Reposicionando elemento
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  // Retornando array com aleatoriedade
  return arr
}

export const wordsList = [
  { label: "Vento", color: "#fff", bordercolor: "#2c2c2c" },
  { label: "Praia", color: "#3aa4ff", bordercolor: "#2967b4" },
  { label: "Chapéu", color: "#fff", bordercolor: "#2c2c2c" },
  { label: "Cachorro", color: "#eb37bc", bordercolor: "#b4298f" },
  { label: "Pincel", color: "#fff", bordercolor: "#2c2c2c" },
  { label: "Leão", color: "#eb37bc", bordercolor: "#b4298f" },
  { label: "Barco", color: "#eb37bc", bordercolor: "#b4298f" },
  { label: "Abacaxi", color: "#3aa4ff", bordercolor: "#2967b4" },
  { label: "Trem", color: "#121212", bordercolor: "#505050" },
  { label: "Cachecol", color: "#fff", bordercolor: "#2c2c2c" },
  { label: "Helicóptero", color: "#3aa4ff", bordercolor: "#2967b4" },
  { label: "Lápis", color: "#eb37bc", bordercolor: "#b4298f" },
  { label: "Esquilo", color: "#3aa4ff", bordercolor: "#2967b4" },
  { label: "Relógio", color: "#3aa4ff", bordercolor: "#2967b4" },
  { label: "Girafa", color: "#eb37bc", bordercolor: "#b4298f" },
  { label: "Limão", color: "#fff", bordercolor: "#2c2c2c" },
  { label: "Caranguejo", color: "#eb37bc", bordercolor: "#b4298f" },
  { label: "Pintura", color: "#fff", bordercolor: "#2c2c2c" },
  { label: "Piano", color: "#3aa4ff", bordercolor: "#2967b4" },
  { label: "Montanha", color: "#3aa4ff", bordercolor: "#2967b4" },
  { label: "Sapatilha", color: "#3aa4ff", bordercolor: "#2967b4" },
  { label: "Teatro", color: "#eb37bc", bordercolor: "#b4298f" },
  { label: "Computador", color: "#fff", bordercolor: "#2c2c2c" },
  { label: "Melancia", color: "#eb37bc", bordercolor: "#b4298f" },
  { label: "Mariposa", color: "#3aa4ff", bordercolor: "#2967b4" },
]
