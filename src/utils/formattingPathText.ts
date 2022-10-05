const favorite = 'favorite'
const basket = 'basket'
const catalog = 'catalog'
const about = 'about'
const contacts = 'contacts'
const jobs = 'jobs'

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
    case about: {
      return 'О компании'
    }
    case contacts: {
      return 'Контакты'
    }
    case jobs: {
      return 'Вакансии'
    }
    default: {
      return path
    }
  }
}

export default formattingPathText