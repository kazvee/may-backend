const ProjectService = require('../services/projects');

exports.getProjects = async (req, res) => {
  try {
    let projects = await ProjectService.getProjects();
    res.json({
      projects: projects,
    });
  } catch (err) {
    console.error('Error! ☹️', err);
    res.status(500).json({
      message: 'Projects were not retrieved! ☹️',
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    let projectSaved = await ProjectService.createProject(req.body);
    res.status(201).json({
      message: 'Project created! 😃',
      projectSaved: projectSaved,
    });
  } catch (err) {
    console.error('Error! ☹️', err);
    res.status(400).json({
      message: 'Unable to create the project! ☹️',
    });
  }
};
