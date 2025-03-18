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
function myCustomFetcher<T>(url:string, options?:RequestInit):Promise<T>{

}

function fetchUserData(url: string){
    myCustomFetcher<UserData[]>(url, {})
}

// Default Function to Load
