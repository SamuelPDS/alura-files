//encontrar btn adicionar tarefa

const btnAddTask = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task')

btnAddTask.addEventListener('click', () => {
    // if(formAddTask) {
        formAddTask.classList.toggle('hidden');
    // }
})
