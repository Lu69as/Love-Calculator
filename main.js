document.addEventListener("keypress", (e) => {
    if (e.key == "Enter")
        calculate(document.querySelector(".name1").value, document.querySelector(".name2").value)
})

function calculate(first, second) {
    let h1 = document.querySelector('h1');
    let h2 = document.querySelector('h2');
    if (first.length < 2 || second.length < 2) return;
    
    let match = localStorage.getItem(first + ", " + second) != null ?
    localStorage.getItem(first + ", " + second) : Math.floor(Math.random() * 100);
    
    if (match >= 95) match = 100;
    else if (match <= 5) match = 0;
    else if (match <= 55 && match >= 45) match = 50;
    
    if (localStorage.getItem(first + ", " + second) == null)
        localStorage.setItem(first + ", " + second, match)

    let message;
    if (match == 0) message = "Match made in Hell. Move to different countries. No, Planets!";
    
    else if (match <= 10) message = "It's so bad it's wierd you even tried to check the machine.";
    
    else if (match <= 25) message = "Try to stay away from each other, it wont end well.";
    
    else if (match < 45) message = "You can pretend to be friends, but both know deep down.";
    
    else if (match == 50) message = "It's right on the line, worth staying friends though.";

    else if (match == 100) message = "Perfect, go to Vegas, Get married, PLEASE!";
    
    else if (match >= 90) message = "Almost Perfect, worth staying together for sure.";
    
    else if (match >= 75) message = "This will last at least a couple of dates.";

    else if (match > 55) message = "It's a good Friendship so just keep it like that.";
    
    document.querySelector(".heart").classList.add("heart-beat")
    setTimeout(() => {document.querySelector(".heart").classList.remove("heart-beat")}, 5000);
    setTimeout(() => {
        h1.innerHTML = message;
        h2.innerHTML = match + "%";
    }, 3900);
}