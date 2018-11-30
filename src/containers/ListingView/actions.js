/*
 *
 * ListingView actions
 *
 */
import * as cons from './constants';

export function defaultAction() {
  return {type: cons.DEFAULT_ACTION};
}

export function one_listing_loaded (product) {
  return {type: cons.ONE_LISTING_LOADED, product}
}

export function fetchListingById (id) {
  return {type: cons.FETCH_LISTING_BY_ID, id}
}
