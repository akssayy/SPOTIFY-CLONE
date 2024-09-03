console.log("lets write Java scripttttt");

 function main(){
let a = fetch("http://127.0.0.1:5500/songs/")
let response = a.text();
console.log(response)
}
main()