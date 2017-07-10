// class Adapter {
//     constructor(notes){
//         this.user = notes.user
//     }
// }

class urlAdapter {
    constructor () {
        this.base_url = 'http://localhost:3000/api/v1/notes'
    }

    addNote(title, body) {
        var opt = {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({title: title, body: body})
        }
        return fetch(this.base_url, opt)
            .then(response => response.json())
            // .then(json => {return json})
    }

    deleteNote(id) {
        return fetch(`${this.base_url}/${id}`, {
            headers: {'Content-Type': 'application/json'},
            method: 'delete'
        })
        .then(response => response.json())
        .then(json => {return json})

    }

    getAllNotes() {
        return fetch(this.base_url)
        .then(res => res.json())
        // .then(json => {console.log(json)})
    }


}




