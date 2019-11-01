document.addEventListener('DOMContentLoaded', (event) => {
  fetch_monsters(1);
});

function fetch_monsters(page) {
  let url = `http://localhost:3000/monsters/?_limit=50&_page=${page}`
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
};

function create_monsters(monster_array) {
  monster_array.forEach( (monster) => {

  });
};

function create_monster(monster) {
  let monster_div = document.createElement("div", )
  let monster_name = document.createElement("h2");
  monster_name.textContent = monster.name;
  let monster_age = document.createElement("h3");
  monster_age.textContent = monster.age;
  let monster_description = document.createElement("p");
  monster_description.textContent = monster.description;
};