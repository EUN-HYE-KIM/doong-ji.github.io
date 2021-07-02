# 프론트엔드와 협업할 때 퍼블리싱

vscode, git, node.js는 기본으로 깔아두셔야합니다

## STEP 1 처음 셋팅
 
퍼블리싱 할 프로젝트를 git clone [해당 프로젝트]
클론해서 가져온다
->
vscode를 실행 -> 터미널 클론한 프로젝트 연결
-> 해당 프로젝트에서 package.json파일이 있는 폴더 경로잡기 
-> `yarn또는 npm install` 명령어 입력해서 node_modules 설치
-> 지금 연결되어 있는 브랜치 확인 -> 확인 후에 작업

## STEP 2 다른 분이 작업한 내용 적용

작업을 하다보면 다른 분이 작업한 거랑 겹처서 
충돌이 날 수 있다 그걸 해결하는 방법

프로젝트 시작전에 `git pull origin [해당 브랜치]`
-> 만약 실행해서 ~~를 찾지 못했다는 오류가 난다면 package.json 파일이 있는 폴더에서 `yarn 또는 npm install`
-> 작업이 끝났다면 지금 작업하고 있는 issue 넘버(#25)를 붙여서 commit 
`ex) Feat[#25] : menu dropdown finish`

### 브랜치 이동시 방법
명령어 git remote update로  git remote 갱신
git branch -r - 원격 저장소 (github) branch 리스트를 확인
git branch -a - 로컬과 원격저장소 branch 리스트를 모두 확인

이제 브랜치를 이동할 떄는 
`git checkout -t origin/[해당 브랜치이름]`  으로 이동하면 된다


## Component, styled.ts 관련

리엑트 구조(signup 기준) App.tsx -> pages/Signup(js) -> component/Signup(직접적인 html,css) -> Signup.tsx(html), styled.ts(css)

### emotion 태그 사용법

componet-> 작성할 .tsx 파일에서 원하는 위치에 원하는 이름을 가진 <TagBox></TagBox> 이런 식으로 만든다
`주의) 첫 시작은 대문자여야만한다`
-> 원하는 이름으로 태그 생성 후 
-> styled.ts 파일로 이동 `export const TagBox = styled.div(아무 태그나 가능 ex-a,h1,section 등등)'css작성';`
-> css 작성 후 tsx 파일 돌아와서 최상단 import 파일 생성
`ex) import { TagBox } from './styled'`

## 라이브러리 수정법
theme -> globalStyle.ts 파일에서 해당 라이브러리 태크 className 찾아서
```javascript
.ClassName {
    color : #eee;
}
```
식으로 수정

## prop 사용법
```javascript
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
`;

function App() {
  return <Circle color="blue" />;
}
```

### global Theme 사용법
theme -> 아래 index.ts 와 emotion.d.ts를 사용해서
반복되는 수를 저장할 수 있다
ex) 메인 컬러, 미디어 사이즈 등등
사용법은
index.ts 와 emotion.d.ts 파일에 원하는 변수를 등록하고
위에 prop 사용법과 같이
`${props => props.theme || 'black'};` 사용한다
여기서 중요한 점은 props.theme를 사용해야 한다
props.color 이런식으로 뒤에 해당하는 변수가 붙는다

## 미디어쿼리 사용법
```javascript
@media (min-width: 420px) {
        font-size: 50px;
      }
```
기존과 동일


## 진행하면서 어려운 부분은 물어봐주세영