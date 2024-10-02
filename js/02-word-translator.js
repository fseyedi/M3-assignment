let inputLang = prompt("Enter the a language code")

if (inputLang == "es"){
    console.log("Hello World translated in Spanish is: Hola Mundo")
} 
else if (inputLang =="de"){
    console.log("Hello World translated in Deutsch is: Hallo Welt")
}
else if (inputLang =="fr"){
    console.log("Hello World translated in French is: Bonjour le monde")
}else {
    console.log("Hello World") //for EN and default
}