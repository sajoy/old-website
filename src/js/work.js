import {decorateLists} from './randomDecor';
import Projects from './projects';

const app = {
    init: function () {
        decorateLists();
        this.loadProjects();
    },
    loadProjects: function () {
        Projects.loadComponent();
        
        const projects = new Projects();
        projects.fetch();
    }
}

app.init();