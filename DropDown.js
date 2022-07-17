// Dropdown component  module


//wrapping
class DropDown {
    constructor (items, id) {
         this.items = items
         this.id = id
         this.state_open = false
    }

    render() {

        

        let rootDiv = document.getElementById(this.id)
        rootDiv.innerHTML = `
        <a href='#'>
        ${this.items.root.label}
        </a>
        `
        let rootLink = document.querySelector(`#${this.id} > a`)
        rootLink.addEventListener('click', this.handler.bind(this))

        if (this.state_open) {
            let html = ``
            for (let i=0; i<this.items.children.length; i++) {
                html += `
                <a href='#'>
                ${this.items.children[i].label}
                </a>
                `
            }

            rootDiv.innerHTML += html
        }

      

    }

    handler() { 
        console.log(this)
        this.state_open = true 
        this.render()
        
         //toggling
        //HW1: upgrade the handler's logic,
        // so it opens at first click and closes at the second one.
    }

    
}



//declare a function () => { console.log(1) }
//call a function


//component lifecycle



// code that contains THIS

// x---------render()-------------click-----> time ?
//          >
//       when this is interpreted?
//