/*
 *
 * MarketView actions
 *
 */

import { DEFAULT_ACTION, FETCH_CATEGORY_PRODUCTS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadCategoryProducts (slug) {
  return {type: FETCH_CATEGORY_PRODUCTS, slug}
}
