const getUsername = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector(".form") as HTMLFormElement;
const main_container = document.querySelector(".main-content") as HTMLElement;

// Defining the Object
interface UserData {
  id: number;
  login: string;
  avatar_url: string;
  location: string;
  url: string;
}

// Reusable Function
function myCustomFetcher<T>(url: string, options?: RequestInit): Promise<T> {
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Network Response was not OK - Status: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}

// const showResultUI = (singleUser) => {

// }

function fetchUserData(url: string) {
  myCustomFetcher<UserData[]>(url, {}).then((users)=>{
    console.log(users.length);
  });
}

// Default Function to Load
fetchUserData("https://api.github.com/users");
