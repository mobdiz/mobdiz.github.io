import {BrowserStorage} from "../../../shared/model";

import {trianglesDomain} from "./domain";
import type {MainDot} from "./types";

export const $items = trianglesDomain.createStore<MainDot[]>([]);

BrowserStorage.local.attachPersist($items, 'main-dots')
