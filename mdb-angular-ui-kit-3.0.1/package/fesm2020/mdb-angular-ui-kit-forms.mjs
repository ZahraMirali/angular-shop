import * as i0 from '@angular/core';
import { Directive, ElementRef, Component, ChangeDetectionStrategy, ViewChild, ContentChild, HostBinding, Optional, Self, Input, HostListener, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i1 from '@angular/cdk/observers';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i1$1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2 from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';

// eslint-disable-next-line @angular-eslint/directive-class-suffix
class MdbAbstractFormControl {
}
MdbAbstractFormControl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbAbstractFormControl, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MdbAbstractFormControl.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: MdbAbstractFormControl, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbAbstractFormControl, decorators: [{
            type: Directive
        }] });

// eslint-disable-next-line @angular-eslint/component-class-suffix
class MdbLabelDirective {
    constructor() { }
}
MdbLabelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbLabelDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MdbLabelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: MdbLabelDirective, selector: "[mdbLabel]", exportAs: ["mdbLabel"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbLabelDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[mdbLabel]',
                    exportAs: 'mdbLabel',
                }]
        }], ctorParameters: function () { return []; } });

class MdbFormControlComponent {
    constructor(_renderer, _contentObserver, _elementRef, _ngZone) {
        this._renderer = _renderer;
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this.outline = true;
        this._destroy$ = new Subject();
        this._notchLeadingLength = 9;
        this._labelMarginLeft = 0;
        this._labelGapPadding = 8;
        this._labelScale = 0.8;
        this._recalculateGapWhenVisible = false;
    }
    get input() {
        return this._formControl.input;
    }
    ngAfterContentInit() {
        if (this._label) {
            this._updateBorderGap();
        }
        else {
            this._renderer.addClass(this.input, 'placeholder-active');
        }
        this._updateLabelActiveState();
        if (this._label) {
            this._contentObserver
                .observe(this._label.nativeElement)
                .pipe(takeUntil(this._destroy$))
                .subscribe(() => {
                this._updateBorderGap();
            });
        }
        this._formControl.stateChanges.pipe(takeUntil(this._destroy$)).subscribe(() => {
            this._updateLabelActiveState();
            if (this._label) {
                this._updateBorderGap();
            }
        });
        this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.pipe(takeUntil(this._destroy$)).subscribe(() => {
                if (this._label && this._recalculateGapWhenVisible) {
                    this._updateBorderGap();
                }
            });
        });
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.unsubscribe();
    }
    _getLabelWidth() {
        return this._label.nativeElement.clientWidth * this._labelScale + this._labelGapPadding;
    }
    _updateBorderGap() {
        // Element is in DOM but is not visible, we need to recalculate the gap when element
        // is displayed. This problem may occur in components such as tabs where content of
        // inactive tabs has display:none styles
        if (this._isHidden()) {
            this._recalculateGapWhenVisible = true;
            return;
        }
        const notchLeadingWidth = `${this._labelMarginLeft + this._notchLeadingLength}px`;
        const notchMiddleWidth = `${this._getLabelWidth()}px`;
        this._notchLeading.nativeElement.style.width = notchLeadingWidth;
        this._notchMiddle.nativeElement.style.width = notchMiddleWidth;
        this._label.nativeElement.style.marginLeft = `${this._labelMarginLeft}px`;
        this._recalculateGapWhenVisible = false;
    }
    _updateLabelActiveState() {
        if (this._isLabelActive()) {
            this._renderer.addClass(this.input, 'active');
        }
        else {
            this._renderer.removeClass(this.input, 'active');
        }
    }
    _isLabelActive() {
        return this._formControl && this._formControl.labelActive;
    }
    _isHidden() {
        const el = this._elementRef.nativeElement;
        return !el.offsetHeight && !el.offsetWidth;
    }
}
MdbFormControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbFormControlComponent, deps: [{ token: i0.Renderer2 }, { token: i1.ContentObserver }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MdbFormControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: MdbFormControlComponent, selector: "mdb-form-control", host: { properties: { "class.form-outline": "this.outline" } }, queries: [{ propertyName: "_formControl", first: true, predicate: MdbAbstractFormControl, descendants: true, static: true }, { propertyName: "_label", first: true, predicate: MdbLabelDirective, descendants: true, read: ElementRef, static: true }], viewQueries: [{ propertyName: "_notchLeading", first: true, predicate: ["notchLeading"], descendants: true, static: true }, { propertyName: "_notchMiddle", first: true, predicate: ["notchMiddle"], descendants: true, static: true }], ngImport: i0, template: "<ng-content></ng-content>\n<div class=\"form-notch\">\n  <div #notchLeading class=\"form-notch-leading\"></div>\n  <div #notchMiddle class=\"form-notch-middle\"></div>\n  <div class=\"form-notch-trailing\"></div>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbFormControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mdb-form-control', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n<div class=\"form-notch\">\n  <div #notchLeading class=\"form-notch-leading\"></div>\n  <div #notchMiddle class=\"form-notch-middle\"></div>\n  <div class=\"form-notch-trailing\"></div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i1.ContentObserver }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { _notchLeading: [{
                type: ViewChild,
                args: ['notchLeading', { static: true }]
            }], _notchMiddle: [{
                type: ViewChild,
                args: ['notchMiddle', { static: true }]
            }], _formControl: [{
                type: ContentChild,
                args: [MdbAbstractFormControl, { static: true }]
            }], _label: [{
                type: ContentChild,
                args: [MdbLabelDirective, { static: true, read: ElementRef }]
            }], outline: [{
                type: HostBinding,
                args: ['class.form-outline']
            }] } });

// eslint-disable-next-line @angular-eslint/component-class-suffix
class MdbInputDirective {
    constructor(_elementRef, _renderer, _ngControl, _autofill) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._ngControl = _ngControl;
        this._autofill = _autofill;
        this.stateChanges = new Subject();
        this._focused = false;
        this._autofilled = false;
        this._color = '';
        this._disabled = false;
        this._readonly = false;
    }
    ngAfterViewInit() {
        this._color = getComputedStyle(this._elementRef.nativeElement).color;
        if (this._elementRef.nativeElement.type === 'date') {
            this._updateTextColorForDateType();
        }
        this._autofill.monitor(this.input).subscribe((event) => {
            this._autofilled = event.isAutofilled;
            this.stateChanges.next();
        });
    }
    get disabled() {
        if (this._ngControl && this._ngControl.disabled !== null) {
            return this._ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get readonly() {
        return this._readonly;
    }
    set readonly(value) {
        if (value) {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'readonly', '');
        }
        else {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'readonly');
        }
        this._readonly = coerceBooleanProperty(value);
    }
    get value() {
        return this._elementRef.nativeElement.value;
    }
    set value(value) {
        if (value !== this.value) {
            this._elementRef.nativeElement.value = value;
            this._value = value;
            this.stateChanges.next();
        }
    }
    _updateTextColorForDateType() {
        const actualColor = getComputedStyle(this._elementRef.nativeElement).color;
        this._color = actualColor !== 'rgba(0, 0, 0, 0)' ? actualColor : this._color;
        const color = this.labelActive ? this._color : `transparent`;
        this._renderer.setStyle(this._elementRef.nativeElement, 'color', color);
    }
    _onFocus() {
        this._focused = true;
        if (this._elementRef.nativeElement.type === 'date') {
            this._updateTextColorForDateType();
        }
        this.stateChanges.next();
    }
    _onBlur() {
        this._focused = false;
        if (this._elementRef.nativeElement.type === 'date') {
            this._updateTextColorForDateType();
        }
        this.stateChanges.next();
    }
    ngDoCheck() {
        const value = this._elementRef.nativeElement.value;
        if (this._currentNativeValue !== value) {
            this._currentNativeValue = value;
            this.stateChanges.next();
        }
    }
    get hasValue() {
        return this._elementRef.nativeElement.value !== '';
    }
    get focused() {
        return this._focused;
    }
    get autofilled() {
        return this._autofilled;
    }
    get input() {
        return this._elementRef.nativeElement;
    }
    get labelActive() {
        return this.focused || this.hasValue || this.autofilled;
    }
    ngOnDestroy() {
        this._autofill.stopMonitoring(this.input);
    }
}
MdbInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbInputDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1$1.NgControl, optional: true, self: true }, { token: i2.AutofillMonitor }], target: i0.ɵɵFactoryTarget.Directive });
MdbInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: MdbInputDirective, selector: "[mdbInput]", inputs: { disabled: "disabled", readonly: "readonly", value: "value" }, host: { listeners: { "focus": "_onFocus()", "blur": "_onBlur()" }, properties: { "disabled": "this.disabled" } }, providers: [{ provide: MdbAbstractFormControl, useExisting: MdbInputDirective }], exportAs: ["mdbInput"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbInputDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[mdbInput]',
                    exportAs: 'mdbInput',
                    providers: [{ provide: MdbAbstractFormControl, useExisting: MdbInputDirective }],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1$1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i2.AutofillMonitor }]; }, propDecorators: { disabled: [{
                type: HostBinding,
                args: ['disabled']
            }, {
                type: Input,
                args: ['disabled']
            }], readonly: [{
                type: Input,
                args: ['readonly']
            }], value: [{
                type: Input
            }], _onFocus: [{
                type: HostListener,
                args: ['focus']
            }], _onBlur: [{
                type: HostListener,
                args: ['blur']
            }] } });

class MdbFormsModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { MdbAbstractFormControl, MdbFormControlComponent, MdbFormsModule, MdbInputDirective, MdbLabelDirective };
//# sourceMappingURL=mdb-angular-ui-kit-forms.mjs.map
