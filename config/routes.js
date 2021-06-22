// const mongoose = require('mongoose')
const express = require("express");
const customerController = require("../app/controllers/customerController");
const departmentController = require("../app/controllers/departmentController");
const employeeController = require("../app/controllers/employeeController");
const ticketController = require("../app/controllers/ticketController");
const router = express.Router();

router.get("/customers", customerController.list);
router.post("/customers", customerController.create);
router.get("/customers/:id", customerController.show);
router.put("/customers/:id", customerController.update);
router.delete("/customers/:id", customerController.destroy);

router.get("/department", departmentController.list);
router.post("/department", departmentController.create);
router.get("/department/:id", departmentController.show);
router.put("/department/:id", departmentController.update);
router.delete("/department/:id", departmentController.destroy);

router.get("/employee", employeeController.list);
router.post("/employee", employeeController.create);
router.get("/employee/:id", employeeController.show);
router.put("/employee/:id", employeeController.update);
router.delete("/department/:id", departmentController.destroy);

router.get("/tickets", ticketController.list);
router.post("/tickets", ticketController.create);
router.get("/tickets/:id", ticketController.show);
router.put("/tickets/:id", ticketController.update);
router.delete("/tickets/:id", ticketController.destroy);

module.exports = router;
