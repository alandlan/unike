import React, { useState } from 'react';
import { HeaderSignup } from '../../../../templates';
import { Container, Form, Content } from 'native-base';
import { Question } from '../../../../templates';

const SignupSurveyPresentation = props => {
  return (
    <Container>
      <HeaderSignup disable={props.disabled} onBack={props.onBack} onForward={props.onForward} />
      <Content>
        <Form>
          {props.data.map(item => (
            <Question key={item.id} item={item} onChange={props.onChange} />
          ))}
        </Form>
      </Content>
    </Container>
  );
};

export default SignupSurveyPresentation;
