"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ngxchart_component_1 = require('./ngxchart.component');
var ngxchart_routing_module_1 = require('./ngxchart-routing.module');
var shared_module_1 = require('../shared/shared.module');
var NgxchartModule = (function () {
    function NgxchartModule() {
    }
    NgxchartModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, ngxchart_routing_module_1.NgxchartRoutingModule, shared_module_1.SharedModule],
            declarations: [ngxchart_component_1.NgxchartComponent],
            exports: [ngxchart_component_1.NgxchartComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NgxchartModule);
    return NgxchartModule;
}());
exports.NgxchartModule = NgxchartModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uZ3hjaGFydC9uZ3hjaGFydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCx3Q0FBc0MsMkJBQTJCLENBQUMsQ0FBQTtBQUNsRSw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQVF2RDtJQUFBO0lBQThCLENBQUM7SUFML0I7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLCtDQUFxQixFQUFFLDRCQUFZLENBQUM7WUFDNUQsWUFBWSxFQUFFLENBQUMsc0NBQWlCLENBQUM7WUFDakMsT0FBTyxFQUFFLENBQUMsc0NBQWlCLENBQUM7U0FDN0IsQ0FBQzs7c0JBQUE7SUFDNEIscUJBQUM7QUFBRCxDQUE5QixBQUErQixJQUFBO0FBQWxCLHNCQUFjLGlCQUFJLENBQUEiLCJmaWxlIjoiYXBwL25neGNoYXJ0L25neGNoYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4Y2hhcnRDb21wb25lbnQgfSBmcm9tICcuL25neGNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hjaGFydFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL25neGNoYXJ0LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbi8vIGltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGEvZGF0YS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmd4Y2hhcnRSb3V0aW5nTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3hjaGFydENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ3hjaGFydENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Y2hhcnRNb2R1bGUgeyB9Il19
