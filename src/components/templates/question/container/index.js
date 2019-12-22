// flow
import React from 'react';
import QuestionPresentation from '../presentation';
import type { Props } from '../types';

const QuestionContainer = (props: Props) => {
  const onChange = value => {
    console.log('ONCHANGE', value);
    props.onChange(value);
  };

  return <QuestionPresentation {...props} onChange={onChange} />;
};

export default QuestionContainer;
