
// Feet to Mile Calculator Function
function feetToMile(feet){
 var FeetToMileStanderd= 0.00018939394;
 var result=FeetToMileStanderd*feet;
 return result;
}
// Feet to Mile Calculator Function Call
    var mile=feetToMile(10);
console.log(mile);
//Wood Calculator Function
 function woodCalculator(chair, table, bed){
     var chairWoodStanderd = 1;
     var tableWoodStanderd = 3;
     var bedWoodStanderd = 4;
     var totalWood=0;
     totalWood += chairWoodStanderd*chair;
     totalWood += tableWoodStanderd*table;
     totalWood += bedWoodStanderd*bed;
     return totalWood;
 }
 //Wood Calculator Function Call
  var needWood = woodCalculator(1, 1, 1);
  console.log(needWood);
  // BricK Calculator Function 
 function brickCalculator(floor){
     var neededBricks=0;
     const brickStanderdForOneFeet = 1000;
     const tenFloor=10;
     const firstTenFloorHeight = 15;
     const secondTenFloorHeight=12;
     const nextAllFloorHeight=10;
     if (floor<=tenFloor){
        neededBricks+= floor*firstTenFloorHeight*brickStanderdForOneFeet;
     } else if (floor<=(tenFloor+tenFloor)){
        neededBricks += tenFloor*firstTenFloorHeight*brickStanderdForOneFeet;
        neededBricks += (floor-neededBricks)*secondTenFloorHeight*brickStanderdForOneFeet;
     }
     else{
        neededBricks += tenFloor*firstTenFloorHeight*brickStanderdForOneFeet;
        neededBricks += tenFloor*secondTenFloorHeight*brickStanderdForOneFeet;
        neededBricks += (floor-(tenFloor+tenFloor))*nextAllFloorHeight*brickStanderdForOneFeet;
     }
     return neededBricks;
 }

 //Brick Calculator Function call
 var needBricks = brickCalculator(31);
 console.log(needBricks)
 
// Tiny Friends Name Calculator Function
 function tinyFriend(nameList){
     var lenghtCount = 0;
     var tinyName =0;
     var arryLength = nameList.length;
     for(var i =0; i <arryLength; i++){
         var nameLength = nameList[i].length;
         if(lenghtCount<nameLength){
             lenghtCount = nameLength;
             tinyName=nameList[i];
         }
         else{
             tinyname="All Name Is Equale";
         }

     }
     return tinyName;
 }
 // Tiny Friends Name Calculator Function call
 var name =['Fahim', 'Uddin', 'Faysal', 'Mahamud'];
 var smallName= tinyFriend(name);
 console.log(smallName);