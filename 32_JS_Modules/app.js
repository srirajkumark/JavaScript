// Modules
// -------
// import
// export
// configure type = module in main js file.

import { Employee } from "./employees/Employee.js";
import { Customer } from "./customers/customer.js";

let employee = new Employee('Sri', 'Raj', 30, 'Sr. Software Developer');
employee.greet();

let customer = new Customer('Laura', 'Wilson', 25, 'USA');
customer.greet();