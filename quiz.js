let answers = ["HyperTextMarkUpLanguage", "Anchor", "Web", "ordered", "blank",  "division", "Required", "Mail", "Consortium",  "Engine"
]
let cAnswers = ["CascadingStyleSheet", "Six", "Asterisk", "Child", "Green",
    "Transition", "Visible", "AlignItems", "Area",
    "Responsive", 
]
let jAnswers = ["Scripting", "Loosely", "Arrow", "Ternary", "Not", "Annonymous", "Then",  "anchor", "js", "upload"]
console.log(jAnswers.length)
let Coptions = document.querySelectorAll(".CssHide>div>label>input[type='radio']")
let cDiv = document.querySelectorAll(".CssHide>div")
let conJs = document.getElementById("conJs")
let conCss = document.getElementById("conCss")
let togglebtns = document.querySelectorAll(".FrontHide>button")
let Joptions = document.querySelectorAll(".JavaHide>div>label>input[type='radio']")
let jDiv = document.querySelectorAll(".JavaHide>div")
let options = document.querySelectorAll(".conHide>div>label>input[type='radio']")
let Hbtn = document.getElementById("sp")
let Cbtn = document.getElementById("cp")
let Jbtn = document.getElementById("jp")
let correctAnswers = [];
let cCorrect = []
let jCorrect = []
let allDiv = document.querySelectorAll(".conHide>div")
let count = 0;
let next = document.getElementById("next")
let instruct = document.getElementById("instruct")
let con = document.getElementById("conHtml");
let PlayerNames = []
let LeaderBoard = {}
let player = document.getElementById("player")
let sub = document.getElementById("sub")
let end = document.getElementById("end")
let correctOnes = document.getElementById("correct")
let failed = document.getElementById("failed")
let percent = document.getElementById("Percent")
let endQuiz = document.getElementById("quizend")
let tab = document.getElementById("table")
let all = document.querySelectorAll(".FrontHide>button")
const [first, second, last, fourth, fifth] = all
let vew = document.getElementById("view")
let disp = document.getElementById("dis")
let resultAnalysis = document.querySelectorAll(".Display>h2")
let res = document.getElementById("res")
const [total, totalPer] = resultAnalysis
let core = document.getElementById("core")
let congrat = document.getElementById("congrat")
let cend = document.getElementById("cend")
let corrected = document.getElementById("corrected")
fourth.addEventListener("click", Corrections);
let questions = document.getElementById("questions")
let answered = document.getElementById("answered")


function Corrections() {
    cend.classList.add("Corrections");
    cend.classList.remove("CorrectionsHide")
    con.classList.remove("conHide")
    con.classList.add("conShow")
    conCss.classList.add("Css")
    conCss.classList.remove("CssHide")
    conJs.classList.add("Java")
    conJs.classList.remove("JavaHide")
    con.style.display = "block";
    conCss.style.display = "block";
    conJs.style.display = "block";
    con.style.backgroundColor = "white"
    conCss.style.backgroundColor = "white"
    conJs.style.backgroundColor = "white"
    cend.appendChild(con)
    cend.appendChild(conCss)
    cend.appendChild(conJs)
    for (let a of allDiv) {
        a.classList.add("show")
        a.classList.remove("hide")
        a.style.borderRadius = "0px"
    }
    for (let b of cDiv) {
        b.classList.add("show")
        b.classList.remove("hide")
        b.style.borderRadius = "0px"
    }
    for (let c of jDiv) {
        c.classList.add("show")
        c.classList.remove("hide")
        c.style.borderRadius = "0px"
    }
    for (let ht of options) {
        answers.forEach(cht => {
            if (ht.checked && ht.value === cht) {
                ht.parentElement.style.color = "green"
            } else if (!ht.checked && ht.value === cht) {
                ht.parentElement.style.color = "blue"
            }
        })
    }
    for (let st of Coptions) {
        cAnswers.forEach(cst => {
            if (st.checked && st.value == cst) {
                st.parentElement.style.color = "green"
            } else if (!st.checked && st.value === cst) {
                st.parentElement.style.color = "blue"
            }
        })
    }
    for (let jt of Joptions) {
        jAnswers.forEach(cjt => {
            if (jt.checked && jt.value == cjt) {
                jt.parentElement.style.color = "green"
            } else if (!jt.checked && jt.value === cjt) {
                jt.parentElement.style.color = "blue"
            }
        })
    }
}
fifth.addEventListener("click", () => {
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
    document.body.style.backgroundColor = "black";
});
endQuiz.addEventListener("click", () => {
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

for (let point of options) {
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
            if (count === allDiv.length - 1) {
                Hbtn.style.display = "block"
                Hbtn.style.marginTop = "15px"
            }
        }, 500);
    })
    point.addEventListener("mouseover", () => {
        point.style.cursor = "pointer"
    })
}
for (let pointer of Coptions) {
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
for (let btns = 0; btns < togglebtns.length; btns++) {
    togglebtns[0].addEventListener("click", () => {
        if (con.classList.contains("conHide")) {
            con.classList.remove("conHide")
            con.classList.add("conShow")
            questions.classList.remove("questionHide")
            questions.classList.add("questionShow")
        }
    })
    togglebtns[1].addEventListener("click", () => {
        conCss.classList.add("Css")
        conCss.classList.remove("CssHide")

    })
    togglebtns[2].addEventListener("click", () => {
        conJs.classList.add("Java")
        conJs.classList.remove("JavaHide")
    })
}
let pattern = /[0-9]/
sub.addEventListener("click", () => {
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
Hbtn.addEventListener("click", () => {
    correctOnes.innerHTML = `<b>${correctAnswers.length}</b> `;
    correctOnes.style.color = "green";
    failed.innerHTML = `<b>${answers.length-correctAnswers.length}</b>`
    failed.style.color = "red"
    let percentage = correctAnswers.length / answers.length * 100
    percent.innerHTML = Math.floor(percentage)
    tab.style.display = "block";
    Hbtn.style.display = "none"

    if (percentage >= 10) {
        next.innerHTML = "Move To Css";
        next.style.backgroundColor = "green"
        next.addEventListener("click", () => {
            con.classList.remove("conShow")
            con.classList.add("conHide")
            conCss.classList.add("Css")
            conCss.classList.remove("CssHide")
            tab.style.display = "none";
            count = 0
            first.disabled = true
            second.disabled = false
            answered.innerHTML = `Questions Answered:${count}/10`
        })
    } /* else {
        next.innerHTML = "Retake Quiz"
        next.style.backgroundColor = "red"
        next.addEventListener("click", () => {
            end.classList.add("FrontShow")
            con.classList.remove("conShow")
            con.classList.add("conHide")
            tab.style.display = "none";
            allDiv[19].classList.add("hide")
            allDiv[19].classList.remove("show")
            allDiv[0].classList.remove("hide")
            allDiv[0].classList.add("show")
            count = 0
            answered.innerHTML = `Questions Answered:${count}/10`
            correctAnswers.length = 0
            for (let p of options) {
                p.checked = false
            }

        })
    } */
});
Cbtn.addEventListener("click", () => {
    correctOnes.innerHTML = `<b>${cCorrect.length}</b> `;
    correctOnes.style.color = "green";
    failed.innerHTML = `<b>${cAnswers.length-cCorrect.length}</b>`
    failed.style.color = "red"
    let percentage = cCorrect.length / cAnswers.length * 100
    percent.innerHTML = percentage
    tab.style.display = "block";
    Cbtn.style.display = "none"
    if (percentage >= 10) {
        next.innerHTML = "Move To Javascript";
        next.style.backgroundColor = "green"
        next.addEventListener("click", () => {
            conCss.classList.remove("Css")
            conCss.classList.add("CssHide")
            conJs.classList.add("Java")
            conJs.classList.remove("JavaHide")
            tab.style.display = "none";
            first.disabled = true
            second.disabled = true
            last.disabled = false
            answered.innerHTML = `Questions Answered:${count}/10`
        })
    } /* else {
        next.innerHTML = "Retake Quiz"
        next.style.backgroundColor = "red"
        next.addEventListener("click", () => {
            end.classList.add("FrontShow")
            con.classList.remove("conShow")
            con.classList.add("conHide")
            tab.style.display = "none";
            cDiv[19].classList.remove("show")
            cDiv[19].classList.add("hide")
            cDiv[0].classList.remove("hide")
            cDiv[0].classList.add("show")
            cCorrect.length = 0
            count = 0
            answered.innerHTML = `Questions Answered:${count}/10`
            for (let pa of Coptions) {
                pa.checked = false
            }

        })
    } */

});
Jbtn.addEventListener("click", () => {
    correctOnes.innerHTML = `<b>${jCorrect.length}</b> `;
    correctOnes.style.color = "green";
    failed.innerHTML = `<b>${jAnswers.length-jCorrect.length}</b>`
    failed.style.color = "red"
    let percentage = jCorrect.length / jAnswers.length * 100
    percent.innerHTML = percentage
    tab.style.display = "block";
    Jbtn.style.display = "none";
    if (percentage >= 10) {
        next.innerHTML = "See Answers";
        next.style.backgroundColor = "green"
        next.addEventListener("click", () => {
            Corrections()
            tab.style.display = "none";
            first.disabled = true
            second.disabled = true
            last.disabled = true
            fourth.disabled = false
            fifth.disabled = false
            questions.classList.add("questionHide")
            questions.classList.remove("questionShow")

        })
    } /* else {
        next.innerHTML = "Retake Quiz"
        next.style.backgroundColor = "red"
        next.addEventListener("click", () => {
            end.classList.add("FrontShow")
            con.classList.remove("conShow")
            con.classList.add("conHide")
            tab.style.display = "none";
            jDiv[19].classList.remove("show")
            jDiv[19].classList.add("hide")
            jDiv[0].classList.remove("hide")
            jDiv[0].classList.add("show")
            jCorrect.length = 0
            count = 0
            answered.innerHTML = `Questions Answered:${count}/10`
            for (let pam of Joptions) {
                pam.checked = false
            }

        })
    } */
});
vew.addEventListener("click", () => {
if (disp.classList.contains("Display")) {
        disp.classList.remove("Display")
        disp.classList.add("show")
        let tot = `${ correctAnswers.length + cCorrect.length + jCorrect.length }`
        let totPer = `${answers.length + cAnswers.length + jAnswers.length }`
        total.innerHTML = `Total Score:${tot}`
        totalPer.innerHTML = `Total Score in Percentage:${Math.floor(tot/totPer* 100)}%`

    } else {
        disp.classList.remove("show")
        disp.classList.add("Display")
    }

})