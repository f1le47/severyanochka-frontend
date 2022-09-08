import IosSwitchMaterialUi from 'ios-switch-material-ui'
import { useState } from 'react'
import s from './Checkout.module.scss'
import {ReactComponent as DividingLine} from 'assets/img/dividing-line.svg'
import {ReactComponent as SemiCircleBottom} from 'assets/img/semi-circle-bottom.svg'
import { ICheckout } from './ICheckout'
import formattingPrice from 'utils/formattingPrice'
import { useAppSelector } from 'hooks/redux'
import formattingQuantitativeText from 'utils/formattingQuantitativeText'

const Checkout = ({basketProducts}: ICheckout) => {

  const [writeOff, setWriteOff] = useState(true)
  let amountProducts = 0
  let commonPrice = 0
  let discount = 0

  basketProducts.forEach(basketProduct => {
    amountProducts = amountProducts + basketProduct.amount
    commonPrice = commonPrice + basketProduct.price * basketProduct.amount
    if (!!basketProduct.discount) {
      discount = discount + (Number(basketProduct.price) - Number(basketProduct.discount.priceWithCard)) * basketProduct.amount
    }
  })

  const amountBonuses = Math.floor((commonPrice - discount) / 10)

  const haveSavingsCard = useAppSelector(state => state.user.user.haveSavingsCard)
  const numberOfPoints = useAppSelector(state => state.user.savingsCard.numberOfPoints)

  return (
    basketProducts.length > 0 ? (
      <div className={s.checkout}>
      {haveSavingsCard && numberOfPoints > 0 && (
        <>
          <div className={s.cardSavings}>
            <div className={s.writeOff}>
              <IosSwitchMaterialUi
                colorKnobOnLeft="#fff"
                colorKnobOnRight="#fff"
                colorSwitch={writeOff ? "#70C05B" : "#8F8F8F"}
                onChange={() => setWriteOff(prev => !prev)}
              />
              <span className={s.writeOff__text}>{`Списать ${numberOfPoints} ₽`}</span>
            </div>
            <span className={s.cardSavings__text}>{`На карте накоплено ${numberOfPoints} ₽`}</span>
          </div>
          <DividingLine className={s.dividingLine} />
        </>
      )}
      <div className={s.price}>
        <div className={s.priceInfo}>
          <span className={s.amount}>{`${amountProducts} товара`}</span>
          <span className={s.amountPrice}>{formattingPrice(commonPrice)}</span>
        </div>
        {discount > 0 && (
          <div className={s.discount}>
            <span className={s.discount__text}>Скидка</span>
            <span className={s.discount__discount}>{`-${formattingPrice(discount)}`}</span>
          </div>
        )}
      </div>
      <DividingLine className={s.dividingLine} />
      <div className={s.totalPrice}>
        <span className={s.totalPrice__text}>Итог</span>
        <span className={s.totalPrice__price}>{formattingPrice(commonPrice - discount)}</span>
      </div>
      <div className={s.amountBonuses}>
        <SemiCircleBottom className={s.bonusIcon} />
        <div className={s.getBonuses}>
          <span className={s.getBonuses__text}>Вы получаете</span>
          <span className={`${s.getBonuses__text} ${s.getBonuses__text_bold}`}>{`${amountBonuses} ${formattingQuantitativeText('балл', amountBonuses)}`}</span>
        </div>
      </div>
      {commonPrice - discount < 1000 && <span className={s.minimalSum}>Минимальная сумма заказа 1000р</span>}
      <button
        disabled={commonPrice - discount < 1000}
        className={commonPrice - discount < 1000 ? s.orderBtn : `${s.orderBtn} ${s.orderBtn_active}`}
      >
        Оформить заказ
      </button>
    </div>
    ) 
    :
    (<></>)
  )
}

export default Checkout