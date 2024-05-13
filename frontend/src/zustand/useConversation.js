import create from 'zustand';

const useConversation = create((set) => ({
    selectedConversation: null,
    messages: [],

    // Setters to update the state
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    setMessages: (messages) => set({ messages }),

    // Reset function to clear the state
    reset: () => set({ selectedConversation: null, messages: [] }),
}));

export default useConversation;
