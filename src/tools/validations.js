export const login_passwords_validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (!/^.*(?=.{6,}).*$/.test(values.password)) {
    errors.password = 'Password must be 6 characters or more'
  }
  if (!values.password_confirm) {
    errors.password_confirm = 'Required'
  } else if (!(values.password_confirm === values.password)) {
    errors.password_confirm = 'Passwords must be the same'
  }
  return errors
}


const isValidDate = (year, month, day) => {  
  if (year && month && day) {
    let newMonth = parseInt(month, 10) - 1;
    let d = new Date(year, newMonth, day);
    if (d.getFullYear() === Number(year) && d.getMonth() === Number(newMonth) && d.getDate() === Number(day) ) {
      return true;
    }  
    return false;
  }
  return true;    
}

export const personal_data_validate = values => {
  const errors = {}
  if (!values.day) {
    errors.day = 'Required'
  } else if (values.day < 1) {
    errors.day = 'Please select normal day'
  } else if (values.day > 31) {
      errors.day = 'Please select normal day'
  }
  if (!values.month) {
    errors.month = 'Required'
  } else if (values.month < 1) {
    errors.month = 'Please select normal month'
  } else if (values.month > 12) {
    errors.month = 'Please select normal month'
  } else if (!/^\d{2}$/.test(values.month)) {
    errors.month = 'Month must have two digit'
  }
  if (!values.year) {
    errors.year = 'Required'
  } else if (!/^\d{4}$/.test(values.year)) {
    errors.year = 'Please select normal year'
  } else if (values.year > 1999) {
    errors.year = 'The user must be 18 year old or more'
  }  else if (values.year < 1900) {
    errors.year = 'Sorry but you already died'
  }
  if (!isValidDate(values.year, values.month, values.day)) {    
    errors.month = "Invalid date";
  }  
  if (!values.sex) {
    errors.sex = 'Select one please'
  }
  return errors
}

