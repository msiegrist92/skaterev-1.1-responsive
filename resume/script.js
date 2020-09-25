const sr_img = document.getElementById('switch');

sr_img.addEventListener('mouseover', (e) => {
  e.preventDefault();
  let mob_samp = document.getElementById('mob_samp');
  let doa_samp = document.getElementById('doa_samp');

  mob_samp.style.display = 'none';
  doa_samp.style.display = 'block';
})

sr_img.addEventListener('mouseout', (e) => {
  e.preventDefault();
  let mob_samp = document.getElementById('mob_samp');
  let doa_samp = document.getElementById('doa_samp');

  mob_samp.style.display = 'block';
  doa_samp.style.display = 'none';
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
