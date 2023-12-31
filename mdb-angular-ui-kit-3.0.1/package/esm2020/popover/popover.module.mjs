import { MdbPopoverDirective } from './popover.directive';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { MdbPopoverComponent } from './popover.component';
import * as i0 from "@angular/core";
export class MdbPopoverModule {
}
MdbPopoverModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbPopoverModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdbPopoverModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: MdbPopoverModule, declarations: [MdbPopoverDirective, MdbPopoverComponent], imports: [CommonModule, OverlayModule], exports: [MdbPopoverDirective, MdbPopoverComponent] });
MdbPopoverModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbPopoverModule, imports: [CommonModule, OverlayModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbPopoverModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule],
                    declarations: [MdbPopoverDirective, MdbPopoverComponent],
                    exports: [MdbPopoverDirective, MdbPopoverComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tZGItYW5ndWxhci11aS1raXQvcG9wb3Zlci9wb3BvdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBTzFELE1BQU0sT0FBTyxnQkFBZ0I7OzZHQUFoQixnQkFBZ0I7OEdBQWhCLGdCQUFnQixpQkFIWixtQkFBbUIsRUFBRSxtQkFBbUIsYUFEN0MsWUFBWSxFQUFFLGFBQWEsYUFFM0IsbUJBQW1CLEVBQUUsbUJBQW1COzhHQUV2QyxnQkFBZ0IsWUFKakIsWUFBWSxFQUFFLGFBQWE7MkZBSTFCLGdCQUFnQjtrQkFMNUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQztvQkFDeEQsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7aUJBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWRiUG9wb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vcG9wb3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWRiUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTWRiUG9wb3ZlckRpcmVjdGl2ZSwgTWRiUG9wb3ZlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNZGJQb3BvdmVyRGlyZWN0aXZlLCBNZGJQb3BvdmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTWRiUG9wb3Zlck1vZHVsZSB7fVxuIl19