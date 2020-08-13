
showquizz();


let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addOption1 = document.getElementById("Option1");
    let addOption2 = document.getElementById("Option2");
    let addOption3 = document.getElementById("Option3");
    let addOption4 = document.getElementById("Option4");
    let addQues = document.getElementById("addQues");
    let quizz = localStorage.getItem("quizz");
    if (quizz == null) {
        quizzObj = [];
    } else {
        quizzObj = JSON.parse(quizz);
    }
    let myObj = {
        ques: addQues.value,
        opt1: addOption1.value,
        opt2: addOption2.value,
        opt3: addOption3.value,
        opt4: addOption4.value
    }
    quizzObj.push(myObj);
    localStorage.setItem("quizz", JSON.stringify(quizzObj));
    addQues.value = "";
    addOption1.value = "";
    addOption2.value = "";
    addOption3.value = "";
    addOption4.value = "";
    //   console.log(quizzObj);
    showquizz();
});


function showquizz() {
    let quizz = localStorage.getItem("quizz");
    if (quizz == null) {
        quizzObj = [];
    } else {
        quizzObj = JSON.parse(quizz);
    }
    let html = "";
    quizzObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 50rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>Question : </b>${element.ques}</h5>
                        <p class="card-text"><b>Option-A : </b> ${element.opt1}</p>
                        <p class="card-text"><b>Option-B : </b> ${element.opt2}</p>
                        <p class="card-text"><b>Option-C : </b> ${element.opt3}</p>
                        <p class="card-text"><b>Option-D : </b> ${element.opt4}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Qustion</button>
                    </div>
                </div>`;
    });
    let quizzElm = document.getElementById("quizz");
    if (quizzObj.length != 0) {
        quizzElm.innerHTML = html;
    } else {
        quizzElm.innerHTML = `Your quizz is empty!! Please add the qustions`;
    }
}

function deleteNote(index) {


    let quizz = localStorage.getItem("quizz");
    if (quizz == null) {
        quizzObj = [];
    } else {
        quizzObj = JSON.parse(quizz);
    }

    quizzObj.splice(index, 1);
    localStorage.setItem("quizz", JSON.stringify(quizzObj));
    showquizz();
}

