import { trigger, transition } from '@angular/animations';
import { BROWSE_PAGE } from '../app-consts';
import { slideIn } from '../app-animations';

export const browseRouteAnimations =
    trigger('browseRouteAnimations', [
        transition(`${BROWSE_PAGE.raw} => ${BROWSE_PAGE.raw}`, [slideIn])
    ]);