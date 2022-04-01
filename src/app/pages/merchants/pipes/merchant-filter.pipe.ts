import {Pipe, PipeTransform} from '@angular/core';
import {Merchants} from "../../../interfaces/merchant";

@Pipe({
  name: 'merchantFilter'
})
export class MerchantFilterPipe implements PipeTransform {
  transform(value: Array<Merchants>, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();
    return value.filter(data => JSON.stringify(data).toLowerCase().includes(args));
  }

}
