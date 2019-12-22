// flow
import React from 'react';
import {
  Container,
  Content,
  ListItem,
  Left,
  Text,
  Right,
  Switch,
  List,
  Item,
  Input,
  Label,
  Form,
  Picker,
  Icon
} from 'native-base';
import QuestionCheck from './check';

const QuestionText = props => {
  const onChange = value => {
    props.onChange({
      id: props.item.id,
      value
    });
  };
  return (
    <List>
      <ListItem itemHeader first>
        <Text>{props.item.question}</Text>
      </ListItem>
      <ListItem selected>
        <Item>
          <Input onChangeText={onChange} value={props.item.value} placeholder="" />
        </Item>
      </ListItem>
    </List>
  );
};

const QuestionList = props => {
  const onChange = value => {
    props.onChange({
      id: props.item.id,
      value
    });
  };
  return (
    <List>
      <ListItem itemHeader first>
        <Text>{props.item.question}</Text>
      </ListItem>
      {props.item.value.map((v, i) => {
        return (
          <ListItem key={i} selected>
            <Left>
              <Text>{v.text}</Text>
            </Left>
            <Right>
              <Switch value={v.value} onValueChange={onChange} />
            </Right>
          </ListItem>
        );
      })}
    </List>
  );
};

const getValueSelect = (items = []) => {
  const itemSelected = items.find(item => item.select);
  return itemSelected ? itemSelected.value : item[0].value;
};

const QuestionSelect = props => {
  const onChange = value => {
    props.onChange({
      id: props.item.id,
      value
    });
  };
  return (
    <Item picker>
      <Picker
        mode="dropdown"
        iosIcon={<Icon name="arrow-down" />}
        style={{ width: undefined }}
        placeholder="Select your SIM"
        placeholderStyle={{ color: '#bfc6ea' }}
        placeholderIconColor="#007aff"
        selectedValue={getValueSelect(props.item.value)}
        onValueChange={onChange}
      >
        {props.item.value.map((v, i) => {
          return <Picker.Item key={i} label={v.text} value={v.value} />;
        })}
      </Picker>
    </Item>
  );
};

const RenderQuestion = props => {
  const component = {
    text: () => <QuestionText {...props} />,
    list: () => <QuestionList {...props} />,
    check: () => <QuestionCheck {...props} />,
    select: () => <QuestionSelect {...props} />
  };

  return component[props.item.type]();
};
const QuestionPresentation = (props: Props) => {
  return <RenderQuestion {...props} />;
};

export default QuestionPresentation;
