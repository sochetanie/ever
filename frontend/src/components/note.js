class Note {

  constructor(title, body, id) {
    this.body = body
    this.title = title
    this.id = id

  }

  renderShort() {
    return (` <div class='ol-sm-4'style='border: 2px solid black;' id=${this.id}>
            <span style="color:#DF0101; font-weight: bold;">${this.title}</span>
            <br>
            <span>${this.body.slice(0,33)}...</span>
            <br>
            <button class='details' data-id=${this.id}>Details</button>
            <i class="glyphicon glyphicon-remove"></i>
            <br></div>`)
  }

  renderLong() {
    return (` <div class='col-sm-8' id=${this.id}>
            <span style="color:red">${this.title}</span>
            <br>
            <span>${this.body}</span>
            <br></div>`)
  }

}
