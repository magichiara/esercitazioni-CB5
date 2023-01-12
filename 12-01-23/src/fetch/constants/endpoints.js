export const ENDPOINTS = {
  BASE: `https://random-data-api.com/api/v2`,
  get ADDRESSES() {
    return `${this.BASE}/addresses`;
  },
  get BANKS() {
    return `${this.BASE}/banks`;
  },
  get BLOOD_TYPES() {
    return `${this.BASE}/blood_types`;
  },
  get CREDIT_CARDS() {
    return `${this.BASE}/credit_cards`;
  },
};
