// you just need to implement the passwordStrengthChecker function
function passwordStrengthChecker(password) {
  
    const oneUpper = /[A-Z]/.test(password);
    const oneLower = /[a-z]/.test(password);
    const oneDigit = /\d/.test(password);
    const oneSpecial = /[^a-zA-Z0-9]/.test(password);
    

    // OR 

    /*
    let oneUpper = false;
    let oneLower = false;
    let oneDigit = false;
    let oneSpecial = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        const code = password.charCodeAt(i);

        if (code >= 65 && code <= 90) oneUpper = true;        // A-Z
        else if (code >= 97 && code <= 122) oneLower = true;  // a-z
        else if (code >= 48 && code <= 57) oneDigit = true;   // 0-9
        else oneSpecial = true;                               // Anything else
    }

    if (oneUpper && oneLower && oneDigit && oneSpecial) {
        return "Strong";
    } else {
        return "Weak";
    }
    }
    */

    // write your logic here
    if (password.length < 8) {
      return "Weak";
    }
  
    if (oneUpper && oneLower && oneDigit && oneSpecial) {
      return "Strong";
    }
    else {
      return "Weak";
    }
  }
  
console.log(passwordStrengthChecker("Password123!"));
console.log(passwordStrengthChecker("chai"));