import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ViewChild, Input, Output, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

const RANGE_VALUE_ACCESOR = {
    provide: NG_VALUE_ACCESSOR,
    // eslint-disable-next-line no-use-before-define, @typescript-eslint/no-use-before-define
    useExisting: forwardRef(() => MdbRangeComponent),
    multi: true,
};
class MdbRangeComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.min = 0;
        this.max = 100;
        this.rangeValueChange = new EventEmitter();
        this.visibility = false;
        // Control Value Accessor Methods
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get default() {
        return this._default;
    }
    set default(value) {
        this._default = value;
    }
    onchange(event) {
        this.onChange(event.target.value);
    }
    onInput() {
        this.rangeValueChange.emit({ value: this.value });
        this.focusRangeInput();
    }
    ngAfterViewInit() {
        this.thumbPositionUpdate();
    }
    focusRangeInput() {
        this.input.nativeElement.focus();
        this.visibility = true;
    }
    blurRangeInput() {
        this.input.nativeElement.blur();
        this.visibility = false;
    }
    thumbPositionUpdate() {
        const rangeInput = this.input.nativeElement;
        const inputValue = rangeInput.value;
        const minValue = rangeInput.min ? rangeInput.min : 0;
        const maxValue = rangeInput.max ? rangeInput.max : 100;
        const newValue = Number(((inputValue - minValue) * 100) / (maxValue - minValue));
        this.value = inputValue;
        this.thumbStyle = { left: `calc(${newValue}% + (${8 - newValue * 0.15}px))` };
    }
    writeValue(value) {
        this.value = value;
        this._cdRef.markForCheck();
        setTimeout(() => {
            this.thumbPositionUpdate();
        }, 0);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
MdbRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbRangeComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
MdbRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: MdbRangeComponent, selector: "mdb-range", inputs: { id: "id", required: "required", name: "name", value: "value", disabled: "disabled", label: "label", min: "min", max: "max", step: "step", default: "default", defaultRangeCounterClass: "defaultRangeCounterClass" }, outputs: { rangeValueChange: "rangeValueChange" }, host: { listeners: { "change": "onchange($event)", "input": "onInput()" } }, providers: [RANGE_VALUE_ACCESOR], viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true }, { propertyName: "thumb", first: true, predicate: ["thumb"], descendants: true }, { propertyName: "thumbValue", first: true, predicate: ["thumbValue"], descendants: true }], ngImport: i0, template: "<label for=\"id\" class=\"form-label\">{{ label }}</label>\n<div class=\"range\">\n  <input\n    #input\n    [name]=\"name\"\n    type=\"range\"\n    [disabled]=\"disabled\"\n    [id]=\"id\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [step]=\"step\"\n    [value]=\"value\"\n    class=\"form-range\"\n    min=\"0\"\n    max=\"5\"\n    [id]=\"id\"\n    (input)=\"thumbPositionUpdate()\"\n    (blur)=\"blurRangeInput()\"\n    (mousedown)=\"focusRangeInput()\"\n    (mouseup)=\"blurRangeInput()\"\n    (touchstart)=\"focusRangeInput()\"\n    (touchend)=\"blurRangeInput()\"\n  />\n  <span #thumb class=\"thumb\" [ngStyle]=\"thumbStyle\" [ngClass]=\"{ 'thumb-active': this.visibility }\">\n    <span #thumbValue class=\"thumb-value\">{{ value }}</span>\n  </span>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mdb-range', changeDetection: ChangeDetectionStrategy.OnPush, providers: [RANGE_VALUE_ACCESOR], template: "<label for=\"id\" class=\"form-label\">{{ label }}</label>\n<div class=\"range\">\n  <input\n    #input\n    [name]=\"name\"\n    type=\"range\"\n    [disabled]=\"disabled\"\n    [id]=\"id\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [step]=\"step\"\n    [value]=\"value\"\n    class=\"form-range\"\n    min=\"0\"\n    max=\"5\"\n    [id]=\"id\"\n    (input)=\"thumbPositionUpdate()\"\n    (blur)=\"blurRangeInput()\"\n    (mousedown)=\"focusRangeInput()\"\n    (mouseup)=\"blurRangeInput()\"\n    (touchstart)=\"focusRangeInput()\"\n    (touchend)=\"blurRangeInput()\"\n  />\n  <span #thumb class=\"thumb\" [ngStyle]=\"thumbStyle\" [ngClass]=\"{ 'thumb-active': this.visibility }\">\n    <span #thumbValue class=\"thumb-value\">{{ value }}</span>\n  </span>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { input: [{
                type: ViewChild,
                args: ['input']
            }], thumb: [{
                type: ViewChild,
                args: ['thumb']
            }], thumbValue: [{
                type: ViewChild,
                args: ['thumbValue']
            }], id: [{
                type: Input
            }], required: [{
                type: Input
            }], name: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], default: [{
                type: Input
            }], defaultRangeCounterClass: [{
                type: Input
            }], rangeValueChange: [{
                type: Output
            }], onchange: [{
                type: HostListener,
                args: ['change', ['$event']]
            }], onInput: [{
                type: HostListener,
                args: ['input']
            }] } });

class MdbRangeModule {
}
MdbRangeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbRangeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdbRangeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: MdbRangeModule, declarations: [MdbRangeComponent], imports: [CommonModule, FormsModule], exports: [MdbRangeComponent] });
MdbRangeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbRangeModule, imports: [CommonModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdbRangeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [MdbRangeComponent],
                    exports: [MdbRangeComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MdbRangeComponent, MdbRangeModule };
//# sourceMappingURL=mdb-angular-ui-kit-range.mjs.map
