// describe('index.js', function () {
//         describe('scuberGreetingForFeet()', function () {
//           it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
//             expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
//           });
      
//           it('charges 20 dollars for a distance between 400 and 2000 feet', function () {
//             expect(scuberGreetingForFeet(1500)).to.equal('That will be twenty bucks.');
//           });
      
//           it('charges 30 dollars for a distance over 2000 feet', function () {
//             expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
//           });
      
//           it('does not allow rides over 2500 feet', function () {
//             expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
//           });
//         });
    


// * `scuberGreetingForFeet()` — Use `if` and `else if` statements to return the
// correct greeting based on the distance the passenger desires to travel.

function scuberGreetingForFeet(feet){
        if (feet <= 400)
                return 'This one is on me!'
        else if (400 < feet&&feet < 2000) 
                return 'That will be twenty bucks.'
        else if (2000 < feet&&feet < 2500)
                return 'I will gladly take your thirty bucks.'
        else if (feet > 2500)
                return 'No can do.'
}

//`ternaryCheckCity()` — Use a ternary operator to return the correct response
//based on the desired destination of the passenger.
function ternaryCheckCity(city){
        return (city === 'NYC')? 'Ok, sounds good.' : 'No go.'
}
function switchOnCharmFromTip(tips){
                switch (tips){
                        case "generous":
                                return ("Thank you so much.")
                        case "not as generous":
                                return  ("Thank you.")
                        case "thanks for everything":
                                return ("Bye.")   
}
tips; 
}







// function scuberGreetingForFeet(someValue){
//         if (someValue <= 400)                                   // if lessThan400 => 'This one is on me!'
//                 return 'This one is on me!';
//         else if  (someValue > 400 && someValue < 2000)          // if moreThan400/lessThan2000 => 'That will be twenty bucks.'
//                 return 'That will be twenty bucks.';
//         else if  (someValue > 2000 && someValue < 2500)         // if moreThan2000 => 'I will gladly take your thirty bucks.'
//                 return 'I will gladly take your thirty bucks.';
//         else if  (someValue > 2500)                             // if moreThan2500 =>'No can do.'
//                 return  'No can do.'
// }
// function ternaryCheckCity(city){                                        // describe('ternaryCheckCity()', function () { 
//        return (city === 'NYC')? 'Ok, sounds good.' : 'No go.'
// }

// function switchOnCharmFromTip(tips){
//                 switch (tips){
//                         case "generous":
//                                 return ("Thank you so much.")
//                         case "not as generous":
//                                 return  ("Thank you.")
//                         case "thanks for everything":
//                                 return ("Bye.")   
// }
// tips; 
// }
 



// describe('switchOnCharmFromTip()', function () {
//         it('should return "Thank you so much." if the tip is generous', function () {
//           expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//         });
    
//         it('should return "Thank you." if the tip is not as generous', function () {
//           expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//         });
    
//         it('should return "Bye." if anything else', function () {
//           expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//         });
//       });
//     });
// it('should return "No go." if the destination city is not NYC', function () {
       // expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.')
