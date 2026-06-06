import { create } from 'zustand';

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

interface AppState {
  // Navigation
  activeSection: string;
  setActiveSection: (s: string) => void;
  navOpen: boolean;
  toggleNav: () => void;
  closeNav: () => void;

  // Scroll
  scrollProgress: number;
  setScrollProgress: (p: number) => void;
  scrollY: number;
  setScrollY: (y: number) => void;

  // Animation triggers (per-section)
  visibleSections: Set<string>;
  markVisible: (id: string) => void;

  // Stats counter
  statsAnimated: boolean;
  triggerStats: () => void;

  // Contact form
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
  resetForm: () => void;
  formStatus: FormStatus;
  setFormStatus: (s: FormStatus) => void;

  // FAQ
  openFaqIndex: number | null;
  toggleFaq: (i: number) => void;

  // ROI Calculator
  roiInputs: { teamSize: number; hoursPerWeek: number; hourlyCost: number };
  setRoiInput: (field: string, value: number) => void;
}

const initialForm: FormData = { name: '', company: '', email: '', message: '' };

export const useAppStore = create<AppState>((set) => ({
  // Navigation
  activeSection: 'hero',
  setActiveSection: (s) => set({ activeSection: s }),
  navOpen: false,
  toggleNav: () => set((state) => ({ navOpen: !state.navOpen })),
  closeNav: () => set({ navOpen: false }),

  // Scroll
  scrollProgress: 0,
  setScrollProgress: (p) => set({ scrollProgress: p }),
  scrollY: 0,
  setScrollY: (y) => set({ scrollY: y }),

  // Animation triggers
  visibleSections: new Set<string>(),
  markVisible: (id) =>
    set((state) => {
      if (state.visibleSections.has(id)) return state;
      const next = new Set(state.visibleSections);
      next.add(id);
      return { visibleSections: next };
    }),

  // Stats
  statsAnimated: false,
  triggerStats: () => set({ statsAnimated: true }),

  // Contact form
  formData: { ...initialForm },
  updateField: (field, value) =>
    set((state) => {
      const nextState: Partial<AppState> = { formData: { ...state.formData, [field]: value } };
      if (state.formStatus === 'error') {
        nextState.formStatus = 'idle';
      }
      return nextState;
    }),
  resetForm: () => set({ formData: { ...initialForm }, formStatus: 'idle' }),
  formStatus: 'idle',
  setFormStatus: (s) => set({ formStatus: s }),

  // FAQ
  openFaqIndex: null,
  toggleFaq: (i) =>
    set((state) => ({ openFaqIndex: state.openFaqIndex === i ? null : i })),

  // ROI
  roiInputs: { teamSize: 10, hoursPerWeek: 20, hourlyCost: 50 },
  setRoiInput: (field, value) =>
    set((state) => ({ roiInputs: { ...state.roiInputs, [field]: value } })),
}));
