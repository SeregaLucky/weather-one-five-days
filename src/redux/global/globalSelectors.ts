import { AppStateType } from '../rootReducer';

const isLoading = (state: AppStateType) => state.global.loading;

export default { isLoading };
