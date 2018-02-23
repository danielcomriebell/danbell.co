import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


export const animation = trigger('slideAnimation',[
      state('small', style({
        opacity: '0',
        visibility:'hidden'
      })),
      state('large', style({
        opacity: '1',
        visibility:'visible'
      })),
      transition('small <=> large', animate('300ms ease-in')),
    ])
