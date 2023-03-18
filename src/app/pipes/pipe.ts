import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'Code'})
export class CodePipe implements PipeTransform{
    transform(value: number): string {
        var zero = '';
        for (let i = 0; i < (4 - value.toFixed(0).length); i++) {
            zero += '0';
        }
        return `No. ${zero}${value.toFixed(0)}`;
    }
}

@Pipe({name: 'height'})
export class HeightPipe implements PipeTransform{
    transform(value: number): string {
        var rt = (value/3.17).toFixed(2).split('.');
        return `${rt[0]}' ${rt[1]}''`;
    }
}

@Pipe({name: 'weight'})
export class WeightPipe implements PipeTransform{
    transform(value: number) {
        var rt = value*0.22;
        return `${rt.toFixed(2)} Ibs`;
    }
}