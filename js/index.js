let usersList = document.getElementById("users-list");
let currentGender = "";
let interested = [];
let notInterested = [];
let male = [];
let female = [];
let allUsers = [];



function filterByGender(genderType){
	currentGender = genderType
	let filteredUsers = allUsers.results.filter(function(user){
		return(
			user.gender == genderType
		);
	});
	displayUsers(filteredUsers);

	console.log(allUsers)
}

async function loadUsers() {
	 try {
		const objects = await fetch ("https://randomuser.me/api/?results=50");
		allUsers = await objects.json();
	}catch (error) {
   		console.error(error);
	}
};

function displayUsers(users) {
	usersList.innerHTML = "";
		let i = 0;
		let user = users[i];
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

function notInterestedBtnFunc(index){
    allUsers.results.splice(index, 1);
	filterByGender(currentGender);
};

function interestedBtnFunc(){
	allUsers.forEach(function(move, index){
		allUsers.splice(index, 1);
		interested.push(move);
	});
};



function showLocation(){

};



/*-----------For Loop---------
function displayUsers(users) {
	usersList.innerHTML = "";
	for (let i = 0; i < users.length; i++){
		let user = users[i];
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
			</li>`;
		usersList.appendChild(userElement);
	}
	
};
*/