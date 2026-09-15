fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
    .then(users => 
        {
        const container = document.getElementById('users-container');
        users.forEach(user => 
        {
            const newElement = document.createElement("p");
            newElement.textContent = `${user.name} - ${user.email}`;
            container.appendChild(newElement);
        });
        }).catch(error => 
            {
                console.log("Error fetching data: ", error);
            });


const jsonString = '[{"name":"Alice","age":25},{"name":"Bob","age":30}]';
const jsonObject = JSON.parse(jsonString);
console.log(`${jsonObject[0].name} - ${jsonObject[0].age}`);
console.log(`${jsonObject[1].name} - ${jsonObject[1].age}`);

const user = 
{
    name: "Charlie",
    age: 28,
    isActive: true
};

console.log(JSON.stringify(user));

const userSettings = 
{
    theme: "dark",
    lang: "en"
};
localStorage.setItem("userSettings", JSON.stringify(userSettings));

const retrievedSettings = localStorage.getItem("userSettings");
console.log(retrievedSettings);