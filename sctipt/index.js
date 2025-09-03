const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then((res) => res.json()) // promise of json data
    .then((json) => displayLessons(json.data));
};
const displayLessons = (lessons) => {
  const levelContainer = document.getElementById("level-container"); // get the container
  levelContainer.innerHTML = ""; // empty the container
  for (let lesson of lessons) {
    const btnDiv = document.createElement("div"); // create the display element
    btnDiv.innerHTML = `
                        <button class="btn btn-outline btn-primary">
                            <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
                        </button>
        `;
    levelContainer.appendChild(btnDiv);
  }
};
loadLessons();
