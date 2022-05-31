let usersList = document.getElementById("users-list");
let currentGender = "";
let interested = [];
let notInterested = [];
let male = [];
let female = [];
let allUsers = [];


function allUsersLog(){
	console.log(allUsers.results)
}
function currentGenderLog(){
	console.log(currentGender)
}

function filterGenders(){
	male = [];
	female = [];
	for (let i = 0; i < allUsers.results.length; i++){
		if (allUsers.results[i].gender === "male"){	
			//PUSH TIL MALE
			male.push(allUsers.results[i])
		} else{
			//PUSH TIL FEMALE
			female.push(allUsers.results[i])
		}
	}
	console.log(male, female)	
}

/*
function filterByGender(genderType){
	currentGender = genderType
	let filteredUsers = allUsers.results.filter(function(user){
		return(
			user.gender == genderType
		);
	});
	displayUsers(filteredUsers);

	console.log(male)
	console.log(female)
}
*/

async function loadUsers() {
	 try {
		const objects = await fetch ("https://randomuser.me/api/?results=50");
		allUsers = await objects.json();
	}catch (error) {
   		console.error(error);
	}
};


function displayUsers(genderType) {
	filterGenders()
	usersList.innerHTML = "";
	currentGender = genderType
	console.log(currentGender)
		index = 0
		let user = currentGender[index];
		let userFirstName = user.name.first;
		let userLastName = user.name.last;
		let userAge = user.dob.age;
		let userPicture = "<img class='image' src='" + user.picture.large + "'/>";
		userElement = document.createElement("div");
		userElement.innerHTML =
			`<li class="user-element">
					<div class="user-info">
						<h2 class="name">${userFirstName} ${userLastName}</h2>
						<h3 class="age">Age: ${userAge}</h2>
					</div>
					<div class="user-picture">${userPicture}</div>
					<div id="interested-buttons">
						<button id="not-interested-btn" onclick="notInterestedBtnFunc()">Not interested</button> 
						<button id="interested-btn" onclick="interestedBtnFunc()">interested</button>
					</div>
			</li>`;
		usersList.appendChild(userElement);
	
};
/*
let interestedBtns = document.getElementById("interested-buttons");
let notInterestedBtn = document.getElementById("not-interested-btn");
let interestedBtn = document.getElementById("interested-buttons");
*/

/*
function notInterestedBtnFunc(index){
    currentGender ??? allUsers.results.splice(index, 1);
	filterByGender(currentGender);
};
*/

/*
function interestedBtnFunc(){
	allUsers.forEach(function(move, index){
		allUsers.splice(move, 1);
	});
};
*/


function showLocation(){

};