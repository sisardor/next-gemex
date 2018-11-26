/**
 *
 * Asynchronously loads the component for ListingCard
 *
 */

 import dynamic from 'next/dynamic'

 const isServer = typeof window === 'undefined'
// { loading: () => <SectionPlaceholder><Loader /></SectionPlaceholder>, ssr: false, },
// export default dynamic(() => import('./index'))
export default dynamic(() => import('./index'), { loading: () => <p>loading</p>, ssr: isServer })
