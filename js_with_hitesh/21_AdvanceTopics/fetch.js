// what is fetch() :  When in fetch in Node js natively khushi ka thikana nahi
// we Can learn or understand using the DIGRAM At File 20 Async
// this example helps to understand
fetch("https://jsonplaceholder.typicode.com/users") // Becuse it returns the Promis .then() lagana chalega
  .then((responce) => {
    return responce.json(); // We return it with converting json() format
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// The hitesh bhaiya read the block which has how the XML http req is used pehle how to involve new fetch and benifits
// Interview : When promise se apne req kari vaha se ayi ki 404 error to vo kaha ayega
// => Ye responce me hi ayega becuse direct error nahi bata sakta Error jab hoga jab Request kar hi nahi paya

// Then abhi hum real me samzenge Digram se

/* ** IMP => Yad karo ki last lecture me hamne jo bhi promises and fetch like the to fetch ka result pehle a raha tha and baki ka badme 
ANS => becuse hamne jo digram me video se histesh sir ne bataya tha ki Fetch() ko alag se queue me handle karte he => PRIORITY HIGH rehti he
Defualt name od Q : micro task queue, prority queue
*/

// Or ki kyu hitesh bhai fetch() pe dhyan dene ke liye keh rahe the
/* => Fetch() => Isme me do zan bahgte he Kam karne ke lie
                                    Responce = fetch('Something')
                    /                                                                                                                \
                    Data (Line no 34)| onfullField[ Array do not allow to push OOR] (resolve) | onRejection[fun] (reject)       Web Browser/Node
                                                                                                                                        |
                                                                                                                                    Network request (request ja rahi he using the browser or ye browser or node ki help se hota he)
                                                                                                                                                                             /                                               \
Data => Initialy(undefined) memeory empty  2 array  he vo able he data ko fullfield karne ke liye                                                                       It resolve then GO=> onFullfield[]              It reject then GO=> onReject[]   (request atak gayi (vichar kar ki apan 404 wala e,g)) 
*/




