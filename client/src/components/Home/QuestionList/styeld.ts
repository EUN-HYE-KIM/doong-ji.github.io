import styled from '@emotion/styled';

export const SiteLayoutBackground = styled.div`
  width: 100%;
  padding: 0 14px;
  text-align: center;
  h2 {
  }
  .ant-list-item {
    margin: 4vw 0;
    padding: 3vw;
    color: #a6a6a6;
    text-align: left;
    border-radius: 4rem;
    border: none;
    box-shadow: 4px 4px 10px 2px rgba(25, 25, 25, 0.1);
  }
  .ant-list-item-meta {
    padding: 0 4vw 0 1.5vw;
  }
  .ant-list-item-meta-title {
    margin: 0;
    font-size: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    width: 100%;
    overflow: hidden;
    a {
      color: #595959;
    }
  }
  .ant-list-item-meta-content {
    color: #a6a6a6;
  }
  .to_question_link {
    display: inline-block;
    margin-top: 10px;
    padding: 3px 0;
    color: #0442bf;
    font-size: 1.3rem;
    font-weight: 700;
    border-bottom: 3px solid;
    span {
      display: inline-block;
      padding: 0 1px;
      background: rgba(255, 180, 52, 0.4);
    }
  }
  @media only screen and (min-width: 769px) {
    background: white;
  }
`;
