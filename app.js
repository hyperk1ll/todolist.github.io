let input = document.querySelector('.entered-list');
let addButton = document.querySelector('.add-list');
let task = document.querySelector('.task');

// input.addEventListener('keyup', () => {
//     if(input.value.trim() != 0) {
//         addButton.classList.add('active')
//     }   else {
//             addButton.classList.remove('active')
//     }
// })

// add new item

addButton.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-button">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-regular fa-trash-can"></i>
        </div>
        `
        task.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a task')
    }

})

//delete item from list

task.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.parentElement.parentElement.remove(); 
    }
})

//mark item as completed

task.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        e.target.parentElement.parentElement.classList.toggle('completed'); 
    }
})