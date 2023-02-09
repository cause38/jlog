import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import sampleImg from 'assets/sample.jpg';
import {HiHeart} from 'react-icons/hi2';

const HOME = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const newList = [];
    for (let i = 0; i <= 20; i++) {
      newList.push({
        id: i,
        title: `${i + 1}번째 게시글게시글게시글게시글게시글`,
        desc: '설명입니다 많이 적을거니 이렇게 좀 길면 좋겠지요오오오좋겠지요오오오좋겠지요오오오좋겠지요오오오좋겠지요오오오좋겠지요오오오좋겠지요오오오좋겠지요오오오좋겠지요오오오',
        date: '2023-02-09',
        like: 3,
      });
    }
    setPostList(newList);
  }, []);
  return (
    <>
      <h2 className="hide">HOME</h2>
      <List>
        {postList.map(item => (
          <li key={item.id}>
            <Link to="/view">
              <ImgBox>
                <img src={sampleImg} alt={item.title} />
              </ImgBox>
              <TxtBox>
                <p className="title">{item.title}</p>
                <p className="desc">{item.desc}</p>
              </TxtBox>
            </Link>
            <InfoBox>
              <span className="date">{item.date}</span>
              <div className="like">
                <HiHeart />
                {item.like}
              </div>
            </InfoBox>
          </li>
        ))}
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
    min-height: 54.5px;
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
