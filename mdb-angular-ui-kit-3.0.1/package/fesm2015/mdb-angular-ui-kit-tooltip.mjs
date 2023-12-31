import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, EventEmitter, Directive, Output, NgModule } from '@angular/core';
import * as i1$1 from '@angular/cdk/overlay';
import { OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject, fromEvent } from 'rxjs';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { takeUntil, first } from 'rxjs/operators';

class MdbTooltipComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this._hidden = new Subject();
        this.animationState = 'hidden';
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
MdbTooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbTooltipComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
MdbTooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: MdbTooltipComponent, selector: "mdb-tooltip", inputs: { title: "title", html: "html", animation: "animation" }, ngImport: i0, template: "<div\n  *ngIf=\"html\"\n  [@fade]=\"animationState\"\n  (@fade.done)=\"onAnimationEnd($event)\"\n  [@.disabled]=\"!animation\"\n  [innerHTML]=\"title\"\n  class=\"tooltip-inner\"\n></div>\n<div\n  *ngIf=\"!html\"\n  [@fade]=\"animationState\"\n  (@fade.done)=\"onAnimationEnd($event)\"\n  [@.disabled]=\"!animation\"\n  class=\"tooltip-inner\"\n>\n  {{ title }}\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], animations: [
        trigger('fade', [
            state('visible', style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('visible => hidden', animate('150ms linear')),
            transition(':enter', animate('150ms linear')),
        ]),
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbTooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mdb-tooltip', changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                        trigger('fade', [
                            state('visible', style({ opacity: 1 })),
                            state('hidden', style({ opacity: 0 })),
                            transition('visible => hidden', animate('150ms linear')),
                            transition(':enter', animate('150ms linear')),
                        ]),
                    ], template: "<div\n  *ngIf=\"html\"\n  [@fade]=\"animationState\"\n  (@fade.done)=\"onAnimationEnd($event)\"\n  [@.disabled]=\"!animation\"\n  [innerHTML]=\"title\"\n  class=\"tooltip-inner\"\n></div>\n<div\n  *ngIf=\"!html\"\n  [@fade]=\"animationState\"\n  (@fade.done)=\"onAnimationEnd($event)\"\n  [@.disabled]=\"!animation\"\n  class=\"tooltip-inner\"\n>\n  {{ title }}\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { title: [{
                type: Input
            }], html: [{
                type: Input
            }], animation: [{
                type: Input
            }] } });

// eslint-disable-next-line @angular-eslint/component-class-suffix
class MdbTooltipDirective {
    constructor(_overlay, _overlayPositionBuilder, _elementRef) {
        this._overlay = _overlay;
        this._overlayPositionBuilder = _overlayPositionBuilder;
        this._elementRef = _elementRef;
        this.mdbTooltip = '';
        this.tooltipDisabled = false;
        this.placement = 'top';
        this.html = false;
        this.animation = true;
        this.trigger = 'hover focus';
        this.delayShow = 0;
        this.delayHide = 0;
        this.offset = 4;
        this.tooltipShow = new EventEmitter();
        this.tooltipShown = new EventEmitter();
        this.tooltipHide = new EventEmitter();
        this.tooltipHidden = new EventEmitter();
        this._open = false;
        this._showTimeout = 0;
        this._hideTimeout = 0;
        this._destroy$ = new Subject();
    }
    ngOnInit() {
        if (this.tooltipDisabled || this.mdbTooltip === '') {
            return;
        }
        this._bindTriggerEvents();
    }
    ngOnDestroy() {
        if (this._open || this._showTimeout) {
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
            .withPositions(this._getPosition());
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
                position = [positionLeft, positionRight];
                break;
            case 'right':
                position = [positionRight, positionLeft];
                break;
            default:
                break;
        }
        return position;
    }
    show() {
        if (this._hideTimeout || this._open) {
            this._overlayRef.detach();
            clearTimeout(this._hideTimeout);
            this._hideTimeout = null;
        }
        this._createOverlay();
        this._showTimeout = setTimeout(() => {
            const tooltipPortal = new ComponentPortal(MdbTooltipComponent);
            this.tooltipShow.emit(this);
            this._open = true;
            this._tooltipRef = this._overlayRef.attach(tooltipPortal);
            this._tooltipRef.instance.title = this.mdbTooltip;
            this._tooltipRef.instance.html = this.html;
            this._tooltipRef.instance.animation = this.animation;
            this._tooltipRef.instance.animationState = 'visible';
            this._tooltipRef.instance.markForCheck();
            this.tooltipShown.emit(this);
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
            this.tooltipHide.emit(this);
            if (!this._tooltipRef) {
                this._overlayRef.detach();
                this._open = false;
                this.tooltipHidden.emit(this);
            }
            else {
                this._tooltipRef.instance._hidden.pipe(first()).subscribe(() => {
                    this._overlayRef.detach();
                    this._open = false;
                    this.tooltipHidden.emit(this);
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
MdbTooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbTooltipDirective, deps: [{ token: i1$1.Overlay }, { token: i1$1.OverlayPositionBuilder }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
MdbTooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: MdbTooltipDirective, selector: "[mdbTooltip]", inputs: { mdbTooltip: "mdbTooltip", tooltipDisabled: "tooltipDisabled", placement: "placement", html: "html", animation: "animation", trigger: "trigger", delayShow: "delayShow", delayHide: "delayHide", offset: "offset" }, outputs: { tooltipShow: "tooltipShow", tooltipShown: "tooltipShown", tooltipHide: "tooltipHide", tooltipHidden: "tooltipHidden" }, exportAs: ["mdbTooltip"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[mdbTooltip]',
                    exportAs: 'mdbTooltip',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Overlay }, { type: i1$1.OverlayPositionBuilder }, { type: i0.ElementRef }]; }, propDecorators: { mdbTooltip: [{
                type: Input
            }], tooltipDisabled: [{
                type: Input
            }], placement: [{
                type: Input
            }], html: [{
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
            }], tooltipShow: [{
                type: Output
            }], tooltipShown: [{
                type: Output
            }], tooltipHide: [{
                type: Output
            }], tooltipHidden: [{
                type: Output
            }] } });

class MdbTooltipModule {
}
MdbTooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbTooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdbTooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: MdbTooltipModule, declarations: [MdbTooltipDirective, MdbTooltipComponent], imports: [CommonModule, OverlayModule], exports: [MdbTooltipDirective, MdbTooltipComponent] });
MdbTooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbTooltipModule, imports: [CommonModule, OverlayModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbTooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule],
                    declarations: [MdbTooltipDirective, MdbTooltipComponent],
                    exports: [MdbTooltipDirective, MdbTooltipComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MdbTooltipComponent, MdbTooltipDirective, MdbTooltipModule };
//# sourceMappingURL=mdb-angular-ui-kit-tooltip.mjs.map
