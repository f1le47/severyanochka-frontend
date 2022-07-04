const initialState = {
  isAuth: true,
  mobilePhone: null,
  surname: '',
  name: 'Alexsey',
  birthday: '',
  locality: '',
  gender: '',
  email: '',
  avatar: ''
}

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default: return state;
  }
}

export default authReducer;