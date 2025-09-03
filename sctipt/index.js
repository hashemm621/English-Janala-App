const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then((res) => res.json()) // promise of json data
    .then((json) => displayLessons(json.data));
};
const removeActive = () =>{
    const lessonButton = document.querySelectorAll('.lesson-btn');
    lessonButton.forEach(btn => btn.classList.remove("active"));
}
const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        removeActive();
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      clickBtn.classList.add("active");
      displayLevelWord(data.data);
    });
};
const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  if (words.length === 0) {
    wordContainer.innerHTML = `
    <div class="font-bangla text-center col-span-full rounded-xl py-10 space-y-6">
            <img class="mx-auto" src="./assets/alert-error.png" alt="">
            <p class="text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
        </div>`;

    return;
  }

  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5">
            <h2 class="font-bold text-2xl">${
              word.word ? word.word : "Word not found"
            }</h2>
            <p class="font-semibold">Meaning / Pronunciation</p>
            <div class="text-2xl font-medium font-bangla">
                ${word.meaning ? word.meaning : "Meaning not found"} / ${
      word.pronunciation ? word.pronunciation : "Pronunciation not found"
    }
            </div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF1A] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF1A] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
    `;
    wordContainer.appendChild(card);
  });
};
const displayLessons = (lessons) => {
  const levelContainer = document.getElementById("level-container"); // get the container
  levelContainer.innerHTML = ""; // empty the container
  for (let lesson of lessons) {
    const btnDiv = document.createElement("div"); // create the display element
    btnDiv.innerHTML = `
                        <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
                            <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
                        </button>
        `;
    levelContainer.appendChild(btnDiv);
  }
};
loadLessons();
