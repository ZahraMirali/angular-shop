import * as i0 from '@angular/core';
import { TemplateRef, Component, ChangeDetectionStrategy, Input, EventEmitter, Directive, Output, NgModule } from '@angular/core';
import * as i1$1 from '@angular/cdk/overlay';
import { OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject, fromEvent } from 'rxjs';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { takeUntil, first } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

class MdbPopoverComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this._hidden = new Subject();
        this.animationState = 'hidden';
    }
    get isContentTemplate() {
        return this.content instanceof TemplateRef;
    }
    markForCheck() {
        this._cdRef.markForCheck();
    }
    onAnimationEnd(event) {
        if (event.toState === 'hidden') {
            this._hidden.next();
        }
    }
}
MdbPopoverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbPopoverComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
MdbPopoverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: MdbPopoverComponent, selector: "mdb-popover", inputs: { title: "title", content: "content", animation: "animation" }, ngImport: i0, template: "<div\n  class=\"popover\"\n  [@fade]=\"animationState\"\n  (@fade.done)=\"onAnimationEnd($event)\"\n  [@.disabled]=\"!animation\"\n>\n  <h3 *ngIf=\"title\" class=\"popover-header\">\n    {{ title }}\n  </h3>\n  <div *ngIf=\"isContentTemplate\" class=\"popover-body\">\n    <ng-container [ngTemplateOutlet]=\"$any(content)\"></ng-container>\n  </div>\n  <div *ngIf=\"!isContentTemplate\" class=\"popover-body\">\n    {{ content }}\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], animations: [
        trigger('fade', [
            state('visible', style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('visible <=> hidden', animate('150ms linear')),
            transition(':enter', animate('150ms linear')),
        ]),
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbPopoverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mdb-popover', changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                        trigger('fade', [
                            state('visible', style({ opacity: 1 })),
                            state('hidden', style({ opacity: 0 })),
                            transition('visible <=> hidden', animate('150ms linear')),
                            transition(':enter', animate('150ms linear')),
                        ]),
                    ], template: "<div\n  class=\"popover\"\n  [@fade]=\"animationState\"\n  (@fade.done)=\"onAnimationEnd($event)\"\n  [@.disabled]=\"!animation\"\n>\n  <h3 *ngIf=\"title\" class=\"popover-header\">\n    {{ title }}\n  </h3>\n  <div *ngIf=\"isContentTemplate\" class=\"popover-body\">\n    <ng-container [ngTemplateOutlet]=\"$any(content)\"></ng-container>\n  </div>\n  <div *ngIf=\"!isContentTemplate\" class=\"popover-body\">\n    {{ content }}\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { title: [{
                type: Input
            }], content: [{
                type: Input
            }], animation: [{
                type: Input
            }] } });

// eslint-disable-next-line @angular-eslint/component-class-suffix
class MdbPopoverDirective {
    constructor(_overlay, _overlayPositionBuilder, _elementRef) {
        this._overlay = _overlay;
        this._overlayPositionBuilder = _overlayPositionBuilder;
        this._elementRef = _elementRef;
        this.mdbPopover = '';
        this.mdbPopoverTitle = '';
        this._popoverDisabled = false;
        this.placement = 'top';
        this._animation = false;
        this.trigger = 'click';
        this.delayShow = 0;
        this.delayHide = 0;
        this.offset = 4;
        this.popoverShow = new EventEmitter();
        this.popoverShown = new EventEmitter();
        this.popoverHide = new EventEmitter();
        this.popoverHidden = new EventEmitter();
        this._open = false;
        this._showTimeout = 0;
        this._hideTimeout = 0;
        this._destroy$ = new Subject();
    }
    get popoverDisabled() {
        return this._popoverDisabled;
    }
    set popoverDisabled(value) {
        this._popoverDisabled = coerceBooleanProperty(value);
    }
    get animation() {
        return this._animation;
    }
    set animation(value) {
        this._animation = coerceBooleanProperty(value);
    }
    ngOnInit() {
        if (this.popoverDisabled || (this.mdbPopover === '' && this.mdbPopoverTitle === '')) {
            return;
        }
        this._bindTriggerEvents();
    }
    ngOnDestroy() {
        if (this._open) {
            this.hide();
        }
        this._destroy$.next();
        this._destroy$.complete();
    }
    _bindTriggerEvents() {
        const triggers = this.trigger.split(' ');
        triggers.forEach((trigger) => {
            if (trigger === 'click') {
                fromEvent(this._elementRef.nativeElement, trigger)
                    .pipe(takeUntil(this._destroy$))
                    .subscribe(() => this.toggle());
            }
            else if (trigger !== 'manual') {
                const evIn = trigger === 'hover' ? 'mouseenter' : 'focusin';
                const evOut = trigger === 'hover' ? 'mouseleave' : 'focusout';
                fromEvent(this._elementRef.nativeElement, evIn)
                    .pipe(takeUntil(this._destroy$))
                    .subscribe(() => this.show());
                fromEvent(this._elementRef.nativeElement, evOut)
                    .pipe(takeUntil(this._destroy$))
                    .subscribe(() => this.hide());
            }
        });
    }
    _createOverlayConfig() {
        const positionStrategy = this._overlayPositionBuilder
            .flexibleConnectedTo(this._elementRef)
            .withPositions(this._getPosition())
            .withPush(false);
        const overlayConfig = new OverlayConfig({
            hasBackdrop: false,
            scrollStrategy: this._overlay.scrollStrategies.reposition(),
            positionStrategy,
        });
        return overlayConfig;
    }
    _createOverlay() {
        this._overlayRef = this._overlay.create(this._createOverlayConfig());
    }
    _getPosition() {
        let position;
        const positionTop = {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom',
            offsetY: -this.offset,
        };
        const positionBottom = {
            originX: 'center',
            originY: 'bottom',
            overlayX: 'center',
            overlayY: 'top',
            offsetY: this.offset,
        };
        const positionRight = {
            originX: 'end',
            originY: 'center',
            overlayX: 'start',
            overlayY: 'center',
            offsetX: this.offset,
        };
        const positionLeft = {
            originX: 'start',
            originY: 'center',
            overlayX: 'end',
            overlayY: 'center',
            offsetX: -this.offset,
        };
        switch (this.placement) {
            case 'top':
                position = [positionTop, positionBottom];
                break;
            case 'bottom':
                position = [positionBottom, positionTop];
                break;
            case 'left':
                position = [positionLeft, positionRight, positionTop, positionBottom];
                break;
            case 'right':
                position = [positionRight, positionLeft, positionTop, positionBottom];
                break;
            default:
                break;
        }
        return position;
    }
    show() {
        if (this._hideTimeout) {
            this._overlayRef.detach();
            clearTimeout(this._hideTimeout);
            this._hideTimeout = null;
        }
        this._createOverlay();
        if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
            this._hideTimeout = null;
        }
        this._showTimeout = setTimeout(() => {
            const tooltipPortal = new ComponentPortal(MdbPopoverComponent);
            this.popoverShow.emit(this);
            this._open = true;
            this._tooltipRef = this._overlayRef.attach(tooltipPortal);
            this._tooltipRef.instance.content = this.template || this.mdbPopover;
            this._tooltipRef.instance.title = this.mdbPopoverTitle;
            this._tooltipRef.instance.animation = this.animation;
            this._tooltipRef.instance.animationState = 'visible';
            this._tooltipRef.instance.markForCheck();
            this.popoverShown.emit(this);
        }, this.delayShow);
    }
    hide() {
        if (this._showTimeout) {
            clearTimeout(this._showTimeout);
            this._showTimeout = null;
        }
        else {
            return;
        }
        this._hideTimeout = setTimeout(() => {
            this.popoverHide.emit(this);
            if (!this._tooltipRef) {
                this._overlayRef.detach();
                this._open = false;
                this.popoverHidden.emit(this);
            }
            else {
                this._tooltipRef.instance._hidden.pipe(first()).subscribe(() => {
                    this._overlayRef.detach();
                    this._open = false;
                    this.popoverHidden.emit(this);
                });
                this._tooltipRef.instance.animationState = 'hidden';
                this._tooltipRef.instance.markForCheck();
            }
        }, this.delayHide);
    }
    toggle() {
        if (this._open) {
            this.hide();
        }
        else {
            this.show();
        }
    }
}
MdbPopoverDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbPopoverDirective, deps: [{ token: i1$1.Overlay }, { token: i1$1.OverlayPositionBuilder }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
MdbPopoverDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: MdbPopoverDirective, selector: "[mdbPopover]", inputs: { mdbPopover: "mdbPopover", mdbPopoverTitle: "mdbPopoverTitle", popoverDisabled: "popoverDisabled", placement: "placement", template: "template", animation: "animation", trigger: "trigger", delayShow: "delayShow", delayHide: "delayHide", offset: "offset" }, outputs: { popoverShow: "popoverShow", popoverShown: "popoverShown", popoverHide: "popoverHide", popoverHidden: "popoverHidden" }, exportAs: ["mdbPopover"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbPopoverDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[mdbPopover]',
                    exportAs: 'mdbPopover',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Overlay }, { type: i1$1.OverlayPositionBuilder }, { type: i0.ElementRef }]; }, propDecorators: { mdbPopover: [{
                type: Input
            }], mdbPopoverTitle: [{
                type: Input
            }], popoverDisabled: [{
                type: Input
            }], placement: [{
                type: Input
            }], template: [{
                type: Input
            }], animation: [{
                type: Input
            }], trigger: [{
                type: Input
            }], delayShow: [{
                type: Input
            }], delayHide: [{
                type: Input
            }], offset: [{
                type: Input
            }], popoverShow: [{
                type: Output
            }], popoverShown: [{
                type: Output
            }], popoverHide: [{
                type: Output
            }], popoverHidden: [{
                type: Output
            }] } });

class MdbPopoverModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { MdbPopoverComponent, MdbPopoverDirective, MdbPopoverModule };
//# sourceMappingURL=mdb-angular-ui-kit-popover.mjs.map
