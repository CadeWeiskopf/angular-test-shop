import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({ name: 'stringify' })
export class JsonStringifyPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value);
  }
}

@Pipe({ name: 'twoDecimalPlaces' })
export class TwoDecimalPlacesPipe implements PipeTransform {
  transform(value: number | undefined): string {
    return value === undefined ? 'error' : value.toFixed(2);
  }
}

@NgModule({
  declarations: [TwoDecimalPlacesPipe, JsonStringifyPipe],
  imports: [CommonModule],
  exports: [TwoDecimalPlacesPipe, JsonStringifyPipe],
})
export class UtilPipesModule {}
