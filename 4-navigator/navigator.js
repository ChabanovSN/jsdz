const addressLat = 10;   //- адрес назначения lat (например: 10)
const addressLong = 20;  //- адрес назначения long
const positionLat  = 35; //- текущее положение пользователя lat
const positionLong  = 45; //- текущее положение пользователя long
const distination =  Math.sqrt((addressLat - positionLat)**2 + (addressLong - positionLong)**2);
console.log("Дистанцию до объекта: " + distination );