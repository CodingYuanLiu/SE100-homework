
/* const var:letters
 * Make it convenient to change a letter of a word at a time.
*/
const letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

/* Class:Word
 * Every word in the dic above is merely a string.However,
 * a word which is used cannot be in the ladder again. So 
 * we add a label to each word to mark whether it is used.
*/
class Word{
    constructor(string){
        this.word=string;
        this.used=false;
    }
}
//Real dictionary
var dictionary=[];

//Add a label to every word and and them to the dictionary.
for(str in dic)
{
    dictionary.push(new Word(dic[str]));
}