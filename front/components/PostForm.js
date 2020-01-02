import React from 'react';
import { Form, Input, Button } from 'antd';
import { useInput } from '../pages/signup';

const PostForm = () => {

  const [firstText, changeFirstText] = useInput('');
  const [secondText, changeSecondText] = useInput('');
  const [thridText, changeThridText] = useInput('');

  const onSubmit = (e) => {
    e.preventDefault();
    // if (!text || !text.trim()) {
    //   return alert('게시글을 작성하세요.');
    // }
    const text = `<어제 한 일>\n${firstText}\n\n<오늘 할 일>\n${secondText}\n\n<어제의 문제점>\n${thridText}`;
    console.log(text);
    // dispatch({
    //   type: ADD_POST_REQUEST,
    //   data: formData,
    // });

  }

  return (
    <Form onSubmit={onSubmit} style={{ margin: '10px 0 20px' }} encType="multipart/form-data">
    <Input.TextArea value={firstText}  onChange={changeFirstText} maxLength={500} placeholder="<어제 한 일>" style={{ height: '100px'}}>{'<어제한일>'}}</Input.TextArea>
    <Input.TextArea value={secondText} onChange={changeSecondText} maxLength={500} placeholder="<오늘 할 일>" style={{ height: '100px'}}/>
    <Input.TextArea value={thridText} onChange={changeThridText} maxLength={500} placeholder="<어제의 문제점>" style={{ height: '100px'}}/>
    <div>
      <Button type="primary" style={{ float: 'right', backgroundColor: '#00001a', borderColor: '#00001a' }} htmlType="submit">발행</Button>
    </div>
  </Form>
  )
}

export default PostForm;