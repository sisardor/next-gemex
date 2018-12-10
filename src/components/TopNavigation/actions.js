/*
 *
 * ListingView actions
 *
 */
import * as cons from './constants';

export function defaultAction() {
  return {type: cons.DEFAULT_ACTION};
}

export function categoriesLoaded (categories) {
  return {type: cons.CATEGORIES_LOADED, categories}
}

export function fetchCategories() {
  return {type: cons.FETCH_CATEGORIES}
}
