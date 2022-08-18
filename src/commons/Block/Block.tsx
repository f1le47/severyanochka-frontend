import s from './Block.module.scss'
import { IBlock } from './IBlock'

const Block = ({blockTitle, children}: IBlock) => {
  return (
    <div className={s.block}>
      <h1 className={s.title}>{blockTitle}</h1>
      {children}
    </div>
  )
}

export default Block