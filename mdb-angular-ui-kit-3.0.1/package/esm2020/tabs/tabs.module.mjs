import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbTabComponent } from './tab.component';
import { MdbTabsComponent } from './tabs.component';
import { PortalModule } from '@angular/cdk/portal';
import { MdbTabContentDirective } from './tab-content.directive';
import { MdbTabPortalOutlet } from './tab-outlet.directive';
import { MdbTabTitleDirective } from './tab-title.directive';
import * as i0 from "@angular/core";
export class MdbTabsModule {
}
MdbTabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbTabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdbTabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: MdbTabsModule, declarations: [MdbTabComponent,
        MdbTabContentDirective,
        MdbTabTitleDirective,
        MdbTabPortalOutlet,
        MdbTabsComponent], imports: [CommonModule, PortalModule], exports: [MdbTabComponent,
        MdbTabContentDirective,
        MdbTabTitleDirective,
        MdbTabPortalOutlet,
        MdbTabsComponent] });
MdbTabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbTabsModule, imports: [CommonModule, PortalModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbTabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MdbTabComponent,
                        MdbTabContentDirective,
                        MdbTabTitleDirective,
                        MdbTabPortalOutlet,
                        MdbTabsComponent,
                    ],
                    imports: [CommonModule, PortalModule],
                    exports: [
                        MdbTabComponent,
                        MdbTabContentDirective,
                        MdbTabTitleDirective,
                        MdbTabPortalOutlet,
                        MdbTabsComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tZGItYW5ndWxhci11aS1raXQvdGFicy90YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQW1CN0QsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxpQkFmdEIsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGdCQUFnQixhQUVSLFlBQVksRUFBRSxZQUFZLGFBRWxDLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixnQkFBZ0I7MkdBR1AsYUFBYSxZQVRkLFlBQVksRUFBRSxZQUFZOzJGQVN6QixhQUFhO2tCQWpCekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZUFBZTt3QkFDZixzQkFBc0I7d0JBQ3RCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ3JDLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLGdCQUFnQjtxQkFDakI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1kYlRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZGJUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE1kYlRhYkNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJUYWJQb3J0YWxPdXRsZXQgfSBmcm9tICcuL3RhYi1vdXRsZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1kYlRhYlRpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItdGl0bGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWRiVGFiQ29tcG9uZW50LFxuICAgIE1kYlRhYkNvbnRlbnREaXJlY3RpdmUsXG4gICAgTWRiVGFiVGl0bGVEaXJlY3RpdmUsXG4gICAgTWRiVGFiUG9ydGFsT3V0bGV0LFxuICAgIE1kYlRhYnNDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBvcnRhbE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBNZGJUYWJDb21wb25lbnQsXG4gICAgTWRiVGFiQ29udGVudERpcmVjdGl2ZSxcbiAgICBNZGJUYWJUaXRsZURpcmVjdGl2ZSxcbiAgICBNZGJUYWJQb3J0YWxPdXRsZXQsXG4gICAgTWRiVGFic0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFic01vZHVsZSB7fVxuIl19