let monster_container;
let monster_form;
let forward_page;
let back_page;
let page_num = 1;
let formData;

document.addEventListener('DOMContentLoaded', (event) => {
  monster_container = document.getElementById("monster-container");
  monster_form = document.getElementById("create-monster-form");
  forward_page = document.getElementById("forward");
  back_page = document.getElementById("back");
  fetch_monsters(page_num);

  monster_form.addEventListener('submit', (event) => {
    event.preventDefault();
    formData = new FormData(event.target);
    create_monster(formData);
  });

  forward_page.addEventListener('click', (event) => {
    page_num += 1;
    fetch_monsters(page_num);
  });
  
  back_page.addEventListener('click', (event) => {
  if (page_num >= 2) {
    page_num -=1;
  };
   fetch_monsters(page_num);
  });
});

function fetch_monsters(page) {
  let url = `http://localhost:3000/monsters/?_limit=50&_page=${page}`
  fetch(url)
    .then(response => response.json())
    .then(json => publish_monsters(json));
};

function publish_monsters(monster_array) {
  while (monster_container.firstChild) {
    monster_container.removeChild(monster_container.firstChild);
  };
  monster_array.forEach( (monster) => {
    publish_monster(monster);
  });
};

function publish_monster(monster) {
  let monster_div = document.createElement("div", )
  let monster_name = document.createElement("h2");
  monster_name.textContent = monster.name;
  let monster_age = document.createElement("h3");
  monster_age.textContent = monster.age;
  let monster_description = document.createElement("p");
  monster_description.textContent = monster.description;
  monster_div.appendChild(monster_name);
  monster_div.appendChild(monster_age);
  monster_div.appendChild(monster_description);
  monster_container.appendChild(monster_div);
};

function fetch_monsters(page) {
  let url = `http://localhost:3000/monsters/?_limit=50&_page=${page}`
  fetch(url)
    .then(response => response.json())
    .then(json => publish_monsters(json));
};

function create_monster(formData) {
  let url = "http://localhost:3000/monsters";
  let monsterObject = {};
  formData.forEach((value, key) => {monsterObject[key] = value});
  console.log(monsterObject);
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(monsterObject)
  });
};
