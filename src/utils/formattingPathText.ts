const favorite = 'favorite'

function formattingPathText(path: string) {
  switch(path) {
    case favorite: {
      return 'Избранное'
    }
  }
}

export default formattingPathText