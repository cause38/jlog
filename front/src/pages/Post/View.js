import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Content from 'components/Content';
import {Role} from 'atoms';
import {useRecoilState} from 'recoil';

const View = () => {
  const navigate = useNavigate();
  const role = useRecoilState(Role);
  const {id} = useParams();
  const [data, setData] = useState({
    title: '',
    content: '',
    tags: [],
    like: 0,
    createdAt: '',
  });

  useEffect(() => {
    axios
      .get(`/view?id=${id}`)
      .then(res => {
        if (res.data.success) {
          setData({...data, ...res.data.data});
        }
      })
      .catch(error => console.log('error:', error));
  }, []);

  const handleDelete = id => {
    axios
      .get(`/delete?id=${id}`)
      .then(res => {
        if (res.data.success) {
          alert('게시글 삭제 완료!🎉');
          navigate('/');
        }
      })
      .catch(error => console.log('error:', error));
  };

  return (
    <Wrap>
      <Title>{data.title}</Title>
      <InfoWrap>
        <InfoBox>
          <span>
            <strong>jinjoo ·</strong>
          </span>
          <span>{data.createdAt.split('T')[0]}</span>
        </InfoBox>
        {role && (
          <BtnBox>
            <button onClick={() => navigate(`/write?post=${data.id}`)}>수정</button>
            <button onClick={() => handleDelete(data.id)}>삭제</button>
          </BtnBox>
        )}
      </InfoWrap>
      <TagList>
        {data.tags.length > 0 && (
          <>
            {data.tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </>
        )}
      </TagList>
      <Content content={data.content} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 768px;
  margin: 0 auto;
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
  margin-bottom: 2rem;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  button {
    font-size: 1rem;
    color: var(--text3);
    text-decoration: underline;
  }
`;

const InfoBox = styled.div`
  display: flex;
  gap: 10px;
  color: var(--text2);
`;

const InfoWrap = styled.span`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: var(--text1);
  margin-bottom: 2rem;
`;

export default View;
