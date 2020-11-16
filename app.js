const articles = document.querySelectorAll('article');
let main = document.getElementById('main');
let main_title = main.getElementsByTagName('h2');
let main_paragraph = main.getElementsByTagName('p');
let background = document.getElementById('background');
console.log(background);

for (const article of articles) {
    article.addEventListener('click', change_home);
  }

function change_home(){
    let img = this.getElementsByTagName('img');
    let h3 = this.getElementsByTagName('h3');
    let p = this.getElementsByTagName('p');
    let img_src = img.item(0).src;
    let h3_text = h3.item(0).innerHTML;
    let p_text = p.item(0).innerHTML;
    background.src = img_src;
    main_title.item(0).innerHTML = h3_text;
    main_paragraph.item(0).innerHTML = p_text;
}
