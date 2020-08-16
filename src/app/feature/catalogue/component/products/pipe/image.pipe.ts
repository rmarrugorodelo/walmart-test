import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: any): string {
    if (!image) {
        return 'assets/image/noimage.png';
    }
    return  `http://${image}`;
  }

}
