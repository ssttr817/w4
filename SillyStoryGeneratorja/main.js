const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日は凍るくらい寒かった。だから :insertx: はかなりの厚着をした。:inserty:で見た猫は冬毛でふわふわで、:insertz:は暖かそうで羨ましいと思った。 Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['公園', '道端', '街中'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
