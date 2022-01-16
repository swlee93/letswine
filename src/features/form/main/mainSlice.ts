import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Content {
  key: number;
  title: string;
  description: string;
  image_url?: string;
  embedded_url?: string;
}

export interface MainSliceState {
  main_image_url: string;
  contents: Array<Content>;
}

const initialState = {
  main_image_url: "",
  contents: [
    {
      key: 0,
      title: "",
      description: "",
    },
    {
      key: 1,
      title: "",
      description: "",
    },
    {
      key: 2,
      title: "",
      description: "",
    },
  ],
} as MainSliceState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    clear(state) {
      state = initialState;
    },
    setMainImageUrl(state, action) {
      state.main_image_url = action.payload;
    },
    addContent(state, action: PayloadAction<Content>) {
      state.contents.push(action.payload);
    },
    setContentTitle(state, action) {
      const { key, title } = action.payload;

      state.contents[key].title = title;
    },
    setContentDescription(state, action) {
      const { key, description } = action.payload;

      state.contents[key].description = description;
    },
    setContentImageUrl(state, action) {
      const { key, imageUrl } = action.payload;

      state.contents[key].image_url = imageUrl;
    },
    setContentEmbeddedUrl(state, action) {
      const { key, embeddedUrl } = action.payload;

      state.contents[key].embedded_url = embeddedUrl;
    },
    removeContent(state, action) {
      state.contents = [...state.contents].filter(
        (content, idx) => idx !== action.payload
      );
    },
  },
});

export const {
  setMainImageUrl,
  addContent,
  removeContent,
  setContentTitle,
  setContentDescription,
  setContentImageUrl,
  setContentEmbeddedUrl,
} = mainSlice.actions;

export default mainSlice.reducer;
