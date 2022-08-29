function formattingPrice(price: number) {
  if (price === 0) {
    return 0
  }
  const newPrice = Number(price).toFixed(2)
  const formattedPrice = newPrice.toString().split('.')

  if (formattedPrice[1].length === 1) {
    return `${formattedPrice.join(',')}0 ₽`
  } else {
    return `${formattedPrice.join(',')} ₽`
  }
} 

export default formattingPrice