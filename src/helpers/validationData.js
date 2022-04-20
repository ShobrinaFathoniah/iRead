const emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const checkEmail = email => {
  if (email && typeof email === 'string') {
    if (emailValidate.test(email)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const angka = /[0-9]/;
const huruf = /[a-z]/;

export const isValidPassword = givenPassword => {
  if (typeof givenPassword === 'string' && givenPassword) {
    if (givenPassword.length < 8) {
      return false; //+ ", karena jumlah password kurang, yaitu hanya " + givenPassword.length
    } else if (!angka.test(givenPassword)) {
      return false; //+ ", karena tidak ada angka"
    } else if (!huruf.test(givenPassword)) {
      return false; //+ ", karena tidak ada angka"
    } else {
      return true;
    }
  } else {
    return false; //"ERROR: Invalid Type Data"
  }
};
