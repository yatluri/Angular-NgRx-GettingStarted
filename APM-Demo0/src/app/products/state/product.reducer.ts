import { Action } from '../models/action';
import { Product } from '../product';
import { AppState } from '@shared/interface/app.state.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends AppState {
  productState: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Array<Product>;
}
const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');
export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);
export function reducer(state = initialState, action: Action): ProductState {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_CODE':
      return {
        ...state,
        showProductCode: action.payload
      };
    default:
      return state;
  }
}
