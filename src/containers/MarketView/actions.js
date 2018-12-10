/*
 *
 * MarketView actions
 *
 */

import * as cons from './constants';

export function defaultAction() {
  return {type: cons.DEFAULT_ACTION};
}

export function fetchCategoryProducts(path) {
  return {type:cons.FETCH_CATEGORY_PRODUCTS, path}
}

export function loadCategoryProducts (products) {
  return {type: cons.LOADED_CATEGORY_PRODUCTS, products}
}
export function loadBreadcrumbs (breadcrumbs) {
  return {type: cons.LOADED_BREADCRUMBS, breadcrumbs}
}
