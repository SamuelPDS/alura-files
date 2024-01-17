//encontrar btn adicionar tarefa

const btnAddTask = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const tasks = []

btnAddTask.addEventListener('click', () => {
    // if(formAddTask) {
        formAddTask.classList.toggle('hidden');
    // }
})

formAddTask.addEventListener('submit', (e) => {
    e.preventDefault(); //prevenir a tela de atualizar
    const task = {
        description: textArea.value
    }
    tasks.push(task);
    localStorage.setItem('tasks', tasks)
})