import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {BiBold, BiItalic} from 'react-icons/bi';
import {MdFormatStrikethrough} from 'react-icons/md';
import {GrBlockQuote} from 'react-icons/gr';
import {FiLink2} from 'react-icons/fi';
import {BsFillImageFill, BsCode} from 'react-icons/bs';
import styled from 'styled-components';
import Button from 'components/Button';
import axios from 'axios';

const Write = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    tags: [],
    content: '',
  });

  const handleChange = e => {};

  const handleWrite = () => {
    axios
      .post('/write', form)
      .then(res => {
        if (res.data.success) {
          alert(`글 등록 완료!🎉`);
          navigate('/');
        } else {
          alert(res.data.msg);
        }
      })
      .catch(error => console.log('error:', error));
  };

  return (
    <WriteWrap>
      <WriteBox>
        <Title name="title" placeholder="제목을 입력하세요" onChange={e => handleChange} />
        <Tags type="text" name="tags" placeholder="태그를 입력하세요" onChange={e => handleChange} />
        <Tools>
          <Htag type="button">H1</Htag>
          <Htag type="button">H2</Htag>
          <Htag type="button">H3</Htag>
          <Htag type="button">H4</Htag>
          <Line></Line>
          <IconMenu type="button">
            <BiBold />
          </IconMenu>
          <IconMenu type="button">
            <BiItalic />
          </IconMenu>
          <IconMenu type="button">
            <MdFormatStrikethrough />
          </IconMenu>
          <Line></Line>
          <IconMenu type="button">
            <GrBlockQuote />
          </IconMenu>
          <IconMenu type="button">
            <FiLink2 />
          </IconMenu>
          <IconMenu type="button">
            <BsFillImageFill />
          </IconMenu>
          <IconMenu type="button">
            <BsCode />
          </IconMenu>
        </Tools>
        <ContentsBox>
          <textarea placeholder="당신의 이야기를 적어보세요..." onChange={e => handleChange} />
        </ContentsBox>
      </WriteBox>
      <Preview></Preview>
      <BtnBox>
        <Button type="button" text="나가기" theme="none" onClick={() => navigate(-1)} />
        <Button type="button" text="저장" />
      </BtnBox>
    </WriteWrap>
  );
};

const BtnBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: var(--bg-element1);
  box-shadow: 0 0 10px var(--slight-layer);
  button {
    width: auto;
    padding: 10px 20px;
    font-size: clamp(16px, 1.4vw, 18px);
  }
`;

const ContentsBox = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  textarea {
    height: 100%;
  }
`;

const Title = styled.textarea`
  font-size: 2.75rem;
  font-weight: bold;
  color: var(--text1);
`;

const Tags = styled.input`
  padding: 10px;
  border: none;
  color: var(--text1);
  width: 100%;
  max-width: 100%;
`;

const Tools = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  @media (min-width: 1024px) {
    flex-wrap: wrap;
  }
  button {
    width: 3rem;
    height: 3rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--text3);
  }
`;

const Line = styled.div`
  width: 1px;
  height: 1.5rem;
  margin: 0 10px;
  background-color: var(--border3);
`;

const IconMenu = styled.button`
  svg {
    font-size: clamp(20px, 1.4vw, 24px);
  }
`;

const Htag = styled.button`
  font-size: 1rem;
  font-weight: bold;
  font-family: serif;
`;

const WriteWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-color: var(--bg-element1);
  height: calc(100vh - 65px - 53px - 30px);
  textarea {
    padding: 10px;
  }
`;

const Preview = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;

export default Write;
