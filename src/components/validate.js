const validate = values => {
  const errors = {}
  if (!values.projectTitle) {
    errors.projectTitle = 'Required'
  } else if (values.projectTitle.length > 45) {
    errors.projectTitle = 'Must be 45 characters or less'
  }
  
  if (!values.fundingGoal) {
    errors.fundingGoal = "Required, Please don't use $ , or ."
  } else if (isNaN(Number(values.fundingGoal))) {
    errors.fundingGoal = 'Must be a number'
  }

  if (!values.category) {
    errors.category = 'Required'
  }

  return errors
}