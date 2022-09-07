const favorite = 'favorite'
const basket = 'basket'
const catalog = 'catalog'

function formattingPathText(path: string) {
  switch(path) {
    case favorite: {
      return 'Избранное'
    }
    case basket: {
      return 'Корзина'
    }
    case catalog: {
      return 'Каталог'
    }
    default: {
      return path
    }
  }
}

export default formattingPathText