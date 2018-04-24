class ProjectDisplay extends HTMLElement {
    constructor (data) {
        super();
        this.checking = 'WOAH';
        this.initTemplate();
    }

    initTemplate () {
        const template = document.querySelector('#project-template');
        this.root = this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    fill (data) {
        console.log('yayyy');
        console.log(data);
    }
}

class Project {
    constructor (data) {
        this.data = {};

        for (let key in data) {
            this.data[key] = data[key];
        }

        this.render();
    }

    render () {
        this.element = document.createElement('project-display');
        for(let name in this.data) {
            let property = this.data[name];
            let element = this.element.root.querySelector(`[data-content="${name}"]`);

            if (name === 'image') {
                element.setAttribute('src', `./imgs/${property}`);
                element.setAttribute('alt', 'gif of project');
                continue;
            }

            if (Array.isArray(property)) {
                property.forEach(item => {
                    let li = document.createElement('li');
                    li.innerHTML = createLiContent(item);
                    element.appendChild(li);
                });
                continue;
            }

            element.textContent = property;
        };

        const projectHolder = document.querySelector('#work section');
        projectHolder.appendChild(this.element);




        function createLiContent (item) {
            if (typeof item === 'string') return item;

            return `<a href="${item.link}">${item.text}</a>`;
            // returning a string bc returning the html element doesn't work
            // when added to the LI, it only adds the URL, not the whole a tag

            // let link = document.createElement('a');
            // link.setAttribute('href', item.link);
            // link.textContent = item.text;
        }
    }
}

class Projects {
    fetch () {
        fetch ('./js/projects.json')
            .then(res => res.json())
            .then(data => this.load(data));
    }
    
    load (data) {
        this.list = data.map(proj => new Project(proj));

        // console.log(this.list);
    }

    static loadComponent () {
        window.customElements.define('project-display', ProjectDisplay);
        console.log('element loaded');
    }
}


export default Projects;