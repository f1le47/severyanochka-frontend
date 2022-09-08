function formattingQuantitativeText(word: string, num: number) {
  const str = String(num)
  
  if (Number(str) >= 10 && Number(str) <= 19) {
    return `${word}ов`
  } else if (Number(str[str.length - 1]) === 0) {
    return `${word}ов`
  } else if (Number(str[str.length - 1]) === 1) {
    return `${word}`
  } else if (Number(str[str.length - 1]) >= 2 && Number(str[str.length - 1]) <= 4) {
    return `${word}а`
  } else if (Number(str[str.length - 1]) >= 5 && Number(str[str.length - 1]) <= 9) {
    return `${word}ов`
  }
}

export default formattingQuantitativeText