import { group, query, style, animate, animateChild } from '@angular/animations';

const slideDuration = '0.35s';

export const slideIn = group([
    query(
        ':enter',
        [
            style({
                transform: 'translateX(150%)'
            }),
            animate(
                `${slideDuration} ease`,
                style({ transform: 'translateX(0)' })
            ),
            animateChild()
        ],
        { optional: true }
    ),
    query(
        ':leave',
        [animate(`${slideDuration}`, style({ transform: 'translateX(-150%)' })), animateChild()],
        { optional: true }
    )
]);

export const slideOut = group([
    query(
        ':enter',
        [
            style({
                transform: 'translateX(-150%)'
            }),
            animate(
                `${slideDuration} ease`,
                style({ transform: 'translateX(0)' })
            ),
            animateChild()
        ],
        { optional: true }
    ),
    query(
        ':leave',
        [animate(`${slideDuration}`, style({ transform: 'translateX(150%)' })), animateChild()],
        { optional: true }
    )
]);