/*
have the task of getting the value of a control which will be file then
read that using that file reader again and checking for the mime type of file
*/
import { AbstractControl } from '@angular/forms';
import { Observable, Observer, of } from 'rxjs';

// special return type Validator. key, value and error code
export const mimeType = (control: AbstractControl):
  Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
    if (typeof(control.value === 'string')) {
      return of(null);
    }
  const file = control.value as File;
  const fileReader = new FileReader();
  const frObs = Observable.create((observer: Observer<{ [key: string]: any }>) => {
    fileReader.addEventListener('loadend', () => {
      // add validation
      // 8bit onsite integers, access read file patterns and metadata to check file
      const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);
      let header = '';
      let isValid = false;
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16);

      }
      // javascript mime type
      switch (header) {
        case '89504e47':
          isValid = true;
          break;
        case 'ffd8ffe0':
        case 'ffd8ffe1':
        case 'ffd8ffe2':
        case 'ffd8ffe3':
        case 'ffd8ffe8':
          isValid = true;
          break;
        default:
          isValid = false; // Or you can use the blob.type as fallback
          break;
      }
      if (isValid) {
        observer.next(null);
      }
      // tslint:disable-next-line:one-line
      else {
        observer.next({ invalidMimeType: true });
      }
      observer.complete();
    });
    // allow us to access the mime type, so we pass the file,
    // read it in as array then add event listener
    fileReader.readAsArrayBuffer(file);
  });
  return frObs;
};
