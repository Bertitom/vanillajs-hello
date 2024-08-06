const who = ['Mi perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
const action = ['se comió', 'orinó sobre', 'aplastó', 'rompió'];
const what = ['mi tarea', 'mi teléfono', 'mi auto'];
const when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras miraba la tele'];

function generarExcusa() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];
    
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

window.onload = function() {
    document.getElementById('excuse').innerHTML = generarExcusa();
};