import React from 'react';
import { createUseFunction } from './ContextHelper';

describe('ContextHelper', () => {
    test('createUseFunction', () => {
        const mockContext = React.createContext(null);
        mockContext.displayName = 'test';
        const useContext = createUseFunction(mockContext);
        expect(useContext).toBeTruthy();
    });
});
