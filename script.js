//your JS code here. If required.
const text = document.getElementById('text');
const delay = document.getElementById('delay');
const forms = document.querySelector('form');
const output = document.getElementById('output');
// console.log(text);
// console.log(delay);
// console.log(forms);
// console.log(output);


async function result(p1){
	try{
		
	const val = await p1;
	output.innerText = val;
		console.log(val);
	}catch(err){
		console.log(err);
	}
}
       
forms.addEventListener('submit',(e)=>{
	console.log('2')
	const obj = e.target;
	const delayVal = obj.delay.value;
	const res = obj.text.value;
	console.log(obj);
	const pro = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(res);
		},delayVal);
	});
	result(pro);
});