//Global Variable Naming Starts here
let con = document.getElementById("conHtml"),
 jAnswers = ["Scripting", "Loosely", "Arrow", "Ternary", "Not", "Annonymous", "Then",  "anchor", "js", "upload"],
 Cssoptions = document.querySelectorAll(".CssHide>div>label>input[type='radio']"),
 cDiv = document.querySelectorAll(".CssHide>div"),
 conJs = document.getElementById("conJs"),
 conCss = document.getElementById("conCss"),
 Joptions = document.querySelectorAll(".JavaHide>div>label>input[type='radio']"),
 jDiv = document.querySelectorAll(".JavaHide>div"),
 htmloptions = document.querySelectorAll(".conHide>div>label>input[type='radio']"),
 Hbtn = document.getElementById("sp"),
 Cbtn = document.getElementById("cp"),
 Jbtn = document.getElementById("jp"),
 correctAnswers = [],
 cCorrect = [],
 jCorrect = [],
 allDiv = document.querySelectorAll(".conHide>div")
 answers = ["HyperTextMarkUpLanguage", "Anchor", "Web", "ordered", "blank",  "division", "Required", "Mail", "Consortium",  "Engine"
],
 cAnswers = ["CascadingStyleSheet", "Six", "Asterisk", "Child", "Green",
    "Transition", "Visible", "AlignItems", "Area",
    "Responsive", 
],
vew = document.getElementById("view"),
correctOnes = document.getElementById("correct"),
failed = document.getElementById("failed"),
 percent = document.getElementById("Percent"),
all = document.querySelectorAll(".FrontHide>button"),
 disp = document.getElementById("dis"),
 resultAnalysis = document.querySelectorAll(".Display>h2"),
 res = document.getElementById("res"),
[total, totalPer] = resultAnalysis,
 core = document.getElementById("core"),
 congrat = document.getElementById("congrat"),
 cend = document.getElementById("cend"),
 corrected = document.getElementById("corrected"),
  [first, second, last, fourth, fifth] = all,
questions = document.getElementById("questions"),
next = document.getElementById("next"),
instruct = document.getElementById("instruct"),
PlayerNames = [],
LeaderBoard = {},
sub = document.getElementById("sub"),
end = document.getElementById("end"),
endQuiz = document.getElementById("quizend"),
tab = document.getElementById("table"),
 answered = document.getElementById("answered"),
count = 0,
alloptions= document.querySelectorAll("section>div>label>input[type='radio']")
 let allAnswers=[...answers,...cAnswers,...jAnswers]
//Logic For Corrections
 function Corrections() {
    cend.classList.add("Corrections");
    cend.classList.remove("CorrectionsHide")
    con.classList.remove("conHide")
    con.classList.add("conShow")
    conCss.classList.add("Css")
    conCss.classList.remove("CssHide")
    conJs.classList.add("Java")
    conJs.classList.remove("JavaHide")
    cend.append(con,conCss,conJs)
    
    for(let s=0; s<allDiv.length; s++){
        //this block removes the class of hide
        allDiv[s].classList.remove('hide')
        cDiv[s].classList.remove('hide')
        jDiv[s].classList.remove("hide")
        allDiv[10].classList.add('hide')
        cDiv[10].classList.add('hide')
        jDiv[10].classList.add('hide')
    }
    for (let options of alloptions) {
        //this block compares user option against answers
         allAnswers.forEach(ans => {
            if (options.checked && options.value === ans) {
                options.parentElement.style.color = "green"
            } else if (!options.checked && options.value === ans) {
                options.parentElement.style.color = "blue"
            }
        }) 
    }
}
function HtmlNextLogic(){
    //This function is Executed at the end of html quiz section
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
    } 
    
    }
    function CssNextLogic(){
        //This function is Executed at the end of Css quiz section
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
                count=0
                answered.innerHTML = `Questions Answered:${count}/10`
            })
        } 

    }
    function JsNextLogic(){
        //This function is Executed at the end of Javascript quiz section
        correctOnes.innerHTML = `<b>${jCorrect.length}</b> `;
    correctOnes.style.color = "green";
    failed.innerHTML = `<b>${jAnswers.length-jCorrect.length}</b>`
    failed.style.color = "red"
    let percentage = jCorrect.length / jAnswers.length * 100
    percent.innerHTML = percentage
    tab.style.display = "block";
    Jbtn.style.display = "none";
    if (percentage >= 10) {
        next.innerHTML = "See Corrections";
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
    } 

    }
    


