import { NgModule, ModuleWithProviders } from '@angular/core';

import { HasAuthorityDirective } from './directives/has-authority.directive';


@NgModule({
    imports: [],
    declarations: [HasAuthorityDirective],
    exports: [HasAuthorityDirective]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
