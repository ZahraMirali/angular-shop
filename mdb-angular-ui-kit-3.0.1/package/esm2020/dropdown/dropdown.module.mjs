import { MdbDropdownDirective } from './dropdown.directive';
import { MdbDropdownToggleDirective } from './dropdown-toggle.directive';
import { MdbDropdownMenuDirective } from './dropdown-menu.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export class MdbDropdownModule {
}
MdbDropdownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbDropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdbDropdownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: MdbDropdownModule, declarations: [MdbDropdownDirective, MdbDropdownToggleDirective, MdbDropdownMenuDirective], imports: [CommonModule, OverlayModule], exports: [MdbDropdownDirective, MdbDropdownToggleDirective, MdbDropdownMenuDirective] });
MdbDropdownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbDropdownModule, imports: [CommonModule, OverlayModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbDropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule],
                    declarations: [MdbDropdownDirective, MdbDropdownToggleDirective, MdbDropdownMenuDirective],
                    exports: [MdbDropdownDirective, MdbDropdownToggleDirective, MdbDropdownMenuDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWRiLWFuZ3VsYXItdWkta2l0L2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBTXJELE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFIYixvQkFBb0IsRUFBRSwwQkFBMEIsRUFBRSx3QkFBd0IsYUFEL0UsWUFBWSxFQUFFLGFBQWEsYUFFM0Isb0JBQW9CLEVBQUUsMEJBQTBCLEVBQUUsd0JBQXdCOytHQUV6RSxpQkFBaUIsWUFKbEIsWUFBWSxFQUFFLGFBQWE7MkZBSTFCLGlCQUFpQjtrQkFMN0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSwwQkFBMEIsRUFBRSx3QkFBd0IsQ0FBQztvQkFDMUYsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsMEJBQTBCLEVBQUUsd0JBQXdCLENBQUM7aUJBQ3RGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWRiRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLW1lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtNZGJEcm9wZG93bkRpcmVjdGl2ZSwgTWRiRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsIE1kYkRyb3Bkb3duTWVudURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtNZGJEcm9wZG93bkRpcmVjdGl2ZSwgTWRiRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsIE1kYkRyb3Bkb3duTWVudURpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1kYkRyb3Bkb3duTW9kdWxlIHt9XG4iXX0=