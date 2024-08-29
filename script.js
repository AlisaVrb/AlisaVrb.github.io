let errorText = document.querySelector(".form_error");
let inputName = document.querySelector("#name");

let handleNameError = (e) => {
    let inputValue = e.target.value;
    
    if (inputValue.length <= 2) {
        errorText.classList.add("active")
    } else {
        errorText.classList.remove("active")
     }
} 

let blurNameError = (e) => {
    errorText.classList.remove("active")
}

inputName.addEventListener("input", handleNameError);
inputName.addEventListener("blur", blurNameError);

let inputCheck = document.querySelector(".form_check")

let letterCheck = (e) => {
    let inputData = e.data;
    let inputValue = e.target.value;
    
    if (isNaN(inputData) === false & inputValue.length > 2) {
         inputCheck.classList.remove("hidden")
    } else {
        inputCheck.classList.add("hidden")
    }
}

inputName.addEventListener("input", letterCheck);

const sendedForm = document.querySelector(".form_send");
const myForm = document.querySelector("form");

const sendAnswers = async (e) => {
    e.preventDefault()

    const inputName = document.getElementById("name").value;
    const inputAge = document.getElementById("age").value;
    const selectedKitty = document.querySelectorAll('input[name = "kitty"]:checked');
    let allKittens = "";
    selectedKitty.forEach((kitty) => {
        const kittyValue = kitty.value;
        allKittens += kittyValue + "; ";
    });
    const havePets = document.querySelectorAll('input[name = "pets"]:checked');
    const havePetsValue = havePets[0].value;
    const selectedPet = document.querySelectorAll('input[name = "pet"]:checked');
    let allPets = "";
    selectedPet.forEach((pet) => {
        const petValue = pet.value;
        allPets += petValue + "; ";
    });
    const otherPet = document.getElementById("other").value;
    const selectedDay = document.getElementById("week").value;
    const inputSinger = document.getElementById("singer").value;
    const inputSong = document.getElementById("song").value;
    const selectedFlower = document.querySelectorAll('input[name = "flower"]:checked');
    const flowerValue = selectedFlower[0].value;
    const inputFlower = document.getElementById("own").value;
    const inputBook = document.getElementById("book").value;
    const inputPastime = document.getElementById("pastime").value;

    const {data, error} = await supabaseClient
        .from("form")
        .insert({
            name: inputName,
            age: inputAge,
            kitty: allKittens,
            pets: havePetsValue,
            what_pet: allPets,
            pet_own_vers: otherPet,
            week: selectedDay,
            singer: inputSinger,
            karaoke_song: inputSong,
            flowers: flowerValue,
            flower_own_vers: inputFlower,
            book: inputBook,
            pastime: inputPastime
        })
        .select();
    
    myForm.classList.add("hidden")
    sendedForm.classList.remove("hidden")
}


// Create a single supabase client for interacting with your database
const supabaseClient = supabase.createClient('https://yexlgaxwrefibapzyidv.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlleGxnYXh3cmVmaWJhcHp5aWR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0ODAwMTMsImV4cCI6MjAzOTA1NjAxM30.rj79qbyJKH5NNo3lsVyyYlMwNRi1-54cXtcfiBwGO48');


myForm.addEventListener("submit", sendAnswers);





