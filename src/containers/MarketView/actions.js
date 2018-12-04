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
  console.log('fetchCategoryProducts');
  return {type:cons.FETCH_CATEGORY_PRODUCTS, path}
}

export function loadCategoryProducts (products) {
  return {type: cons.LOADED_CATEGORY_PRODUCTS, products}
}
