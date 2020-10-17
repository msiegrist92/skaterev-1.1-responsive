const to_switch = document.getElementById('switch');

to_switch.addEventListener('mouseover', (e) => {
  e.preventDefault();
  let to_show = document.getElementById('to_show');
  let on_hover = document.getElementById('on_hover');

  to_show.style.display = 'none';
  on_hover.style.display = 'block';
})

to_switch.addEventListener('mouseout', (e) => {
  e.preventDefault();
  let to_show = document.getElementById('to_show');
  let on_hover = document.getElementById('on_hover');

  to_show.style.display = 'block';
  on_hover.style.display = 'none';
})

buttons = document.querySelectorAll('button');

const dropDownSkills = button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    let skills_list = button.nextElementSibling;
    skills_list.style.animationName = 'opacity';
    skills_list.style.opacity = '1';
    button.disabled = true;
    button.style.backgroundColor = '#6B171F';
  })
}

for (let button of buttons){
  dropDownSkills(button);
}
