import {decorateLists} from './randomDecor';


class Project {
    constructor (data) {
        this.data = {};

        for (let key in data) {
            this.data[key] = data[key];
        }

        // this.render();
    }

    render () {
        const template = document.querySelector('#project-template');
        this.element = document.importNode(template.content, true);
        
        for(let name in this.data) {
            let property = this.data[name];
            let element = this.element.querySelector(`[data-content="${name}"]`);

            if (name === 'image') {
                element.setAttribute('src', `./imgs/${property}`);
                element.setAttribute('alt', 'gif of project');
                element.setAttribute('target', '_blank');
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
        this.list.forEach(proj => {
            proj.render();
        });
        
        decorateLists();
    }
}


export default Projects;