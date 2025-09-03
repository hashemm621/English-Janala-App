const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then((res) => res.json()) // promise of json data
    .then((json) => displayLessons(json.data));
};
const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};
const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
    
    `;
    // wordContainer.appendChild(card);
  });
};
const displayLessons = (lessons) => {
  const levelContainer = document.getElementById("level-container"); // get the container
  levelContainer.innerHTML = ""; // empty the container
  for (let lesson of lessons) {
    const btnDiv = document.createElement("div"); // create the display element
    btnDiv.innerHTML = `
                        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
                            <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
                        </button>
        `;
    levelContainer.appendChild(btnDiv);
  }
};
loadLessons();
