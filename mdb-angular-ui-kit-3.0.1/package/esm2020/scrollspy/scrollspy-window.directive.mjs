import { Directive, Inject, Input, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "./scrollspy.service";
export class MdbScrollspyWindowDirective {
    constructor(document, el, renderer, ngZone, scrollSpyService) {
        this.document = document;
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.scrollSpyService = scrollSpyService;
        this.offset = 0;
    }
    get scrollSpyId() {
        return this._scrollSpyId;
    }
    set scrollSpyId(newId) {
        if (newId) {
            this._scrollSpyId = newId;
        }
    }
    isElementInViewport() {
        const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        const elHeight = this.el.nativeElement.offsetHeight;
        const elTop = this.el.nativeElement.offsetTop - this.offset;
        const elBottom = elTop + elHeight;
        return scrollTop >= elTop && scrollTop <= elBottom;
    }
    updateActiveState(scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
        }
        else {
            this.scrollSpyService.removeActiveState(scrollSpyId, id);
        }
    }
    onScroll() {
        this.updateActiveState(this.scrollSpyId, this.id);
    }
    listenToScroll() {
        this.renderer.listen(window, 'scroll', () => {
            this.onScroll();
        });
    }
    ngOnInit() {
        this.id = this.el.nativeElement.id;
        this.ngZone.runOutsideAngular(this.listenToScroll.bind(this));
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.updateActiveState(this.scrollSpyId, this.id);
        }, 0);
    }
}
MdbScrollspyWindowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbScrollspyWindowDirective, deps: [{ token: DOCUMENT }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i1.MdbScrollspyService }], target: i0.ɵɵFactoryTarget.Directive });
MdbScrollspyWindowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: MdbScrollspyWindowDirective, selector: "[mdbScrollspyWindow]", inputs: { scrollSpyId: ["mdbScrollspyWindow", "scrollSpyId"], offset: "offset" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbScrollspyWindowDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[mdbScrollspyWindow]',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i1.MdbScrollspyService }]; }, propDecorators: { scrollSpyId: [{
                type: Input,
                args: ['mdbScrollspyWindow']
            }], offset: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsc3B5LXdpbmRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tZGItYW5ndWxhci11aS1raXQvc2Nyb2xsc3B5L3Njcm9sbHNweS13aW5kb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsTUFBTSxFQUdOLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQU8zQyxNQUFNLE9BQU8sMkJBQTJCO0lBZ0J0QyxZQUM0QixRQUFhLEVBQy9CLEVBQWMsRUFDZCxRQUFtQixFQUNuQixNQUFjLEVBQ2QsZ0JBQXFDO1FBSm5CLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBcUI7UUFQdEMsV0FBTSxHQUFHLENBQUMsQ0FBQztJQVFqQixDQUFDO0lBbkJKLElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQWFELG1CQUFtQjtRQUNqQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUNwRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1RCxNQUFNLFFBQVEsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBRWxDLE9BQU8sU0FBUyxJQUFJLEtBQUssSUFBSSxTQUFTLElBQUksUUFBUSxDQUFDO0lBQ3JELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQixFQUFFLEVBQVU7UUFDL0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7d0hBN0RVLDJCQUEyQixrQkFpQjVCLFFBQVE7NEdBakJQLDJCQUEyQjsyRkFBM0IsMkJBQTJCO2tCQUp2QyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7OzBCQWtCSSxNQUFNOzJCQUFDLFFBQVE7b0pBYmQsV0FBVztzQkFEZCxLQUFLO3VCQUFDLG9CQUFvQjtnQkFXbEIsTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1kYlNjcm9sbHNweVNlcnZpY2UgfSBmcm9tICcuL3Njcm9sbHNweS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW21kYlNjcm9sbHNweVdpbmRvd10nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJTY3JvbGxzcHlXaW5kb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIGlkOiBzdHJpbmc7XG5cbiAgQElucHV0KCdtZGJTY3JvbGxzcHlXaW5kb3cnKVxuICBnZXQgc2Nyb2xsU3B5SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsU3B5SWQ7XG4gIH1cbiAgc2V0IHNjcm9sbFNweUlkKG5ld0lkOiBzdHJpbmcpIHtcbiAgICBpZiAobmV3SWQpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFNweUlkID0gbmV3SWQ7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3Njcm9sbFNweUlkOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgb2Zmc2V0ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHNjcm9sbFNweVNlcnZpY2U6IE1kYlNjcm9sbHNweVNlcnZpY2VcbiAgKSB7fVxuXG4gIGlzRWxlbWVudEluVmlld3BvcnQoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgY29uc3QgZWxIZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IGVsVG9wID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIHRoaXMub2Zmc2V0O1xuICAgIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyBlbEhlaWdodDtcblxuICAgIHJldHVybiBzY3JvbGxUb3AgPj0gZWxUb3AgJiYgc2Nyb2xsVG9wIDw9IGVsQm90dG9tO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQ6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRWxlbWVudEluVmlld3BvcnQoKSkge1xuICAgICAgdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLnVwZGF0ZUFjdGl2ZVN0YXRlKHNjcm9sbFNweUlkLCBpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Nyb2xsU3B5U2VydmljZS5yZW1vdmVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZCwgaWQpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2Nyb2xsKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQWN0aXZlU3RhdGUodGhpcy5zY3JvbGxTcHlJZCwgdGhpcy5pZCk7XG4gIH1cblxuICBsaXN0ZW5Ub1Njcm9sbCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih3aW5kb3csICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2Nyb2xsKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIodGhpcy5saXN0ZW5Ub1Njcm9sbC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlU3RhdGUodGhpcy5zY3JvbGxTcHlJZCwgdGhpcy5pZCk7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==