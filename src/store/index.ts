import create from "zustand";

export type StoreType = {
  page: PageType;
  changePage: (page: PageType) => void;
};
type PageType = "entry" | "spin" | "result";

const useStore = create<StoreType>((set) => ({
  page: "entry",
  changePage: (page: PageType) => {
    set((state) => {
      console.log({ page, st: state.page });
      return { ...state, page };
    });
  },
}));

export default useStore;
