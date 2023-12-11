const averageSpan = document.querySelector("#averageSpan");
console.log(averageSpan);
const spanCount = document.querySelector('#spanCount');
const ul = document.querySelector('ul');
const prices = [
22, 
23,
24
];

const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];
  
  const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardner"
  ];
  
  const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" }
  ];

  spanCount.innerHTML = names.length;

  let sum = 0;
  freelancers.forEach(function(freelancer){
    sum = sum + freelancer.price;
  });

  function calcSum (){
    sum = 0;
    freelancers.forEach(function(freelancer){
    sum = sum + freelancer.price;
  });
  }
 
  let avg = sum / freelancers.length;
  function calcAvg (){
    avg = sum / freelancers.length;
  }
 
  
  console.log(avg);
  averageSpan.innerHTML = avg;

 const html = freelancers.map(function(freelancer){
    return `
    <li>${freelancer.name} is a ${freelancer.occupation} and their price is ${freelancer.price}</li>
    `
 }).join(''); 
 console.log(html);

ul.innerHTML = html;

const timer = setInterval(()=> {
  freelancerbutton()
 if (freelancers.length >= 4){
  clearInterval(timer);
 }
}, 1000)



function freelancerbutton(){ 
const indexNames = Math.floor(Math.random()*names.length);
const name = names[indexNames];
const indexOccupations = Math.floor(Math.random()*occupations.length);
const occupation = occupations[indexOccupations];
const indexPrices = Math.ceil(Math.random()*10);
const randFreelancer = {
  name: name,
  occupation: occupation,
  price: indexPrices,
};
freelancers.push(randFreelancer);
console.log(randFreelancer);
ul.innerHTML += `<li onclick=\"\">${name} is a ${occupation} and their price is ${indexPrices}
</li>`;
calcSum()
  console.log(sum);
  calcAvg()
  console.log(avg);
  document.getElementById("averageSpan").innerHTML = avg;
}

function removehtml (){
  ul.intterhtml += `<li></li>`
}