import { useState } from 'react';
import data from './data';

const useData = () => {
  const [value, setValue] = useState(data);
  const set = item => {
    setValue(
      value.map(v => {
        if (v.id === item.id) {
          v.value = item.value;
        }
        return v;
      })
    );
  };
  return [value, set];
};

export { useData };
