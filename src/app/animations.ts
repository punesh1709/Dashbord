import { trigger, state, style, transition, animate } from '@angular/animations';

export const menuAnimations = [
  trigger('menuState', [
    state('void', style({ opacity: 0, transform: 'translateY(-10%)' })),
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-10%)' }),
      animate('300ms', style({ opacity: 1, transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
      style({ opacity: 1, transform: 'translateY(0%)' }),
      animate('300ms', style({ opacity: 0, transform: 'translateY(-10%)' }))
    ])
  ])
];
