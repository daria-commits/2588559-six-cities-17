
import { selectCurrentSort } from './selectors';
import { SortItem } from '../../const';
import sortingReducer from './sortingSlice';
import { changeSorting } from '../action';

const etatInitial: { currentSort: SortItem } = { currentSort: SortItem.Popular };


describe('Réducteur sortingSlice', () => {
  it('doit retourner l\'état initial lorsqu\'une action inconnue est fournie', () => {
    expect(sortingReducer(undefined, { type: 'unknown' })).toEqual(etatInitial);
  });
  it('doit gérer changeSorting', () => {
    const action = changeSorting(SortItem.PriceLow);
    const nouvelEtat = sortingReducer(etatInitial, action);
    expect(nouvelEtat).toEqual({ currentSort: SortItem.PriceLow });
  });
});

describe('Sélecteurs sortingSlice', () => {
  it('doit sélectionner l’option de tri actuelle', () => {
    const etatSimule = { sorting: { currentSort: SortItem.Rating } };
    expect(selectCurrentSort(etatSimule)).toEqual(SortItem.Rating);
  });
});
