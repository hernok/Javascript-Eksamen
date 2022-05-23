let userArray = [];

async function loadUsers() {
	 try {
	const objects = await fetch ("https://randomuser.me/api/?results=50");
	let users = await objects.json();
 	console.log(users)
}catch (error) {
    console.error(error);
	}
};

