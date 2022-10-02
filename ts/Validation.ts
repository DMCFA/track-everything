export const validateUsername = (username: string): void => {
  const signupElement: HTMLDivElement = document.querySelector(
    '.signup'
  ) as HTMLDivElement;
  const usernameErrorLabel: HTMLSpanElement = signupElement.querySelector(
    '.validation-username'
  ) as HTMLSpanElement;
  usernameErrorLabel.innerText = '';
  const usernameErrorInput: HTMLInputElement =
    signupElement.querySelector('#user')!;
  if (!username.match(/^([a-z0-9]|[-._](?![-._])){4,20}$/)) {
    usernameErrorLabel.innerText =
      'Username must have 4 to 20 character and no special characters can be used at the beggining, end or duplicated';
    usernameErrorLabel.classList.toggle('validation-error');
    usernameErrorInput.classList.toggle('error-outline');
  } else {
    usernameErrorLabel.classList.toggle('validated');
    usernameErrorInput.classList.toggle('validated-outline');
  }
};

export const validateEmail = (email: string): void => {
  const signupElement: HTMLDivElement = document.querySelector(
    '.signup'
  ) as HTMLDivElement;
  const emailErrorLabel: HTMLSpanElement = signupElement.querySelector(
    '.validation-email'
  ) as HTMLSpanElement;
  emailErrorLabel.innerText = '';
  if (
    email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailErrorLabel.classList.toggle('validated');
  }
  emailErrorLabel.innerText = 'Please enter a valid email';
};
