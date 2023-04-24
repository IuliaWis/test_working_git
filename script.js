let experience=100;
let wizarLevel=false;
let name="john";
if(experience>90)
{
	let wizarLevel=true;
	console.log("inside",wizarLevel);
}
console.log("outside",wizarLevel);

const a="nume familie";
const b=false;
const c={};

const obj = {a,b,c};

const greet = `aici este un text ${name}. ce zici de asta? tu ai varsta de ${experience}`;

const compose = (f,g) => (a) => f(g(a));

const sum1=(num)=>num+3;

const sum2=(num)=>num+5;

compose(sum1, sum2) (6);