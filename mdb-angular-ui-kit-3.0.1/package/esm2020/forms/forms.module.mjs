import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdbFormControlComponent } from './form-control.component';
import { MdbInputDirective } from './input.directive';
import { MdbLabelDirective } from './label.directive';
import * as i0 from "@angular/core";
export class MdbFormsModule {
}
MdbFormsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdbFormsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: MdbFormsModule, declarations: [MdbFormControlComponent, MdbInputDirective, MdbLabelDirective], imports: [CommonModule, FormsModule], exports: [MdbFormControlComponent, MdbInputDirective, MdbLabelDirective] });
MdbFormsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbFormsModule, imports: [CommonModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbFormsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MdbFormControlComponent, MdbInputDirective, MdbLabelDirective],
                    exports: [MdbFormControlComponent, MdbInputDirective, MdbLabelDirective],
                    imports: [CommonModule, FormsModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWRiLWFuZ3VsYXItdWkta2l0L2Zvcm1zL2Zvcm1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBT3RELE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBSlYsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLGFBRWxFLFlBQVksRUFBRSxXQUFXLGFBRHpCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQjs0R0FHNUQsY0FBYyxZQUZmLFlBQVksRUFBRSxXQUFXOzJGQUV4QixjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO29CQUM3RSxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztvQkFDeEUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztpQkFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNZGJGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZGJJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1kYkxhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9sYWJlbC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNZGJGb3JtQ29udHJvbENvbXBvbmVudCwgTWRiSW5wdXREaXJlY3RpdmUsIE1kYkxhYmVsRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW01kYkZvcm1Db250cm9sQ29tcG9uZW50LCBNZGJJbnB1dERpcmVjdGl2ZSwgTWRiTGFiZWxEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1kYkZvcm1zTW9kdWxlIHt9XG4iXX0=