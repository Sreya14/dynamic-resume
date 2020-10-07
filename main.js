// function loadJson(file, callback){
// 	//file is json file and callback is the response
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true); //For async data we use true
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState === 4 && xhr.status=="200"){
// 				callback(xhr.responseText);
// 		}
// 			//400 range means file not found
// 			//500 range meansserver side errors	
// 	};
// 	xhr.send(null);

// }
// loadJson("details.json",function(text){
// 	let data = JSON.parse(text);
// 	 //This will convert into JSON format
// 	console.log(data);
// 	basic(data.details);
// 	careerInfo(data.careerobjective);
// 	education(data.educationalDetails);
// 	skills(data.techincalSkills);
// });

//Fetch and Promise(2nd Method) New Model
function loadjson(file){
	return new Promise((resolve, reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("details.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	careerInfo(data.careerobjective);
	education(data.educationalDetails);
	skills(data.techincalSkills);
})

var child1 = document.querySelector(".child1");

function basic(det){
	var img1 = document.createElement("img");
	img1.src = det.image;
	child1.appendChild(img1);

	var name = document.createElement("h2");
	name.textContent = det.name;
	child1.appendChild(name);

	var email = document.createElement("a")
	email.href = "mailto:potlurisreya@gmail.com";
	email.textContent = det.email;
	child1.appendChild(email);

	var phone = document.createElement("h3");
	phone.textContent = det.number
	child1.appendChild(phone)

	var address = document.createElement("h3");
	address.textContent = det.address
	child1.appendChild(address)
}
var child2 = document.querySelector(".child2");

function careerInfo(info){

	var heading = document.createElement("h3");
	heading.textContent = "Career Objective";
	child2.appendChild(heading);

	child2.appendChild(document.createElement("hr"));
	var heading2 = document.createElement("p");
	heading2.textContent = info.information;
	child2.appendChild(heading2);
}

function education(edu){
	var heading = document.createElement("h3");
	heading.textContent = "Educational Qualification";
	child2.appendChild(heading);

	child2.appendChild(document.createElement("hr"));
	
	var table1 = document.createElement("table");
	table1.border="1";
	child2.appendChild(table1);
	tabledata="";
	tabledata+="<tr>\
					<th> Institute </th> \
					<th> Type </th>	\
					<th>Passout Year</th>\
					<th>CGPA / Percentage</th>\
				</tr>"
	for(var i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].GraduationYear+"</td><td>"+edu[i].cgpa+"</td></tr>"
	}
	table1.innerHTML=tabledata;

}
function skills(skillsinfo){
	var hd = document.createElement("h3");
	hd.textContent = "Technical Skills";
	child2.appendChild(hd);
	child2.appendChild(document.createElement("hr"));

	for(i=0;i<skillsinfo.length;i++){
		var title = document.createElement("h4");
		title.textContent = skillsinfo[i].title;
		child2.appendChild(title);

		var skillul = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent = skillsinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);
	}
}