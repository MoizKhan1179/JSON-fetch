// function ReturnValue(PromCom){
//     return new Promise(function (resolve,reject) {
//         setTimeout (function (){
//         if(PromCom){
//             resolve("Promise Sucessful");
//             }else{
//                 reject("Promise Unsucessful");
//             }
//             },2000)
//         })
//     };

//    ReturnValue(false)
//     .then((result) => console.log(result))
//     .then((Error) => console.log(Error));




// async function returnSum(){
//     let a = 3;
//     let b = 5;
//     let result = a + b;
//     await console.log("Addition of two numbers is")
//     console.log(result);
//     return result;
// }
// console.log("please wait. . .")
// returnSum().then(res => console.log(res)).catch(err => console.log(err))

// console.log ("hold on")



// fetch ("https://dummyjson.com/products")

// .then((response) => response.json())
// .then((data) => {
    //   console.log(data)
// for(let i = 0; i < data.length; i++){
// con.innerHTML += data[i].id + " " + "<h3>" + data[i].title+  "</h3>" + "<br>"

// }
// });

// (async function(){
//     fetch('https://dummyjson.com/products')
    
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         let container = document.getElementById('container');
//         data.products.forEach((e) => {
//             container.innerHTML += `
//             <div class="col-lg-3 col-md-4 col-sm-6">
//             <div class="card">
//             <img src="${e.images[0]}" class="card-img-top" alt="..." height="200px">
//             <div class="card-body">
//               <h5 class="card-title">${e.title + e.products}</h5>
//               <p class="card-text">${e.description}</p>
//               <a href="#" class="btn btn-primary">${e.price}</a>
//             </div>
//           </div>
//           </div>
//             `
//         });
//     });

// })();
// // for(let i = 0; i < data.length; i++){
// // con.innerHTML += data[i].id + " " + "<h3>" + data[i].title+  "</h3>" + "<br>"
// // }


// (function (){
//     fetch('https://dummyjson.com/products')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//     })
// })








(async function(){
   await fetch("recipes.json")
    
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        let searchBar = document.getElementById("searchBar")
        let btn = document.getElementById("btn");
        let list = document.getElementById("myList");

        function displayresult(result){
            list.innerHTML = "";
            console.log(result);

            result.forEach((value) => {
                list.innerHTML += `
                <li>
                <H2>
                ${value.title}
                </H2>
                <p>
                ${value.description}
                </p>
                </li>
                `
                
            });
        }

        function search(){
            let query = searchBar.value;
            console.log(query);
            let result = data.filter(function (recipe){
                return (
                    recipe.title.toLowerCase().includes(query) ||
                    recipe.ingredients.join("").toLowerCase().includes(query)
                );
            });
            displayresult(result);

        };

        btn.addEventListener("click", search);
   
    });
    })();

