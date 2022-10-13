const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Billy", "Jeff", "Anna"];
const insertY = ["Safeway", "the park", "The Engineering Center"];
const insertZ = ["did a backflip", "properly formated and coded thier html", "just stood there menacingly"];

randomize.addEventListener('click', result);

function result() {

    let newStory= storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
  if(customName.value !== '') {
    const name = customName.value;
    newStory= newStory.replace("Bob",name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14);
    let temperature = Math.round((94-32)*(5/9));
    weight += " stone";
    temperature += " C";

    newStory= newStory.replace("94 fahrenheit",temperature);
    newStory= newStory.replace("300 pounds",weight);
  }

  newStory= newStory.replaceAll(":insertx:",xItem);
  newStory= newStory.replace(":inserty:",yItem);
  newStory= newStory.replace(":insertz:",zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}