/*
 *
 * MarketView actions
 *
 */

import * as cons from './constants';

export function defaultAction() {
  return {type: cons.DEFAULT_ACTION};
}

export function loadCategoryProducts (slug) {
  return {type: cons.FETCH_CATEGORY_PRODUCTS, slug}
}
