import { Component, OnInit, EventEmitter } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';

function readBase64(file): Promise<any> {
  const reader  = new FileReader();
  const future = new Promise((resolve, reject) => {
    reader.addEventListener('load', () => {
      resolve(reader.result);
    }, false);

    reader.addEventListener('error', (event) => {
      reject(event);
    }, false);

    reader.readAsDataURL(file);
  });
  return future;
}

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart: true
    });
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  fileObject: any;


  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];

    console.log(file);

    readBase64(file)
      .then((data) => {
      console.log(data);
    });

  }

  constructor() { }

  ngOnInit(): void {
  }

}
