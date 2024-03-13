import { create } from "zustand";

const loadingStore = (set) => ({
    isLoading: false,
    setLoadingStore: (value) =>
        set(() => ({
            isLoading: value,
        })),
    clearLoadingStore: () =>
        set({
            isLoading: false,
        }),
});

const useLoadingStore = create(loadingStore);

export { useLoadingStore };
