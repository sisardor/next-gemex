/**
 *
 * Asynchronously loads the component for AdminPage
 *
 */

 import dynamic from 'next/dynamic'
  export default dynamic(() => import('./index'))
