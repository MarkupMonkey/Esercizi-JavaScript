function isComplete(list){
  let comp = true;
  for(let i=0; i < list.length; i++){
     if(list[i].done==false) {     
       comp=false;
       return comp;
  }
}
  return comp;
}

function uncompletedNotes(notes) {
  let unNotes = notes.map((el)=>{return el;}); 
  
  for(let i=0; i < notes.length; i++){ //dichiarare la i in ogni funzione
     if (isComplete(unNotes[i].todos)){
       unNotes=unNotes.splice(i,1);
      }
   }
   return unNotes;
 }

const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: false
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: true
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: true
      }
    ]
  }
]

const notesInProgress = uncompletedNotes(notes);
console.log('All notes: ', notes);
console.log('Notes In Progress: ', notesInProgress);