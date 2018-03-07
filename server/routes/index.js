const employeesController = require('../controllers').employees;

module.exports = (app) => {
  app.get('api', (req, res) => res.status(200).send({
    message: 'Welcome to the Employees API!',
  }));

  app.post('/api/employees', employeesController.create);
  app.get('/api/employees', employeesController.list);
  app.get('/api/employees/:employeeId', employeesController.find);
  app.put('/api/employees/:employeeId', employeesController.update);
  app.delete('/api/employees/:employeeId', employeesController.remove);

};
