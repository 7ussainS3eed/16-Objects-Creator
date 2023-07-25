let numKeys = document.querySelector(".numKeys");
let numKeysOk = document.querySelector(".numKeysOk");
numKeys.addEventListener("input", function() {
    if (numKeys.value > 0) {
        numKeysOk.style.display = "block";
    }
    else {
        numKeysOk.style.display = "none";
    }
})

let first = document.querySelector(".first7");
let second = document.querySelector(".second7");
let keyInputs = [];
let keysDiv = document.querySelector(".keysDiv");
let counter = 0;
let keysDivOk = document.querySelector(".keysDivOk");
let keysReset = document.querySelector(".keysReset");
numKeysOk.addEventListener("click", function() {
    first.style.display = "none";
    second.style.display = "block";
    for (i = 1; i <= numKeys.value; i++) {
        let keyDiv = document.createElement("div");
        keyDiv.classList.add("keyDiv")
        if (numKeys.value == 1) {
            keyDiv.appendChild(document.createTextNode("Key "));
        }
        else {
            keyDiv.appendChild(document.createTextNode(i +"st key "));
        }
        let keyInput = document.createElement("input");
        keyInput.classList.add("keyInput");
        keyDiv.appendChild(keyInput);
        keyInputs.push(keyInput);
        keysDiv.appendChild(keyDiv);
    }
    for (i = 0; i < numKeys.value; i++) {
        keyInputs[i].oninput = function() {
            counter = 0;
            for(j = 0; j < numKeys.value; j++) {
                if (keyInputs[j].value != "") {
                    counter++;
                }
            }
            if (counter == numKeys.value) {
                keysDivOk.style.display = "inline-block";
                keysReset.style.display = "inline-block";
            }
            else if (counter != 0 && counter != numKeys.value){
                keysDivOk.style.display = "none";
                keysReset.style.display = "inline-block";
            }
            else {
                keysDivOk.style.display = "none";
                keysReset.style.display = "none";
            }
        }
    }
});

let third = document.querySelector(".third7");
keysDivOk.addEventListener("click", function() {
    second.style.display = "none";
    third.style.display = "flex";
});

keysReset.addEventListener("click", function() {
    for (i = 0; i < numKeys.value; i++) {
        keyInputs[i].value = "";
    };
    keysDivOk.style.display = "none";
    keysReset.style.display = "none";
});

let homes = document.querySelectorAll(".home");
for (i = 0; i < homes.length; i++) {
    homes[i].addEventListener("click", function() {
        location.reload();
    })
}

let numObjs = document.querySelector(".numObjs");
let numObjsOk = document.querySelector(".numObjsOk");
numObjs.addEventListener("input", function() {
    if (numObjs.value > 0) {
        numObjsOk.style.display = "inline-block";
    }
    else {
        numObjsOk.style.display = "none";
    }
})

let fourth = document.querySelector(".fourth7");
let finalDiv = document.querySelector(".finalDiv");
let bigArr = [];
let coounter2 = 0;
let finalDivOk = document.querySelector(".finalDivOk");
let finalReset = document.querySelector(".finalReset")
numObjsOk.addEventListener("click", function() {
    third.style.display = "none";
    fourth.style.display = "block";
    for (i = 1; i <= numObjs.value; i++) {
        let objDiv = document.createElement("div");
        objDiv.classList.add("objDiv");
        if (numObjs.value == 1) {
            objDiv.appendChild(document.createTextNode("Object"));
            objDiv.classList.add("special")
        }
        else {
            objDiv.appendChild(document.createTextNode(i +"st object"));
        }
        objDiv.appendChild(document.createElement("br"));
        let smallArr = [];
        for (j = 0; j < numKeys.value; j++) {
            objDiv.appendChild(document.createTextNode(keyInputs[j].value + " "));
            let objInput = document.createElement("input");
            objInput.classList.add("objInput");
            objDiv.appendChild(objInput);
            smallArr.push(objInput);
            objDiv.appendChild(document.createElement("br"));
        }
        bigArr.push(smallArr);
        finalDiv.appendChild(objDiv);
    }
    for (i = 0; i < numObjs.value; i++) {
        for (j = 0; j < numKeys.value; j++) {
            bigArr[i][j].oninput = function() {
                counter = 0;
                for (x = 0; x < numObjs.value; x++) {
                    for (y = 0; y < numKeys.value; y++) {
                        if (bigArr[x][y].value != "") {
                            counter++;
                        }
                    }
                }
                if (counter == numObjs.value * numKeys.value) {
                    finalDivOk.style.display = "inline-block";
                    finalReset.style.display = "inline-block";
                }
                else if (counter != 0 && counter != numObjs.value * numKeys.value){
                    finalDivOk.style.display = "none";
                    finalReset.style.display = "inline-block";
                }
                else {
                    finalDivOk.style.display = "none";
                    finalReset.style.display = "none";
                }
            }
        }
    }
});

let fifth = document.querySelector(".fifth7");
let code = document.querySelector(".code");
finalDivOk.addEventListener("click", function() {
    fourth.style.display = "none";
    fifth.style.display = "flex";
    code.appendChild(document.createTextNode(`[
`));
    for (i = 0; i < numObjs.value; i++) {
        code.appendChild(document.createTextNode(`  {
`));
        for (j = 0; j < numKeys.value; j++) {
            if (j != numKeys.value - 1) {
                if (isNaN (bigArr[i][j].value) || (bigArr[i][j].value)[0] == "+") {
                    code.appendChild(document.createTextNode("      \""+keyInputs[j].value+"\": " + "\"" + bigArr[i][j].value + "\"" + ","));
                }
                else {
                    code.appendChild(document.createTextNode("      \""+keyInputs[j].value+"\": " + bigArr[i][j].value + ","));
                }
            }
            else {
                if (isNaN (bigArr[i][j].value) || (bigArr[i][j].value)[0] == "+") {
                    code.appendChild(document.createTextNode("      \""+keyInputs[j].value+"\": " + "\"" + bigArr[i][j].value + "\""));
                }
                else {
                    code.appendChild(document.createTextNode("      \""+keyInputs[j].value+"\": " + bigArr[i][j].value));
                }
            }
            code.appendChild(document.createTextNode(`
`))
        }
        if (i != numObjs.value - 1) {
            code.appendChild(document.createTextNode(`  },
`));
        }
        else {
            code.appendChild(document.createTextNode(`  }
`));
        }
    }
    code.appendChild(document.createTextNode("]"));
});

finalReset.addEventListener("click", function() { 
    for (i = 0; i < numObjs.value; i++) {
        for (j = 0; j < numKeys.value; j++) {
            bigArr[i][j].value = "";
        }
    }
    finalDivOk.style.display = "none";
    finalReset.style.display = "none";
});

function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}
document.querySelector(".copy").addEventListener("click", function() {
    let text = document.createElement("textarea");
    text.value = code.innerHTML;
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    copyToClipboard(text.value);
    alert("Copied!");
});