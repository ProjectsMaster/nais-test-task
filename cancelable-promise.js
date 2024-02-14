'use strict';

class CancelablePromise extends Promise {
    // Спеціальна властивість класу - 
    // тригер isCanceled (є скасованим):
    isCanceled = false;

    // Конструктор промісів:
    constructor(asyncOperation) {
        super((resolve, reject) => {
            asyncOperation(targetValue => {
                if (this.isCanceled) {
                    reject('# Операцію примусово скаcовано!');
                } else {
                    resolve(targetValue);
                }
            }, reject);
        });
    }

    // Спеціальний метод скасування операції:
    cancel() {
        this.isCanceled = true;
    }    
}

module.exports = CancelablePromise;
