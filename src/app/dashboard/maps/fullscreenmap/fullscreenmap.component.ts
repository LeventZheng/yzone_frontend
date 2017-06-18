declare var google: any;
import {Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fullscreen-map-cmp',
    templateUrl: 'fullscreenmap.component.html',
    animations: [
        trigger('maps', [
            state('*', style({
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                    }),
                    animate('1s 0s ease-out')
                ])
        ])
    ]
})

export class FullScreenMapsComponent implements OnInit {
    ngOnInit() { }
}
