let arrayOfObj =[]
let movie ;
 function addMovie() {
    
 
    if (title.value == ''|| director.value == '' || year.value == '') {
        errorMSG.innerHTML = 'Fill others also'
        
    }else{
        let movie = {
            title:title.value,
            director:director.value,
            year:year.value

        }
        table.style.display = 'block'
        arrayOfObj.push(movie)
        console.log(arrayOfObj);
        anonymos()
        
    }
}
function edit(){

    if(editedName.value == ' ' || editedNumber.value == ' ' || editedEmail.value == ''){
        alert('Fill in the the spaces ')
     }else{
        let newMovieObj ={
            title: editedName.value ,
            director:editedNumber.value,
            year: editedEmail.value
    
        }
        console.log(newMovieObj);
        arrayOfObj.splice(movie, 1, newMovieObj)
        anonymos()
        title.value = ''
         director.value = ''
          year.value =''
    }

}
function deletes(bee) {
    let farm = confirm('Are you sure')
    if (farm == true) {
        arrayOfObj.splice(bee, 1)
        anonymos()
        
    }else{
        anonymos()
    }
    
}
const anonymos = ()=>{
     table.innerHTML = ''
    table.innerHTML += `
        <tr>
            <td>S/N</td>
            <td>Title</td>
            <td>Director</td>
            <td>Year released</td>
            <td>User end</td>

        </tr>

    
    `
    for (let i = 0; i < arrayOfObj.length; i++) {
       
        
        table.innerHTML += `
            <tr>
                <td> ${i+1} </td>
                <td>${arrayOfObj[i].title}</td>
                <td>${arrayOfObj[i].director}</td>
                <td>${arrayOfObj[i].year}</td>
                <td>
                    <button class=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Edit </button>
                    <button class=" btn btn-danger " onclick="deletes()"> Delete </button>
                </td>


            </tr>
        `
        
    }
}
