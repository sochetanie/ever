class List {
    constructor(notes) {
        this.notes = notes.map(x => new Note(x.title, x.body, x.id))

    } 

    addNote(title, body, id) {
        const newNote = new Note(title, body, id)
        this.notes.push(newNote)
    }

    singleNote(noteId) {
        return this.notes.filter(x => {
            if (x.id === noteId) {
                return true;
            }
        })[0]
    }

    renderShort() {
        return `${this.notes.map(x => x.renderShort()).join('')}`
    }

    renderLong() {
        return `${this.notes.map(x => x.renderLong()).join('')}`
    }

    removeNote(noteId) {
        this.notes = this.notes.filter(x => x.id === noteId)
    }

     
}

