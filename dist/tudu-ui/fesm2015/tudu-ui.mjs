import * as i0 from '@angular/core';
import { Component, Injectable, NgModule } from '@angular/core';

class CalendarComponent {
    constructor() { }
    ngOnInit() {
    }
}
CalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CalendarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: CalendarComponent, selector: "lib-calendar", ngImport: i0, template: "<p>calendar works!</p>\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-calendar', template: "<p>calendar works!</p>\r\n" }]
        }], ctorParameters: function () { return []; } });

class TuduUiService {
    constructor() { }
}
TuduUiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TuduUiService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TuduUiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TuduUiService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TuduUiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TuduUiComponent {
    constructor() { }
    ngOnInit() {
    }
}
TuduUiComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TuduUiComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TuduUiComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TuduUiComponent, selector: "lib-tudu-ui", ngImport: i0, template: `
    <p>
      tudu-ui works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TuduUiComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-tudu-ui', template: `
    <p>
      tudu-ui works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class TuduUiModule {
}
TuduUiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TuduUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TuduUiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: TuduUiModule, declarations: [CalendarComponent], exports: [CalendarComponent] });
TuduUiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TuduUiModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TuduUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CalendarComponent],
                    imports: [],
                    exports: [
                        CalendarComponent, // 👈 Adicione esta linha!
                    ],
                }]
        }] });

/*
 * Public API Surface of tudu-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CalendarComponent, TuduUiComponent, TuduUiModule, TuduUiService };
//# sourceMappingURL=tudu-ui.mjs.map
