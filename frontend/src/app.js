class App {
    constructor () {
        this.newAdp = new urlAdapter()

         $('#note').on('submit', function() {
            event.preventDefault()

            var newNoteTitle = $('#title').val()
            var newNoteBody = $('#text').val()

            $('#title').val('')
            $('#text').val('')

            
            var newAdp = new urlAdapter()

                newAdp.addNote(newNoteTitle, newNoteBody)
                .then(x => {
                    if (x.id) {
                    const newNote = new Note(newNoteTitle, newNoteBody, x.id)
                        $('.col-sm-4').append(newNote.renderShort())
                    } else {
                        alert("Error try again")
                    }
                })
            })
        }
}
 
 
const myApp = new App()

myApp.newAdp.getAllNotes()
.then(notes => {
    var newList = new List(notes)
    var note = newList.renderShort()
    $('.col-sm-4').append(note)
})

myApp.newAdp.getAllNotes()
.then(notes => {
    var newList = new List(notes)
        $('.col-sm-4').on('click','.details', function(event) {
            var fullNote = newList.singleNote(parseInt(event.target.dataset.id))
                // debugger
                $('.col-sm-8').html(fullNote.renderLong())
            })
    })


myApp.newAdp.deleteNote()




