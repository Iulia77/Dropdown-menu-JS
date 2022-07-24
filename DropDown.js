// Dropdown component  module


//wrapping
class DropDown {
    constructor (items, id) {
         this.items = items
         this.id = id
         this.state_open = false

         this.styles = {
             palette: {
                default: {
                    background: '#123',
                    color: '#fff',
                },
                  active: {
                    background: '#eee',
                    color: '#234', 
                  },  
                  
             }
         }
    }

    render() {

        

        let rootDiv = document.getElementById(this.id)
        
        rootDiv.style.display = 'inline-block'
        rootDiv.style.fontFamily = 'Arial'


        rootDiv.innerHTML = `
        <a href='#' style="background: ${this.styles.palette.default.background};
                        color: ${this.styles.palette.default.color};
                        padding: 1em;
                        text-decoration: none;
                        display: block;
                        ">
        ${this.items.root.label}
        </a>
        `
        
        if (this.state_open) {
            let html = ``
            for (let i=0; i<this.items.children.length; i++) {
                html += `
                <a href='#' class="item" style="background: ${this.styles.palette.default.background};
                        color: ${this.styles.palette.default.color};
                        padding: 1em;
                        text-decoration: none;
                        display: block;">
                ${this.items.children[i].label}
                </a>
                `
            }

            rootDiv.innerHTML += html
        }

        let rootLink = document.querySelector(`#${this.id} > a`)
        let items = document.querySelectorAll(`#${this.id} > .item`)

        
        for (let i=0; i<items.length; i++) {
            items[i].addEventListener('mouseover', this.mouseoverHandler.bind(this));
            
            
        }
            
        rootLink.addEventListener('click', this.clickHandler.bind(this))


      
    }  

    
    clickHandler() {

        //HW2: How to make this code compact
            this.state_open ? this.state_open = false : this.state_open = true
              
            this.render()
        }

        mouseoverHandler(e) {
             e.target.style.color = `${this.styles.palette.active.color} `
             e.target.style.background = `${this.styles.palette.active.background} `
        }
//HW3: create and bind the mouseoutHandler(e)
// restores the default styles
         mouseoutHandler(e) {
             e.target.style.color = `${this.styles.palette.active.color} `
             e.target.style.background = `${this.styles.palette.active.background} `
         }

    }
             //toggling
            //HW1: upgrade the handler's logic,
            // so it opens at first click and closes at the second one.
     
/*handler() {
        if (this.state_open) {
            this.state_open = false
        } else {
            this.state_open = true
        }
        
        this.render() */

//declare a function () => { console.log(1) }
//call a function


//component lifecycle



// code that contains THIS

// x---------render()-------------click-----> time ?
//          >
//       when this is interpreted?
//
