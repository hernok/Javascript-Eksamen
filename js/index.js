let usersList = document.getElementById("users-list");
let users = [];

async function loadUsers() {
	 try {
	const objects = await fetch ("https://randomuser.me/api/?results=50");
	users = await objects.json();
	
 	console.log(users.results);
}catch (error) {
    console.error(error);
	}
	displayUsers();
};

function filterByGender(genderType){
	genderType
}

function displayUsers() {
	usersList.innerHTML = "";
	for (let i = 0; i < users.results.length; i++){
		let user = users.results[i];
		let userFirstName = user.name.first;
		let userLastName = user.name.last;
		let userGender = user.gender;
		let userAge = user.dob.age;
		let userPicture = "<img class='image' src='" + user.picture.medium + "'/>";

		userElement = document.createElement("div");
		userElement.innerHTML =
			`<li class="user-element">
				<h2 class="name">${userFirstName} ${userLastName}</h2>
				<h3 class="gender">${userGender}</h2>
				<h3 class="age">Age: ${userAge}</h2>
				${userPicture}
			</li>`;
		usersList.appendChild(userElement);
	}
};
