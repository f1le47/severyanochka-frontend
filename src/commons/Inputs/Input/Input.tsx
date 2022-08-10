import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import s from './Input.module.scss'
import passOn from 'assets/img/authWindow/passOn.svg'
import passOff from 'assets/img/authWindow/passOff.svg'
import yupErrorsHandler from 'utils/ValidationSchemas/yupErrorsHandler'
import xmark from 'assets/img/authWindow/xmark.svg'
import { IInput } from './IInput'
import { YupError } from 'types/IYupError'

const Input = ({inputLabel, inputType, yupValidator, setInputValue, inputVisual, setIsValid, setIsTouched}: IInput) => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const [errors, setErrors] = useState<Array<YupError>>([])
  const [isErrorsBlockVisible, setIsErrorsBlockVisible] = useState(false)

  let type
  if (inputType === 'text') {
    type = 'text'
  } else if (inputType === 'password') {
    isPasswordVisible ? type = 'text' : type = 'password'
  } else if (inputType === 'date') {
    type = 'date'
  } else if (inputType === 'code') {
    type = 'password'
  }

  let inputPaddingRight
  let inputWidth
  let inputHeight
  if (inputType === 'text' || inputType === 'date') {
    inputWidth = '228px'
    inputPaddingRight = '0px'
  } else if (inputType === 'password') {
    inputWidth = '192px'
    inputPaddingRight = '36px'
  } else if (inputType === 'code') {
    inputWidth = '78px'
    inputPaddingRight = '0px'
  }
  inputVisual === 'narrow' ? inputHeight = '24px' : inputHeight = '36px'

  const {values, handleChange} = useFormik({
    initialValues: {
      input: ''
    },
    onSubmit: () => {}
  })

  useEffect(() => {
    setInputValue(values.input)
  })

  useEffect(() => {
    try {
      yupValidator.validateSync({input: values.input}, { abortEarly: false })
      setErrors([])
      setIsValid(true)
    } catch (e) {
      setIsValid(false)
      const newErrors: Array<YupError> = []
      const errors: Array<string> = e.errors
      errors.map(error => {
        const err = yupErrorsHandler(error)
        err && newErrors.push(err)
        return err
      })
      setErrors(newErrors)
    }
  }, [values.input, setErrors, yupValidator, setIsValid])

  return <div className={s.field}>
    <span className={s.field__label}>{inputLabel}</span>
      <div className={s.fieldInput}>
        <input 
          type={type}
          name="input"
          style={{width: inputWidth, height: inputHeight, paddingRight: inputPaddingRight}}
          value={values.input}
          onBlur={() => {
            setIsErrorsBlockVisible(false)
            setInputValue(values.input)
          }}
          onFocus={() => {
            setIsTouched(true)
            setIsErrorsBlockVisible(true)
          }}
          onChange={handleChange}
          className={s.fieldInput__input} 
        />
        {inputType === 'password' && 
          <img src={isPasswordVisible ? passOff : passOn}
              alt="switch password visibility" 
              onClick={() => setIsPasswordVisible(!isPasswordVisible)} 
              className={s.fieldInput__img} /> 
        }
        {errors.length > 0 && isErrorsBlockVisible && (
          <div className={s.fieldErrors}>
            {errors.map(error => {
              return (
                <div className={s.fieldErrorsError} key={error.id + '_' + error.message}>
                  <img src={xmark} alt="" className={s.fieldErrorsError__icon} />
                  <span className={s.fieldErrorsError__text}>{error.message}</span>
                </div>
              )
            })}
          </div>
        )}
      </div>
  </div>
}

export default Input