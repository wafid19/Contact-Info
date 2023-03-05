
const BASE_URL ='http://localhost:3000/contact'


const deleteContact = (id)=>{
    fetch(BASE_URL+"/"+id, {method: "DELETE"})
}
const getDataAndintgretedWithFrontend = async ()=>{
    const res = await fetch(BASE_URL);
    const json = await res.json();

    //get the body

    const tbody = document.getElementById("pList")
    let tempTb ="";
    let sl = 1;
    json.forEach(element => {
        tempTb +=`<tr>
        <td scope="row">${sl}</td>
        <td>${element.name}</td>
        <td>${element.phone}</td>
        <td>${element.email}</td>
        <td> <button class="btn btn-success">Edit</button>
         <button class="btn btn-danger" onclick="deleteContact(${element.id})">Delete</button> 
        </td>
    </tr>`;

    sl++;
    });

  tbody.innerHTML=tempTb

}


const contact_f = document.getElementById("contact-form")

contact_f.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const Contact_Number = e.target.number.value;
    const Email = e.target.email.value;

    let id =0;

    fetch(BASE_URL)
       .then((res)=>{
        res.json().then((json)=>{
            id=json[json.length-1].id+1;  
        })
       })

       

       const contactData ={
        id:id,
        name:name,
        phone:Contact_Number,
        email:Email
    }

    console.log(contactData);
    fetch(BASE_URL,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(contactData)
    })

    getDataAndintgretedWithFrontend();
    
 
})

getDataAndintgretedWithFrontend( );














// window.onload = function(){

//     let tbody = document.getElementById('pList')

//     // axios.get(BASE_URL)
//     //      .than(res =>{
//     //         res.data.forEach(contact => {
//     //             createTDElement(contact, tbody)
//     //         });
//     //      })
//     //      .catch()  

//     fetch(BASE_URL)
//         .then(res => res.json())
//         .then(res =>{
//             res.formData.forEach(contact => {
//                 createTDElement(contact, tbody)
//             });
//         })
//         .catch()

//         fetch(URL,{
//              method:'GET',
//              body:JSON.stringify(),
//             })
// }


// // Creating a TR Element and appendindg to it's tbody Elements 

// function createTDElement(contact, tbody){
         
//     const TR = document.createElement('tr')

//     const tdName = document.createElement('td')
//     tdName.innerHTML = contact.name
//     TR.appendChild(tdName)

//     const tdPhone = document.createElement('td')
//     tdPhone.innerHTML = contact.phone ? contact.phone : alert("Please Enter Contact Number ")
//     TR.appendChild(tdPhone)

//     const tdEmail = document.createElement('td')
//     tdEmail.innerHTML = contact.email ? contact.email : alert("Please Enter Email ")
//     TR.appendChild(tdPhone)

//     const tdActions = document.createElement('td')

//     const tdEditBtn = document.createElement('button')
//     tdEditBtn.className = 'btn btn-warning'
//     tdEditBtn.innerHTML = 'Edit' 
//     tdEditBtn.addEventListener('click', function(){
//         console.log("I am Edit Button");
//     })
//     tdActions.appendChild(tdEditBtn)

//     const tdDeleteBtn = document.createElement('button')
//     tdDeleteBtn.className = 'btn btn-danger'
//     tdDeleteBtn.innerHTML = 'Delete' 
//     tdDeleteBtn.addEventListener('click', function(){
//         console.log("I am Delete Button");
//     })
//     tdActions.appendChild(tdDeleteBtn)


//     // tbody.appendChild(TR)

// }