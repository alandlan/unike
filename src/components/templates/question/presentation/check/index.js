import React, { useCallback } from 'react';
import { getLabel } from './utils';
import { List, ListItem, Left, Right, Switch, Text } from 'native-base';

const QuestionCheck = props => {
  const onChange = useCallback(value => {
    props.onChange({
      id: props.item.id,
      value
    });
  });
  return (
    <List>
      <ListItem itemHeader first>
        <Text>{props.item.question}</Text>
      </ListItem>
      <ListItem selected>
        <Left>
          <Text>{getLabel(props.item.value)}</Text>
        </Left>
        <Right>
          <Switch value={props.item.value} onValueChange={onChange} />
        </Right>
      </ListItem>
    </List>
  );
};

export default QuestionCheck;
