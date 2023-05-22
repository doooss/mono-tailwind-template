import useBoolean from './useBoolean';

describe('useBoolean test', () => {
    it('should be true', () => {
        const [state, { setTrue, setFalse, toggle }] = useBoolean(false);
        expect(state).toBe(false);
    });
});
