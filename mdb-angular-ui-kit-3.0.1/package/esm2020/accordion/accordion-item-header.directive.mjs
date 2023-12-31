import { Directive, InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export const MDB_ACCORDION_ITEM_HEADER = new InjectionToken('MdbAccordionItemHeaderDirective');
export class MdbAccordionItemHeaderDirective {
    constructor(template) {
        this.template = template;
    }
}
MdbAccordionItemHeaderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbAccordionItemHeaderDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
MdbAccordionItemHeaderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: MdbAccordionItemHeaderDirective, selector: "[mdbAccordionItemHeader]", providers: [{ provide: MDB_ACCORDION_ITEM_HEADER, useExisting: MdbAccordionItemHeaderDirective }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbAccordionItemHeaderDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[mdbAccordionItemHeader]',
                    providers: [{ provide: MDB_ACCORDION_ITEM_HEADER, useExisting: MdbAccordionItemHeaderDirective }],
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21kYi1hbmd1bGFyLXVpLWtpdC9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0taGVhZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBZSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkUsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsSUFBSSxjQUFjLENBQ3pELGlDQUFpQyxDQUNsQyxDQUFDO0FBT0YsTUFBTSxPQUFPLCtCQUErQjtJQUMxQyxZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUFHLENBQUM7OzRIQUR0QywrQkFBK0I7Z0hBQS9CLCtCQUErQixtREFGL0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxXQUFXLEVBQUUsK0JBQStCLEVBQUUsQ0FBQzsyRkFFdEYsK0JBQStCO2tCQUwzQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsV0FBVyxpQ0FBaUMsRUFBRSxDQUFDO2lCQUNsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0aW9uVG9rZW4sIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBNREJfQUNDT1JESU9OX0lURU1fSEVBREVSID0gbmV3IEluamVjdGlvblRva2VuPE1kYkFjY29yZGlvbkl0ZW1IZWFkZXJEaXJlY3RpdmU+KFxuICAnTWRiQWNjb3JkaW9uSXRlbUhlYWRlckRpcmVjdGl2ZSdcbik7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1ttZGJBY2NvcmRpb25JdGVtSGVhZGVyXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTURCX0FDQ09SRElPTl9JVEVNX0hFQURFUiwgdXNlRXhpc3Rpbmc6IE1kYkFjY29yZGlvbkl0ZW1IZWFkZXJEaXJlY3RpdmUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE1kYkFjY29yZGlvbkl0ZW1IZWFkZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG4iXX0=