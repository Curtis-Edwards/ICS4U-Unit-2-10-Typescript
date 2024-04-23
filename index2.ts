/*
* This program runs with the vehicle class.
*
* @author  Curtis Edwards
* @version 1.0
* @since   2024-04-20
*/

import { Truck } from "./Truck"
import { Bike } from "./Bike"
import { Vehicle } from "./Vehicle"

const car = new Vehicle('Red', 40)

console.log('Created car.\nStatus:\n')
car.status()

console.log('\nDone.')
