const accountId =14453
let accountEmail = "syncmail2024@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

//accountId = 2 // not allowed 

accountEmail = "ac@ac.com"
accountPassword = "13144"
accountCity = "mau"

console.log(accountId);

/*

prefer not to use var bcoz of issue in block scope and 
functional scope

*/

console.table([accountId, accountEmail , accountPassword , accountCity, accountState]);