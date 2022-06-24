
fourth.addEventListener("click", Corrections) // Function executed when Corrections button is Clicked);
first.addEventListener("click", () => {
    //This Function is called when html button is clicked
    con.classList.remove("conHide")
    con.classList.add("conShow")
    questions.classList.remove("questionHide")
    questions.classList.add("questionShow")

});
fifth.addEventListener("click", () => {
    //Function Called when Quiz Statistics button is Clicked Ends
    cend.classList.remove("Corrections");
    cend.classList.add("CorrectionsHide")
    con.classList.add("conHide")
    con.classList.remove("conShow")
    conCss.classList.add("CssHide")
    conCss.classList.remove("Css")
    conJs.classList.remove("Java")
    conJs.classList.add("JavaHide")
    con.style.display = "none";
    conCss.style.display = "none";
    conJs.style.display = "none";
    fourth.disabled = true
    res.classList.add("Result")
    res.classList.remove("ResultHide")
    congrat.innerHTML += `Congratulations ${PlayerNames} For SucessFully Completing The Quiz`
    document.body.style.backgroundColor = "rgba(0,0,0,.5)";
});
endQuiz.addEventListener("click", () => {
    //Function called when the endquiz button is clicked
    end.classList.remove("FrontShow")
    instruct.classList.add("instructions")
    instruct.classList.remove("instructHide")
    first.disabled = false
    fifth.disabled = true
    congrat.innerHTML = ``
    res.classList.remove("Result")
    res.classList.add("ResultHide")
    document.body.style.backgroundColor = "white";
})

for (let point of htmloptions) {
    //function which goes to next question after a User Selects an Option in Html Section 

    point.addEventListener("click", function() {
        answered.innerHTML = `Questions Answered:${count+1}/10`
        answers.forEach((correct) => {
            if (point.value === correct && point.checked) {
                LeaderBoard[PlayerNames] = correctAnswers.push(point.value)
            }
        })
        setTimeout(() => {
            count++
            if (allDiv[count].classList.contains("hide")) {
                allDiv[count].classList.remove("hide")
                allDiv[count].classList.add("show")
                allDiv[count - 1].classList.add("hide")
                allDiv[count - 1].classList.remove("show")
            }
            if (count +1 === allDiv.length) {
                Hbtn.style.display = "block"
                Hbtn.style.marginTop = "15px"
            }
        }, 500);
    })
    point.addEventListener("mouseover", () => {
        point.style.cursor = "pointer"
    })
}
for (let pointer of Cssoptions) {
    //function which goes to next question after a User Selects an Option in Css Section 

    pointer.addEventListener("click", () => {
        answered.innerHTML = `Questions Answered:${count+1}/10`
        setTimeout(() => {
            count++
            if (cDiv[count].classList.contains("hide")) {
                cDiv[count].classList.remove("hide")
                cDiv[count].classList.add("show")
                cDiv[count - 1].classList.add("hide")
                cDiv[count - 1].classList.remove("show")
            }
            if (count == cDiv.length - 1) {
                Cbtn.style.display = "block"
                Cbtn.style.marginTop = "15px"
            }

        }, 500);
        cAnswers.forEach((corr) => {
            if (pointer.value === corr && pointer.checked) {
                LeaderBoard[PlayerNames] = cCorrect.push(pointer.value)
                pointer.classList.add("corr")
            }
        })
    })
    pointer.addEventListener("mouseover", () => {
        pointer.style.cursor = "pointer"
    })
}
for (let j of Joptions) {
    //function which goes to next question after a User Selects an Option in Javascript Section 
    j.addEventListener("click", () => {
        answered.innerHTML = `Questions Answered:${count+1}/10`
        setTimeout(() => {
            count++
            if (jDiv[count].classList.contains("hide")) {
                jDiv[count].classList.remove("hide")
                jDiv[count].classList.add("show")
                jDiv[count - 1].classList.add("hide")
                jDiv[count - 1].classList.remove("show")
            }
            if (count == jDiv.length - 1) {
                Jbtn.style.display = "block"
                Jbtn.style.marginTop = "15px"
            }
        }, 500);
        jAnswers.forEach((cor) => {
            if (j.value === cor && j.checked) {
                LeaderBoard[PlayerNames] = jCorrect.push(j.value)
            }
        })
    })
    j.addEventListener("mouseover", () => {
        j.style.cursor = "pointer"
    })
}
 
let pattern = /[0-9]/
sub.addEventListener("click", () => {
    //Function Executed When Start Button is Clicked
    if (!player.value) {
        alert("Please Enter Your Name")
    } else if (pattern.test(player.value)) {
        alert("Number Is Not Allowed")
    } else {
        PlayerNames.push(player.value)
        player.value = ""
        instruct.classList.remove("instructions")
        instruct.classList.add("instructHide")
        end.classList.add("FrontShow")
    }
});
Hbtn.addEventListener("click",HtmlNextLogic);
Cbtn.addEventListener("click",CssNextLogic);
Jbtn.addEventListener("click",JsNextLogic);
//Code Block Logics For Moving To Next Section when Each Section Question Finishes

vew.addEventListener("click", () => {
    //Executed When View Score button is Clicked
if (disp.classList.contains("Display")) {
        disp.classList.remove("Display")
        let tot = `${ correctAnswers.length + cCorrect.length + jCorrect.length }`
        let totPer = `${answers.length + cAnswers.length + jAnswers.length }`
        total.innerHTML = `Total Score:${tot}`
        totalPer.innerHTML = `Total Score in Percentage:${Math.floor(tot/totPer* 100)}%`

    } else {
        disp.classList.remove("show")
        disp.classList.add("Display")
    }

})