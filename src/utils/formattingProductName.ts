function formattingProductName(productName: string) {
  if (productName.length > 35) {
    const newStr = productName.split('').slice(0, 35).join('')
    return `${newStr}...`
  } else {
    return productName
  }
}

export default formattingProductName;