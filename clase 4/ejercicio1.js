 const delay = (ret) => {
  for (let i = 0; i < ret * 3e6; i++);
}

function hacerTarea(num) {
  console.log("haciendo tarea " + num)
  delay(100)
}

console.log("inicio de tareas")
hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)
console.log("fin de tareas")
console.log("otras tareas ...")
 
function hacerTarea2(num, cb) {
  console.log("haciendo tarea " + num)
  setTimeout(cb, 2000)
}

console.log("inicio de tareas")
hacerTarea2(1, () => {
  hacerTarea2(2, () => {
    hacerTarea2(3, () => {
      hacerTarea2(4, () => {
        console.log("fin de tareas")
      })
    })
  })
})
console.log("otras tareas ...")
 