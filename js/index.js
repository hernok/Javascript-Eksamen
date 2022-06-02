let usersList = document.getElementById("users-list");
let interestedList = document.getElementById("interested-list")
let currentGender = "";
let interested = [];
let notInterested = [];
let male = [];
let female = [];
let allUsers = [];

function filterGenders(){
	male = [];
	female = [];
	for (let i = 0; i < allUsers.results.length; i++){
		if (allUsers.results[i].gender === "male"){	
			male.push(allUsers.results[i]);
			allUsers.results.splice(i, 0);
		} else{
			female.push(allUsers.results[i]);
			allUsers.results.splice(i, 0);
		};
	};
	console.log(male);
};

async function loadUsers() {
	try {
		const objects = await fetch ("https://randomuser.me/api/?results=50");
		allUsers = await objects.json();
	}catch (error) {
   		console.error(error);
	}
};

async function displayUsers(genderType) {
	usersList.innerHTML = "";
	currentGender = genderType;	
	index = 0;
	let user = currentGender[index];
	let firstName = user.name.first;
	let lastName = user.name.last;
	let gender = user.gender;
	let age = user.dob.age;
	let picture = "<img class='image' src='" + user.picture.large + "'/>";
	userElement = document.createElement("div");
	userElement.innerHTML = 
		`<li class="user-element">
				<div class="user-info">
					<h2 class="name">${firstName} ${lastName}</h2>
					<h3 class="age">Age: ${age}</h2>
				</div>
				${picture}
				</li>
				<div id="interested-buttons">
					<button id="not-interested-btn" onclick="notInterestedBtnFunc(${gender})">Not interested</button> 
					<button id="interested-btn" onclick="interestedBtnFunc(${gender})">Interested</button>
				</div>
		`;
	usersList.appendChild(userElement);	
};

function displayInterested(){
	interestedList.innerHTML = "";
 	for (let i = 0; i < interested.length; i++){
		let user = interested[i];
		let firstName = user.name.first;
		let lastName = user.name.last;
		let age = user.dob.age;
		let picture = "<img class='image' src='" + user.picture.large + "'/>";
		interestedElement = document.createElement("div");
		interestedElement.innerHTML = 
			"<li class='interested-element'>" +
			"<div class='interested-info'>" +
			"<h2 class='name'>" + 
			firstName + 
			lastName + 
			"</h2>" +
			"<h3 class='age'>Age:" + 
			age + 
			"</h3>" +
			"<button class='remove-interested' onclick='removeInterested(" + 
			i + 
			")'>Remove</button>" +
			"</div>" +
			picture +
			"</li>";
		interestedList.appendChild(interestedElement);
	};	
};

function notInterestedBtnFunc(index){
	genderType = currentGender;
    currentGender.splice(index, 1);
	displayUsers(currentGender);
};

function interestedBtnFunc(currentGender){
	i = 0;
	interested.push(currentGender[i]);
	currentGender.splice(i, 1);
	displayUsers(currentGender);
	displayInterested();
};

function removeInterested(i){ 
	interested.splice(i, 1);
	displayInterested();
	console.log(interested);
};