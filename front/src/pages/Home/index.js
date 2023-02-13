import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import sampleImg from 'assets/sample.jpg';
import {HiHeart} from 'react-icons/hi2';
import axios from 'axios';

const HOME = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .get('/list')
      .then(res => {
        if (res.data.success) {
          const newList = res.data.data;
          setPostList(newList);
        } else {
          alert(res.data.msg);
        }
      })
      .catch(error => console.log('error:', error));
  }, []);
  return (
    <>
      <h2 className="hide">HOME</h2>
      <List>
        {postList.length > 0
          ? postList.map(item => (
              <li key={item.id}>
                <Link to={`/view/${item.id}`}>
                  <ImgBox>
                    <img src={sampleImg} alt={item.title} />
                  </ImgBox>
                  <TxtBox>
                    <p className="title">{item.title}</p>
                    <p className="desc">{item.content}</p>
                  </TxtBox>
                </Link>
                <InfoBox>
                  <span className="date">{item.createdAt.split('T')[0]}</span>
                  <div className="like">
                    <HiHeart />
                    {item.like}
                  </div>
                </InfoBox>
              </li>
            ))
          : '작성한 글이 없습니다'}
      </List>
    </>
  );
};

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-top: 1px solid var(--border3);
  color: var(--text2);

  .like {
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      display: flex;
      align-items: center;
    }
    svg {
      fill: var(--text2);
      margin-top: 1px;
    }
  }
`;

const ImgBox = styled.div`
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TxtBox = styled.div`
  padding: 20px;
  .title {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: clamp(16px, 1.3vw, 18px);
    color: var(--text1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .desc {
    display: -webkit-box;
    max-width: 100%;
    min-height: 72px;
    line-height: 1.5;
    color: var(--text2);
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const List = styled.ul`
  width: 100%;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  li {
    overflow: hidden;
    border-radius: 5px;
    background-color: var(--bg-element1);
    box-shadow: 3px 3px 15px var(--slight-layer);
  }
`;

export default HOME;
