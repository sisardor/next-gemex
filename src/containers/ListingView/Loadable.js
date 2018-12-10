/**
 *
 * Asynchronously loads the component for ListingView
 *
 */

 import dynamic from 'next/dynamic'
 export default dynamic(() => import('./index'))
