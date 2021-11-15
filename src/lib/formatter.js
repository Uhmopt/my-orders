import 'intl';
import 'intl/locale-data/jsonp/en';

export const currency = {
  format: (str = '') => {
    return intlFormatter.format(String(str)?.replace(/[^0-9.-]/g, '') ?? 0);
  },
};
export const intlFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export const percentage = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2,
});
