var module = "Este es mi modulo";

export function validateWord(variable,palabra){
        if(variable.include(palabra)){
            return true;
        }
        return false;
}