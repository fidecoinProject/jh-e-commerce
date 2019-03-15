import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { JhecommerceSharedLibsModule, JhecommerceSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [JhecommerceSharedLibsModule, JhecommerceSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [JhecommerceSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhecommerceSharedModule {
    static forRoot() {
        return {
            ngModule: JhecommerceSharedModule
        };
    }
}
