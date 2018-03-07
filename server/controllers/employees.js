const Employee = require('../models').Employee;

module.exports = {
  create(req,res){
    return Employee
      .create({ name: req.body.name, phone:req.body.phone_number, supervisors: req.body.supervisors })
      .then(employee => res.status(201).send(employee))
      .catch(error => res.status(400).send(error));
  },
  list(req,res){
    return Employee
      .all()
      .then(employee => res.status(200).send(employee))
      .catch(error => res.status(400).send(error));
  },
  find(req,res){
    return Employee
      .findById(parseInt(req.params.employeeId))
      .then( employee => {
        if(!employee){
          return res.status(404).send({message: 'Employee Not Found'});
        }

        return res.status(200).send(employee)
      })
      .catch(error => res.status(400).send(error));
  },
  update(req,res){
    return Employee
      .findById(req.params.employeeId)
      .then( employee => {
        if (!employee) {
          return res.status(404).send({
            message: 'Employee not found!'
          });
        }

        return employee
          .update({
            name: req.body.name || employee.name,
            phone: req.body.phone_number || employee.phone,
            supervisors: req.body.supervisors || employee.supervisors
          })
          .then(() => res.status(200).send(employee))
          .catch((error) => res.status(400).send(error));
      })
      .catch( (error) => res.status(400).send(error));
  },

  remove(req,res){
    return Employee
      .findById(req.params.employeeId)
      .then(employee => {
        if (!employee){
          return res.status(400).send({
            message: 'Employee Not Found!',
          });
        }

        return employee
          .destroy()
          .then(() => res.status(204).send({ message : 'Employee deleted successfully'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
