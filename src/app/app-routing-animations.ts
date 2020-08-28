import { slideIn, slideOut } from './app-animations';
import { trigger, transition } from '@angular/animations';
import { MAIN_PAGE } from './app-consts';

export const routeAnimations =
    trigger('routeAnimations', [
        transition(`${MAIN_PAGE.main} => ${MAIN_PAGE.plan}`, [slideIn]),
        transition(`${MAIN_PAGE.plan} => ${MAIN_PAGE.main}`, [slideOut])
    ]);