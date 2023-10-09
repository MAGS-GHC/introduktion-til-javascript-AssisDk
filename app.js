//Skriv alt jeres kode her

console.log(
  "Opgave 1.1 - Lav et program, som skriver “Hello World” i konsollen"
);
//Lav jeres svar her
console.log("Hello World");
console.log("Hello World \n ");

//**************************
console.log(
  "Opgave 2.1 - Conditionals - If / else statements"
);
let tal = 200;

if (tal %2 == 0){
  console.log(" det er lige");
}

else{console.log(" det er ulige");

};
//**************************
console.log(
  "Opgave 2.2 - Conditionals - If / else statements")

let tal2 = 25;

if (tal2 %5 == 0){
  console.log("Det går op i 5");
}

else {console.log("Det går ikke op i 5");
};

//**************************
console.log(
  "Opgave 2.3 - Conditionals - If / else statements")
let randomTal = Math.floor(Math.random()*100)
console.log(randomTal);
if (randomTal %5 == 0){
  console.log("Det går op i 5");
}

else {console.log("Det går ikke op i 5");
};

//**************************
console.log(
  "Opgave 2.4 - Conditionals - If / else statements")
  let a=50, b = 33, c=60;
  if (a > b && a > c ){
    console.log("A er størst");}
  else if (b > a && b > c ){
      console.log("B er størst")
    }
  else {console.log("C er størst")}

 //**************************
console.log(
  "Opgave 2.5 - Conditionals - If / else statements")
let temp = 0;
if (temp <=0){console.log("Det er frostvejr")}
else if (temp >0 && temp <11){console.log("Det er meget koldt")}
else if (temp >=11 && temp <21){console.log("Det er koldt")}
else if (temp >=21 && temp <31){console.log("Det er normal vejr")}
else if (temp >=31 && temp <41){console.log("Det er varmt")}
else {console.log("Det er meget varmt")}

//**************************
console.log(
  "Opgave 2.6 - Conditionals - If / else statements")
let day = 4;
if (day == 1){console.log("Den 1. dag i ugen er mandag")}
else if ( day == 2){console.log("Den 2. dag i ugen er tirsdag")}
else if ( day == 3){console.log("Den 3. dag i ugen er onsdag")}
else if ( day == 4){console.log("Den 4. dag i ugen er torsdag")}
else if ( day == 5){console.log("Den 5. dag i ugen er fredag")}
else if ( day == 6){console.log("Den 6. dag i ugen er lørdag")}
else if ( day == 7){console.log("Den 7. dag i ugen er søndag")}
else {console.log("Det indtastet er ugyldigt")}

//**************************
console.log(
  "Opgave 3.1 - Simple loops (Uden arrays eller lign.)")
{let i = 0;
while (i <=100) {
    console.log(i);
    i++;
}}
//**************************
console.log(
  "Opgave 3.2 - Simple loops (Uden arrays eller lign.)")
{let i = 0;
while (i <= 100) {
  console.log(i + " " + (i+ 1) + " " + (i+2))  
 
i++
}}
console.log(
  "Opgave 3.3 - Simple loops (Uden arrays eller lign.)")
  for (let i = 1; i <30; i++) {
    if(i%3==0){console.log("Fizz");}
    else if (i%5==0){console.log("Buzz")}
    else if (i%3==0 && i%5==0){cconsole.log("FizzBuzz")}
    else {console.log(i)}
    
  }

  let i = 1
  while (i <30) {
    if(i%3==0){console.log("Fizz");}
    else if (i%5==0){console.log("Buzz")}
    else if (i%3==0 && i%5==0){cconsole.log("FizzBuzz")}
    else {console.log(i)}
    i++
  }
  console.log(
    "Opgave 3.4 - Simple loops (Uden arrays eller lign.)")
    
    {
      let f = 7;
      let x = 1
      while ( f >=1){
       x= x*f
        f--
        
      }
      console.log("Det faktorielle for tallet er "+ x )

      
    }
    {
      
      let x = 1
      for (let f = 7; f >1; f--){
       x= x*f
        
      }
      console.log("Det faktorielle for tallet er "+ x )

      
    }
    console.log(
      "Opgave 3.5 - Simple loops (Uden arrays eller lign.)")
      {
        let x =0
        let y =20
        let z = 0
        while ( y >= 1){
          z= z+x
           y--
           
         }
         console.log("Det giver "+ z )

      }
      console.log("Opgave 4.1 - Arrays)");
      let byer = ["Randers", "Viborg", "Aarhus","København"]
      console.log(byer[1]);
      console.log("Opgave 4.2 - Arrays)");
      byer.push("Skive")
      console.log("Opgave 4.3 - Arrays)");
      let talrække = [0, 1, 0, 3, 4, 5, 6]
      talrække.splice(2,1,)
      talrække.splice(2,0, 2)
      console.log(talrække[2]);


        

