const favHobbies = (hobby: string | string[]) => {
    if(typeof hobby === 'object' && Array.isArray(hobby)){
        return hobby.map(()=>{})
    } else {
        console.log(hobby);
    }
}

favHobbies('Coding')
favHobbies(['Coding', 'Games'])