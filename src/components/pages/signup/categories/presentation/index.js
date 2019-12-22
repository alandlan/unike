import React from 'react';
import { Container } from 'native-base';
import { HeaderSignup, CategoryList } from '../../../../templates';

const SignupCategoriesPresentation = props => {
  return (
    <Container>
      <HeaderSignup
        disable={props.disabled}
        onBack={props.onBack}
        onForward={props.onForward}
      />

      <CategoryList
        data={props.data.services.value}
        onChange={props.onChange('services')}
      />
    </Container>
  );
};

export default SignupCategoriesPresentation;
