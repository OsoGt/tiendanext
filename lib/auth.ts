import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  login: async (email: string, password: string) => {
    set({ isLoading: true });
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      user: {
        id: '1',
        email,
        name: 'John Doe',
        role: email.includes('admin') ? 'admin' : 'user',
      },
      isLoading: false,
    });
  },
  logout: () => {
    set({ user: null });
  },
}));