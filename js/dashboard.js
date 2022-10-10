let els = document.getElementsByClassName("grades")
for (let i = 0; i < els.length; i++) {
    let cell = els[i];
    if (cell.textContent < 5.5) {
        cell.classList.remove('green')
    } else {
        cell.classList.add('green');
    }
}
for (let j = 0; j < els.length; j++) {
    let cell = els[j];
    if (cell.textContent == "-" || cell.textContent == null) {
        cell.classList.add('grey');
    } else {
        cell.classList.remove('grey');
    }
}

let ec = 0;
let grade1 = document.getElementById("grade1");
let grade2 = document.getElementById("grade2");
let grade31 = document.getElementById("grade3.1");
let grade32 = document.getElementById("grade3.2");
let grade41 = document.getElementById("grade4.1");
let grade42 = document.getElementById("grade4.2");
let grade5 = document.getElementById("grade5");
let grade61 = document.getElementById("grade6.1");
let grade62 = document.getElementById("grade6.2");
let grade63 = document.getElementById("grade6.3");
let grade71 = document.getElementById("grade7.1");
let grade72 = document.getElementById("grade7.2");
let grade73 = document.getElementById("grade7.3");
let grade81 = document.getElementById("grade8.1");
let grade82 = document.getElementById("grade8.2");
let grade83 = document.getElementById("grade8.3");
let grade91 = document.getElementById("grade9.1");
let grade92 = document.getElementById("grade9.2");
let grade93 = document.getElementById("grade9.3");

function checkifsufficient() {
    if (grade1.textContent >= 5.5) {
        ec += 2.5
    } else if (grade1.textContent == "-" || grade1.textContent == null) {
        ec += 0
    }
    if (grade2.textContent >= 5.5) {
        ec += 5
    } else if (grade2.textContent == "-" || grade2.textContent == null) {
        ec += 0
    }
    if (grade31.textContent >= 5.5 && grade32.textContent >= 5.5) {
        ec += 5
    } else if (grade31.textContent == "-" || grade31.textContent == null || grade32.textContent == "-" || grade32.textContent == null) {
        ec += 0
    }
    if (grade41.textContent >= 5.5 && grade42.textContent >= 5.5) {
        ec += 10
    } else if (grade41.textContent == "-" || grade41.textContent == null || grade42.textContent == "-" || grade42.textContent == null) { ec += 0 }
    if (grade5.textContent >= 5.5) {
        ec += 5
    } else if (grade5.textContent == "-" || grade5.textContent == null) { ec += 0 }
    if (grade61.textContent >= 5.5 && grade62.textContent >= 5.5 && grade63.textContent >= 5.5) {
        ec += 7.5
    } else if (grade61.textContent == "-" || grade61.textContent == null || grade62.textContent == "-" || grade62.textContent == null || grade63.textContent == "-" || grade63.textContent == null) { ec += 0 }
    if (grade71.textContent >= 5.5 && grade72.textContent >= 5.5 && grade73.textContent >= 5.5) {
        ec += 10
    } else if (grade71.textContent == "-" || grade71.textContent == null || grade72.textContent == "-" || grade72.textContent == null || grade73.textContent == "-" || grade73.textContent == null) { ec += 0 }
    if (grade81.textContent >= 5.5 && grade82.textContent >= 5.5 && grade83.textContent >= 5.5) {
        ec += 12.5
    } else if (grade81.textContent == "-" || grade81.textContent == null || grade82.textContent == "-" || grade82.textContent == null || grade83.textContent == "-" || grade83.textContent == null) { ec += 0 }
    if (grade91.textContent >= 5.5 && grade92.textContent >= 5.5 && grade93.textContent >= 5.5) {
        ec += 15
    } else if (grade91.textContent == "-" || grade91.textContent == null || grade92.textContent == "-" || grade92.textContent == null || grade93.textContent == "-" || grade93.textContent == null) { ec += 0 }

}
checkifsufficient();

function percentOfEcs() {
    let percent = ec / 60 * 100;
    if (percent >= 75) {
        document.getElementById("ecs").style.backgroundColor = "#04AA6D";
    }
    document.getElementById("ecs").style.width = percent.toFixed(2) + "%";
    document.getElementById("ecs").innerHTML = ec;

}
percentOfEcs();
