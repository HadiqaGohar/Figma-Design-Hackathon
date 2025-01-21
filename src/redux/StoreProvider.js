'use client'; // Marks this as a Client Component

import { store } from './store';
import { Provider } from 'react-redux';

export function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
