import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {BiBold, BiItalic} from 'react-icons/bi';
import {MdFormatStrikethrough} from 'react-icons/md';
import {GrBlockQuote} from 'react-icons/gr';
import {FiLink2} from 'react-icons/fi';
import {BsFillImageFill, BsCode} from 'react-icons/bs';
import styled from 'styled-components';
import Button from 'components/Button';
import axios from 'axios';
import useForm from 'hooks/useForm';
import Content from 'components/Content';

const Write = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const [editMode, setEditMode] = useState(false);
  const [tagList, setTagList] = useState([]);
  const [form, setForm, setData] = useForm({
    title: '',
    tags: [],
    content: '',
  });

  useEffect(() => {
    if (state.id) {
      setEditMode(true);
      axios
        .get(`/view?id=${state.id}`)
        .then(res => {
          if (res.data.success) {
            setData({...res.data.data});
            setTagList([...res.data.data.tags]);
          }
        })
        .catch(error => console.log('error:', error));
    }
  }, []);

  const handleTitleArea = e => {
    e.target.style.height = '1px';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const handleTags = (() => {
    return {
      add(e) {
        if (e.keyCode === 13) {
          setTagList([...tagList, e.target.value]);
          e.target.focus();
          e.target.value = '';
        }
      },
      delete(idx) {
        const arr = tagList;
        arr.splice(idx, 1);
        setTagList([...arr]);
      },
    };
  })();

  useEffect(() => {
    const tagsData = {
      target: {
        name: 'tags',
        value: tagList,
      },
    };
    setForm(tagsData);
  }, [tagList, setForm]);

  const handleWrite = () => {
    const url = editMode ? 'edit' : 'write';
    axios
      .post(url, form)
      .then(res => {
        if (res.data.success) {
          alert(`게시글 등록 완료!🎉`);
          const id = res.data.postId;
          navigate(`/view/${id}`);
        } else {
          alert(res.data.msg);
        }
      })
      .catch(error => console.log('error:', error));
  };

  return (
    <WriteWrap>
      <WriteBox>
        <Title
          name="title"
          placeholder="제목을 입력하세요"
          maxLength={50}
          value={form.title}
          onChange={e => setForm(e)}
          onInput={e => handleTitleArea(e)}
        />
        <TagList onClick={() => document.querySelector(['[name="tags"]']).focus()}>
          {tagList.length > 0 && (
            <>
              {tagList.map((tag, idx) => (
                <Tag key={idx} onClick={() => handleTags.delete(idx)}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
          <TagInput type="text" name="tags" placeholder="태그를 입력하세요" onKeyUp={e => handleTags.add(e)} />
        </TagList>

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
          <textarea
            placeholder="당신의 이야기를 적어보세요..."
            name="content"
            value={form.content}
            onChange={e => setForm(e)}
          />
        </ContentsBox>
      </WriteBox>
      <Preview>
        <PreTitle>{form.title}</PreTitle>
        <Content content={form.content} />
      </Preview>
      <BtnBox>
        <Button type="button" text="나가기" theme="none" onClick={() => navigate(-1)} />
        <Button type="button" text="저장" theme="basic" onClick={() => handleWrite()} />
      </BtnBox>
    </WriteWrap>
  );
};

const PreTitle = styled.h2`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: var(--text1);
  margin-bottom: 2rem;
`;

const Tag = styled.div`
  font-size: 1rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 1rem;
  background: var(--bg-element2);
  color: var(--primary1);
  transition: 0.125s ease-in;
  cursor: pointer;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagInput = styled.input`
  width: auto;
  min-width: 8rem;
  padding: 10px;
  border: none;
  color: var(--text1);
  max-width: 100%;
  margin-bottom: 0.75rem;
`;

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
  @media (min-width: 1024px) {
    width: 50%;
  }
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
  height: 90px;
  font-size: 2.75rem;
  font-weight: bold;
  color: var(--text1);
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
  padding: 20px;
  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }
`;

const Preview = styled.div`
  padding: 3rem;
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;

export default Write;
