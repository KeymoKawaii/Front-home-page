const articles = document.querySelectorAll('article');
let main = document.getElementById('main');
let main_title = main.getElementsByTagName('h2');
let main_paragraph = main.getElementsByTagName('p');
let background = document.getElementById('background');

background.classList.add('fadein');

for (const article of articles) {
    article.addEventListener('click', change_home);
  }

function change_home(){
    background.classList.remove('fadein');
      let img = this.getElementsByTagName('img');
      let h3 = this.getElementsByTagName('h3');
      let p = this.getElementsByTagName('p');
      let h3_text = h3.item(0).innerHTML;
      let p_text = p.item(0).innerHTML;
      main_title.item(0).innerHTML = h3_text;
      main_paragraph.item(0).innerHTML = p_text;
    setTimeout(function(){
      let img_src = img.item(0).src;
      background.src = img_src;
      background.classList.add('fadein'); 
    },800);
}