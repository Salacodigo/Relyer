//Constants tools
const btnCategory1 = document.getElementById('category-one');
const btnCategory2 = document.getElementById('category-two');
const btnCategory3 = document.getElementById('category-three');
const btnCategory4 = document.getElementById('category-four');

const resultsCategory1 = document.getElementById('results-one');
const resultsCategory2 = document.getElementById('results-two');
const resultsCategory3 = document.getElementById('results-three');
const resultsCategory4 = document.getElementById('results-four');

//Load Event listeners
categoryEventListeners();

function categoryEventListeners(){
   btnCategory1.addEventListener('click', showResults1);
   btnCategory2.addEventListener('click', showResults2);
   btnCategory3.addEventListener('click', showResults3);
   btnCategory4.addEventListener('click', showResults4);
}

function hideCategoryResults(){
   let results = [
      resultsCategory1,
      resultsCategory2,
      resultsCategory3,
      resultsCategory4
   ]

   results.forEach( result => {
      result.style.display = "none";
   })
}

function showResults1(){
   hideCategoryResults();
   resultsCategory1.style.display="block";
}
function showResults2(){
   hideCategoryResults();
   resultsCategory2.style.display="block";
}
function showResults3(){
   hideCategoryResults();
   resultsCategory3.style.display="block";
}
function showResults4(){
   hideCategoryResults();
   resultsCategory4.style.display="block";
}

console.log('corre Tools')