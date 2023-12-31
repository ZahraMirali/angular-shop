import { NgModule } from '@angular/core';
import { MdbScrollspyDirective } from './scrollspy.directive';
import { MdbScrollspyLinkDirective } from './scrollspy-link.directive';
import { MdbScrollspyElementDirective } from './scrollspy-element.directive';
import { MdbScrollspyService } from './scrollspy.service';
import { MdbScrollspyWindowDirective } from './scrollspy-window.directive';
import * as i0 from "@angular/core";
export class MdbScrollspyModule {
}
MdbScrollspyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbScrollspyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdbScrollspyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: MdbScrollspyModule, declarations: [MdbScrollspyDirective,
        MdbScrollspyLinkDirective,
        MdbScrollspyElementDirective,
        MdbScrollspyWindowDirective], exports: [MdbScrollspyDirective,
        MdbScrollspyLinkDirective,
        MdbScrollspyElementDirective,
        MdbScrollspyWindowDirective] });
MdbScrollspyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbScrollspyModule, providers: [MdbScrollspyService] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbScrollspyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MdbScrollspyDirective,
                        MdbScrollspyLinkDirective,
                        MdbScrollspyElementDirective,
                        MdbScrollspyWindowDirective,
                    ],
                    exports: [
                        MdbScrollspyDirective,
                        MdbScrollspyLinkDirective,
                        MdbScrollspyElementDirective,
                        MdbScrollspyWindowDirective,
                    ],
                    providers: [MdbScrollspyService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsc3B5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21kYi1hbmd1bGFyLXVpLWtpdC9zY3JvbGxzcHkvc2Nyb2xsc3B5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQWlCM0UsTUFBTSxPQUFPLGtCQUFrQjs7K0dBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLGlCQWIzQixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1QiwyQkFBMkIsYUFHM0IscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6Qiw0QkFBNEI7UUFDNUIsMkJBQTJCO2dIQUlsQixrQkFBa0IsYUFGbEIsQ0FBQyxtQkFBbUIsQ0FBQzsyRkFFckIsa0JBQWtCO2tCQWY5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsNEJBQTRCO3dCQUM1QiwyQkFBMkI7cUJBQzVCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsNEJBQTRCO3dCQUM1QiwyQkFBMkI7cUJBQzVCO29CQUNELFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1kYlNjcm9sbHNweURpcmVjdGl2ZSB9IGZyb20gJy4vc2Nyb2xsc3B5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJTY3JvbGxzcHlMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9zY3JvbGxzcHktbGluay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWRiU2Nyb2xsc3B5RWxlbWVudERpcmVjdGl2ZSB9IGZyb20gJy4vc2Nyb2xsc3B5LWVsZW1lbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1kYlNjcm9sbHNweVNlcnZpY2UgfSBmcm9tICcuL3Njcm9sbHNweS5zZXJ2aWNlJztcbmltcG9ydCB7IE1kYlNjcm9sbHNweVdpbmRvd0RpcmVjdGl2ZSB9IGZyb20gJy4vc2Nyb2xsc3B5LXdpbmRvdy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNZGJTY3JvbGxzcHlEaXJlY3RpdmUsXG4gICAgTWRiU2Nyb2xsc3B5TGlua0RpcmVjdGl2ZSxcbiAgICBNZGJTY3JvbGxzcHlFbGVtZW50RGlyZWN0aXZlLFxuICAgIE1kYlNjcm9sbHNweVdpbmRvd0RpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1kYlNjcm9sbHNweURpcmVjdGl2ZSxcbiAgICBNZGJTY3JvbGxzcHlMaW5rRGlyZWN0aXZlLFxuICAgIE1kYlNjcm9sbHNweUVsZW1lbnREaXJlY3RpdmUsXG4gICAgTWRiU2Nyb2xsc3B5V2luZG93RGlyZWN0aXZlLFxuICBdLFxuICBwcm92aWRlcnM6IFtNZGJTY3JvbGxzcHlTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWRiU2Nyb2xsc3B5TW9kdWxlIHt9XG4iXX0=