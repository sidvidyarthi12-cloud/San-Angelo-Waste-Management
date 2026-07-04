import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported, logEvent, type Analytics } from 'firebase/analytics'
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCznnRWP1qXeyrMnP9TMhD2hPk2WQRVuXI',
  authDomain: 'san-angelo-waste-management.firebaseapp.com',
  projectId: 'san-angelo-waste-management',
  storageBucket: 'san-angelo-waste-management.firebasestorage.app',
  messagingSenderId: '597655578902',
  appId: '1:597655578902:web:01c2123ff18d85de67c837',
  measurementId: 'G-9QG8C9T4E0',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

let analytics: Analytics | null = null
// Analytics only works in browsers that support it (not in SSR/some privacy modes)
isSupported()
  .then((supported) => {
    if (supported) analytics = getAnalytics(app)
  })
  .catch(() => {
    /* analytics unavailable — never block the app for it */
  })

export function trackEvent(name: string, params?: Record<string, string>) {
  try {
    if (analytics) logEvent(analytics, name, params)
  } catch {
    /* tracking must never break the UI */
  }
}

export interface QuoteRequest {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export async function submitQuoteRequest(quote: QuoteRequest): Promise<void> {
  await addDoc(collection(db, 'quoteRequests'), {
    ...quote,
    createdAt: serverTimestamp(),
    source: 'website',
  })
  trackEvent('quote_request_submitted', { service: quote.service })
}
