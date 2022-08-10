import LoginBtn from 'commons/AuthWindows/AuthRedirectBtns/LoginBtn/LoginBtn';
import AuthWindowWrapper from 'commons/AuthWindows/AuthWindowWrapper';
import Input from 'commons/Inputs/Input/Input';
import Radio from 'commons/Inputs/Radio/Radio';
import Select from 'commons/Inputs/Select/Select';
import confirmPasswordRegistrationValidator from 'utils/ValidationSchemas/confirmPasswordRegistrationValidator';
import passwordRegistrationValidator from 'utils/ValidationSchemas/passwordRegistrationValidator';
import phoneValidator from 'utils/ValidationSchemas/phoneValidator';
import stringValidator from 'utils/ValidationSchemas/stringValidator';
import { useActions } from 'hooks/redux';
import { useState } from 'react';
import s from './RegistrationWindow1.module.scss'
import dateValidator from 'utils/ValidationSchemas/dateValidator';
import { IRegistrationWindow1 } from './IRegistrationWindow1';

const regions = ['Краснодарский край', 'Красноярский край', 'Московская область', 'Ростовская область']
const settlements = ['Краснодар', 'Красноярск', 'Москва', 'Ростов-на-Дону']

const RegistrationWindow1 = ({setRegistrationStage, setInputValue}: IRegistrationWindow1) => {

	const [phoneNumber, setPhoneNumber] = useState('')
	const [surname, setSurname] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
  const [city, setCity] = useState('')
  const [region, setRegion] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState<"male" | "female">('male')

  const [isValid, setIsValid] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const {registration} = useActions()
  const handleSubmit = async () => {
    setInputValue(phoneNumber)
    registration({
      phoneNumber, 
      birthday, 
      city, 
      gender, 
      name, 
      password, 
      region, 
      surname
    }).then((status: number) => {
      status === 200 && setRegistrationStage(2)
    })
  }

  return (
    <AuthWindowWrapper
      btnText='Продолжить'
      handleSubmit={handleSubmit}
      isValid={isValid}
      isTouched={isTouched}
      authRedirectBtns={[<LoginBtn />]}
      title='Регистрация'
    >
      <h2 className={s.registrationWindow__subtitle}>Обязательные поля</h2>
      <div className={s.registrationWindowRequiredFields}>
        <div className={s.registrationWindowRequiredFieldsLeft}>
          <Input 
            inputType='text'
            inputVisual='narrow'
            inputLabel='Телефон'
            setIsValid={setIsValid}
						setInputValue={setPhoneNumber}
            setIsTouched={setIsTouched}
            yupValidator={phoneValidator}
          />
          <Input 
            inputType='text'
						inputVisual='narrow'
            inputLabel='Фамилия'
            setIsValid={setIsValid}
						setInputValue={setSurname}
            setIsTouched={setIsTouched}
            yupValidator={stringValidator}
          />
          <Input 
            inputType='text'
						inputVisual='narrow'
            inputLabel='Имя' 
						setInputValue={setName}
            setIsTouched={setIsTouched}
            setIsValid={setIsValid}
            yupValidator={stringValidator}
          />
          <Input 
            inputType='password'
						inputVisual='narrow'
            inputLabel='Пароль' 
						setInputValue={setPassword}
            setIsTouched={setIsTouched}
            setIsValid={setIsValid}
            yupValidator={passwordRegistrationValidator}
          />
          <Input 
            inputType='password'
						inputVisual='narrow'
            inputLabel='Повторите пароль' 
						setInputValue={setConfirmPassword}
            setIsTouched={setIsTouched}
            setIsValid={setIsValid}
            yupValidator={confirmPasswordRegistrationValidator(password)} 
          />
        </div>
        <div className={s.registrationWindowRequiredFieldsRight}>
          <Input 
            inputType='date'
						inputVisual='narrow'
            inputLabel='Дата рождения' 
						setInputValue={setBirthday}
            setIsTouched={setIsTouched}
            setIsValid={setIsValid}
            yupValidator={dateValidator}
          />
          <Select 
            selectName='region'
            options={regions}
            setInputValue={setRegion}
            selectLabel='Регион' 
          />
          <Select 
            selectName='locality'
            options={settlements}
            setInputValue={setCity}
            selectLabel='Населенный пункт' 
          />
          <Radio
            setInputValue={setGender}
          />
        </div>
      </div>
    </AuthWindowWrapper>
  );
};

export default RegistrationWindow1