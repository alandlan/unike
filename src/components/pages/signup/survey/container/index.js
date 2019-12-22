import React from 'react';
import SignupSurveyPresentation from '../presentation';
import { useData } from './hooks';

const SignupSurveyContainer = () => {
  const [data, setData] = useData();

  const onChange = value => {
    setData(value);
  };
  return <SignupSurveyPresentation data={data} onChange={onChange} />;
};

export default SignupSurveyContainer;
