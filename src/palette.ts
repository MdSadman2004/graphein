// ─── GRAPHIENT BRAND PALETTE ─────────────────────────────────────────────
export const P = {
  void:       "#02000D",
  navy:       "#07203F",
  sand:       "#EBDED4",
  clay:       "#D9AA90",
  terracotta: "#A65E46",
  sandMuted:  "#EBDED480",
  clayMuted:  "#D9AA9055",
} as const;

export type PaletteKey = keyof typeof P;
