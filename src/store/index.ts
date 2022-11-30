import create from "zustand";

export type StoreType = {
  page: PageType;
  selected: string | null;
  changePage: (page: PageType) => void;
  setSelected: (selected: string | null) => void;
};
type PageType = "entry" | "spin" | "result";

const useStore = create<StoreType>((set) => ({
  page: "entry",
  selected: null,
  changePage: (page: PageType) => {
    set((state) => {
      return { ...state, page };
    });
  },
  setSelected: (selected: string | null) => {
    set((state) => {
      return { ...state, selected };
    });
  },
}));

export default useStore;
