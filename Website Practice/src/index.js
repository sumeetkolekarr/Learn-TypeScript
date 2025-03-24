var getUsername = document.querySelector("#user");
var formSubmit = document.querySelector(".form");
var main_container = document.querySelector(".main-content");
// Reusable Function
function myCustomFetcher(url, options) {
    return fetch(url, options)
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Network Response was not OK - Status: ".concat(response.status));
        }
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        return data;
    });
}
// const showResultUI = (singleUser) => {
// }
function fetchUserData(url) {
    myCustomFetcher(url, {}).then(function (users) {
        console.log(users);
    });
}
// Default Function to Load
fetchUserData("https://api.github.com/users");
