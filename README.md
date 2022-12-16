# check-hub✔
github REST API를 활용한 이슈 검색 사이트

## 배포 링크
https://eloquent-torrone-6c38d3.netlify.app/

## 기술 스택

<table>
<tr>
 <td align="center">언어</td>
 <td>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=ffffff"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp </td>
</tr>
<tr>
 <td align="center">상태관리</td>
 <td>
  <img src="https://img.shields.io/badge/recoil-0075EB?style=for-the-badge&logo=recoil&logoColor=white">
 </td>
</tr>
<tr>
 <td align="center">라이브러리</td>
 <td>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp  
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-8DD6F9?style=for-the-badge"/>&nbsp </td>
</tr>
<tr>
 <td align="center">패키지관리</td>
 <td>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">Formatter</td>
 <td>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=ffffff"/> &nbsp 
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>&nbsp </td>
</tr>
<tr>
 <td align="center">배포</td>
 <td><img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=ffffff"/>&nbsp </td>
</tr>
</table>

## 기능 구현 목록

### 이슈 검색 페이지
- [x] owner / repository 입력시 이슈 목록 검색
- [x] 잘못된 owner / repository 입력시 에러 처리

### 이슈 목록 페이지
- [x] 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
- [x] 이슈 목록 state(open, closed, all), sort(comments, created, updated)별로 필터링 구현
- [x] 화면을 아래로 스크롤 할 시 이슈 목록 무한스크롤 구현
- [x] 화면 상단 스크롤 버튼 추가

### 이슈 상세 페이지
- [x] ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
- [x] 마크다운 렌더링 구현

## 시연 영상



https://user-images.githubusercontent.com/93373357/205692778-b7ca3f4a-7738-41b7-9f6e-eeea6d522b09.mp4




## 디렉토리 구조
```
📦src
 ┣ 📂Components
 ┣ 📂Pages
 ┃ ┣ 📂DetailPage
 ┃ ┣ 📂MainPage
 ┃ ┣ 📂NotFound
 ┃ ┣ 📂SearchPage
 ┣ 📂Routes
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┣ 📂constants
 ┃ ┣ 📂hooks
 ┃ ┣ 📂states
 ┃ ┗ 📂styles
 ```
## 사용한 라이브러리
- @octokit/rest
  - github Rest API Document에서 제안하고 있어 HTTP Client로 사용하게 되었습니다.
- styled-components
- react-icons
- react-markdown
  - Markdown을 HTML 태그로 전환하기 위해 사용했습니다.
- react-syntax-highlighter
  - markdown으로 작성된 코드 블록을 HTML로 전환해 CSS 스타일을 입혀 사용자가 code block을 보기 편하게 하기 위해 사용하였습니다.
- rehype-raw
- remark-gfm
- react-router-dom
  - 리액트 상에서 SPA간에 페이지 이동을 보다 편리하게 설계하기 위해서 사용하였습니다.
- sweetalert
- dayjs
