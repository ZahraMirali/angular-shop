import { BooleanInput } from '@angular/cdk/coercion';
import { AfterContentInit, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { MdbTabComponent } from './tab.component';
import * as i0 from "@angular/core";
export declare class MdbTabChange {
    index: number;
    tab: MdbTabComponent;
}
export declare class MdbTabsComponent implements AfterContentInit, OnDestroy {
    tabs: QueryList<MdbTabComponent>;
    readonly _destroy$: Subject<void>;
    get fill(): boolean;
    set fill(value: boolean);
    private _fill;
    get justified(): boolean;
    set justified(value: boolean);
    private _justified;
    get pills(): boolean;
    set pills(value: boolean);
    private _pills;
    get vertical(): boolean;
    set vertical(value: boolean);
    private _vertical;
    navColumnClass: string;
    contentColumnClass: string;
    get navColClass(): string;
    get contentColClass(): string;
    private _selectedIndex;
    animationState: boolean;
    activeTabChange: EventEmitter<MdbTabChange>;
    constructor();
    onAnimationDone(): void;
    ngAfterContentInit(): void;
    private _runAnimation;
    setActiveTab(index: number): void;
    private _getTabChangeEvent;
    private _getClosestTabIndex;
    ngOnDestroy(): void;
    static ngAcceptInputType_fill: BooleanInput;
    static ngAcceptInputType_justified: BooleanInput;
    static ngAcceptInputType_pills: BooleanInput;
    static ngAcceptInputType_vertical: BooleanInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<MdbTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MdbTabsComponent, "mdb-tabs", never, { "fill": "fill"; "justified": "justified"; "pills": "pills"; "vertical": "vertical"; "navColumnClass": "navColumnClass"; "contentColumnClass": "contentColumnClass"; }, { "activeTabChange": "activeTabChange"; }, ["tabs"], never, false>;
}
