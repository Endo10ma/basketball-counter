let scores = {
    home: parseInt(document.getElementById("home").textContent),
    guest: parseInt(document.getElementById("guest").textContent)
}

function highlight(){
    if (scores["home"] > scores["guest"]){
        document.getElementById("homeTitle").style.color = "blue"
        document.getElementById("guestTitle").style.color = "white"
    }
    else{
        document.getElementById("guestTitle").style.color = "blue"
        document.getElementById("homeTitle").style.color = "white"
    }
}


highlight()



function updateScore(team, score){
    scores[team] += score
    document.getElementById(team).textContent = scores[team]
    highlight()
}

