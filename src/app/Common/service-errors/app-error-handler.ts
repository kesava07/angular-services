import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {
    handleError(error) {
        alert("something went wrong");
        console.log(error)
    }
};