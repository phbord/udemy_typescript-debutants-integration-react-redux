/* 
  Décorateurs :
  - fonctions ou variables au-dessus des classes, qui vont exécuter du code
  - accession à des métadonnées (ex. noms de fonctions, paramètres, variables de classes, résultats retournés, nombre de classes...)
  - ajouter @ devant le décorateur pour l'appeler
*/

//@classLogger
//@classLoggerParam("tata")
class UneClasse {
  @propertyLogger
  private _uneVariable: string;

  constructor(v: string) {
    this._uneVariable = v;
  }

  @methodLogger()
  multiply(a: number, b:number) {
    return a*b;
  }
  @methodLogger()
  toPlural(words: string[]) {
    return words.map((t: string) => t + "s");
  }
  get uneVariable() {
    return this._uneVariable;
  }
  set uneVariable(v: string) {
    this._uneVariable = v;
  }
}

// Décorateurs de classes
function classLogger(classConstructor: Function) {
  console.log("classLogger() ", classConstructor); //constructeur de la classe
}
function classLoggerParam(param: string) {
  return function (classConstructor: Function) {
    console.log("classLogger() ", classConstructor);
  }
}

// Décorateurs de methodes
function methodLogger() {
  return function(target: Object, methodName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
    const method: Function = propertyDescriptor.value;
    propertyDescriptor.value = function(...methodArguments: any[]) {
      const result = method.apply(this.mathodArguments);
      console.log("la fonction ", methodName, " est appelée avec les params ", methodArguments, " et le résultat est ", result);
      
    };
    return propertyDescriptor;
  }
}

const u = new UneClasse("test");
u.multiply(2, 3);
u.toPlural(["chien", "chat", "mouton"]);

function propertyLogger(target: Object, propertyName: string) {
  let propertyValue = this[propertyName];
  const getterWithLogger = () => {
    console.log(`Get : ${propertyName} => ${propertyValue}`);
    return propertyValue;
  };
  const setterWithLogger = (newVal) => {
    console.log(`Set : ${propertyName} => ${propertyValue}`);
    propertyValue = newVal;
  };
  Object.defineProperty(target, propertyName, {
    get: getterWithLogger,
    set: setterWithLogger,
    enumerable: true,
    configurable: true
  });
}

u.uneVariable;
u.uneVariable = "modif";