//
export const num2k = (num) => {
  return num < 1000 ? num.toString() : Math.round(num / 100) / 10 + 'k'
}

export const fErr = (f, field) => {
  return f.touched[field] && f.errors[field]
}
