// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let plist= document.getElementById('content')
// -- отримує текст з блоку з id "rules"
let ruleslist = document.getElementById('rules')
// -- замініть текст параграфа з id 'content' на будь-який інший
plist.innerText='javascript'
// -- замініть текст параграфа з id 'rules' на будь-який інший
ruleslist.innerText='react'
// -- змініть кожному елементу колір фону на червоний
let allback=document.body.children
for (const allbackElement of allback) {
    allbackElement.style.background='red'
}
// -- змініть кожному елементу колір тексту на синій
let alltext=document.body.children
for (const alltextElement of alltext) {
    alltextElement.style.color='blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classes=document.getElementById('rules').classList
console.log(classes)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let chengecolor=document.getElementsByClassName('fc_rules')
for (const chengecolorElement of chengecolor) {
    chengecolorElement.style.color='red'
}

