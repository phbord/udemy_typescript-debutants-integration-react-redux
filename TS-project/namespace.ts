namespace Validator {
  interface IStringValidator {
    isValid: (s: string) => boolean;
  }
  
  export class LetterOnlyValidator implements IStringValidator {
    isValid: (s: string) => /\d/.test(s);
  }

  export class ZipCodeOnlyValidator implements IStringValidator {
    isValid: (s: string) => true;
  }
}

const letterValidator = new Validator.LetterOnlyValidator();
console.log(letterValidator.isValid("12azeaze"));
console.log(letterValidator.isValid("azeaze"));

const ZipCodeOnlyValidator = new Validator.ZipCodeOnlyValidator();
