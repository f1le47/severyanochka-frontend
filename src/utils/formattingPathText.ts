const favorite = 'favorite'
const basket = 'basket'

function formattingPathText(path: string) {
  switch(path) {
    case favorite: {
      return 'Избранное'
    }
    case basket: {
      return 'Корзина'
    }
  }
}

export default formattingPathText