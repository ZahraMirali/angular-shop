import { ElementRef, OnInit, Renderer2, NgZone, AfterViewInit } from '@angular/core';
import { MdbScrollspyService } from './scrollspy.service';
import * as i0 from "@angular/core";
export declare class MdbScrollspyElementDirective implements OnInit, AfterViewInit {
    private _elementRef;
    private renderer;
    private ngZone;
    private scrollSpyService;
    private id;
    get host(): HTMLElement;
    container: HTMLElement;
    get scrollSpyId(): string;
    set scrollSpyId(newId: string);
    private _scrollSpyId;
    offset: number;
    constructor(_elementRef: ElementRef, renderer: Renderer2, ngZone: NgZone, scrollSpyService: MdbScrollspyService);
    isElementInViewport(): boolean;
    updateActiveState(scrollSpyId: string, id: string): void;
    onScroll(): void;
    listenToScroll(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private _getClosestEl;
    static ɵfac: i0.ɵɵFactoryDeclaration<MdbScrollspyElementDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MdbScrollspyElementDirective, "[mdbScrollspyElement]", never, { "container": "container"; "scrollSpyId": "mdbScrollspyElement"; "offset": "offset"; }, {}, never, never, false>;
}
