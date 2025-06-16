import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface ModalState {
  isOpen: boolean;
  type: string | null;
  data: Record<string, unknown>;
}

interface UiState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  modal: ModalState;
}
const initialState: UiState = {
  theme: 'light',
  sidebarOpen: false,
  modal: {
    isOpen: false,
    type: null,
    data: {},
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },

    setModal: (state, action: PayloadAction<ModalState>) => {
      state.modal = action.payload;
    },
  },
});

export const {
  setTheme,
  toggleSidebar,
  setModal,
} = uiSlice.actions;
export default uiSlice.reducer; 