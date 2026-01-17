//
export const num2k = (num) => {
  return num < 1000 ? num.toString() : Math.round(num / 100) / 10 + 'k'
}
