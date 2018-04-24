import Projects from './projects';

const app = {
    init: function () {
        this.loadProjects();
    },
    loadProjects: function () {        
        const projects = new Projects();
        projects.fetch();
    }
}

app.init();