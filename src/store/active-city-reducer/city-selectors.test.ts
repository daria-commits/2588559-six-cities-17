import { getActiveCity } from './selectors';


describe('getActiveCity selector', () => {
  it('should return the active city from the state', () => {
    const mockState = {

      city: {
        activeCity: 'Paris',
      },
    };

    const result = getActiveCity(mockState);

    expect(result).toBe('Paris');
  });
});

