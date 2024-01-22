//encontrar btn adicionar tarefa

const btnAddTask = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');
const formCancelTask = document.querySelector('.app__form-footer__button--cancel');
const textArea = document.querySelector('.app__form-textarea');
const ulTask = document.querySelector('.app__section-task-list');
const tasks = JSON.parse(localStorage.getItem('tasks')) || []


function updateTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement(task){
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
        
    `

    const paragraph = document.createElement('p');
    paragraph.textContent = task.description;
    paragraph.classList.add('class', 'app__section-task-list-item-description');

    const button = document.createElement('button');
    const imgButton = document.createElement('img');

    button.onclick = () => {
        // debugger
        const newDescription = prompt("Qual é o novo nome da tarefa?");
        if (newDescription) {
            paragraph.textContent = newDescription;
            task.description = newDescription;
            updateTask();
        }
    }

    imgButton.setAttribute('src', 'imagens/edit.png');
    imgButton.classList.add('class', 'app_button-edit')

    button.append(imgButton);

    li.append(svg)
    li.append(paragraph)
    li.append(button)

    return li
}

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
    const TaskElement = createTaskElement(task);
    ulTask.append(TaskElement);
    updateTask()
    textArea.value = '';
    formAddTask.classList.add('hidden');

})

formCancelTask.onclick = () => {
    textArea.value = '';
    formAddTask.classList.add('hidden')
}


tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    ulTask.append(taskElement)
});

