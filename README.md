# Posuto(ポスト)
<p align="center">
<img src="./img/posuto512.png" width="300" />
</p>

*<p align="center">Just post it. <br/>*
배포 : <a href="https://posuto.netlify.app/" target="_blank">https://posuto.netlify.app/</a> </br>
</br>
![License](https://img.shields.io/badge/LICENSE-MIT-critical)
![Version](https://img.shields.io/badge/Version-2.0-%23f67aff)
</br>
*Vue 3 Script Setup + Typescript + VueUse* </br>
Newest Version 😋
</p>
</br>


Tech Stack : <br/>
![Typescript](https://img.shields.io/badge/Typescript-4.1.5-blue)
![Vue.js](https://img.shields.io/badge/Vue.js-3.0-success)
![Vue-Router](https://img.shields.io/badge/Vue%20Router-%5E4.0.0-green)
![Vuex](https://img.shields.io/badge/Vuex-%5E4.0.0-orange)
![Express.js](https://img.shields.io/badge/Express.js-%5E4.16.4-red)
![mongoose](https://img.shields.io/badge/mongoose-%5E5.4.20-yellowgreen)


</br>
</br>
</br>

## 🤔 Posuto란?

<br/>

- Posuto는 간단한 할 일 기록, TIL 등을 기록하기 위한 포스트잇 어플리케이션 입니다.
- 사랑하는 아내를 위해 기획되었지만, 많은 사람들이 유용하게 사용 가능하게 오픈소스로 배포합니다.
- 기존 온라인 포스트잇 어플리케이션들은, 복잡한 회원가입 구조를 가지고 있고, 사용자 인스턴스를 생성하는데 시간이 소요되기도 합니다.
이러한 복잡한 과정들을 생략하고, 간단한 회원가입과 함께 즉시 사용 가능한 포스트잇 어플리케이션이 있다면 어떨까? 라는 생각으로 개발했습니다.

</br>
</br>

## 🖱 Posuto UI/UX 살펴보기
</br>
<p align="center">
<img src="./img/login.png" width="500" />
</p>

+ URL 접속시 최초로 보게 될 화면입니다.
+ 계정이 없을 시, 우측 상단의 Signup 버튼을 누르면 회원가입 페이지로 이동합니다.

</br>
<p align="center">
<img src="./img/signup.png" width="500" />
</p>

+ Username은 이메일 형식으로 작성해야 합니다.

</br>
<p align="center">
<img src="./img/signup2.png" width="500" />
</p>

- Form이 비어있지 않고, Form Validation의 조건을 만족하면, Signup 버튼이 활성화 됩니다.

</br>

<p align="center">
<img src="./img/modal.png" width="500" />
<p/>

+ 성공적으로 회원가입을 마쳤다면, 귀여운 모달창이 알려줍니다.

</br>

<p align="center">
<img src="./img/default.png" width="500" />
</p>

+ 최초 로그인시 간단한 메뉴얼이 적힌 포스트가 생성됩니다.

</br>

<p align="center">
<img src="./img/main.gif" width="500" />
</p>

+ 우측 하단 포스트 버튼을 클릭시, 새로운 포스트를 생성합니다..
+ 포스트를 더블클릭하여 드래그/수정 모드로 토글할 수 있습니다.
+ 드래그/수정 이벤트가 발생시 서버에 PUT 요청을 보내, 유저 포스트의 Position 값을 실시간 저장 합니다.

</br>

<p align="center">
<img src="./img/setting.gif" width="500" />
</p>

+ 우측 하단 설정버튼을 클릭시, 포스트잇 배경색을 선택하는 창이 나옵니다.
+ 선택한 배경색은 localStorage에 저장되어 동일한 브라우저에서 유지 가능합니다.

</br>
</br>

## 🛠 기술 스택 & 배포 환경
+ 기술스택
    - Vue.js 2
    - Vue Router
    - Vuex
    - Axios
    - Express
    - MongoDB(mongoose)
+ 배포환경
    - Front-end : Netlify
    - Back-end : Heroku

</br>

## ⚙️ 개발 환경
+ [Chrome](https://www.google.co.kr/chrome/)
+ [Git](https://git-scm.com/downloads)
+ [VSC](https://code.visualstudio.com/)
+ [node.js](https://nodejs.org/ko/)
+ [Vue Dev Tool](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

</br>

## 📃 라이브러리

</br>

의존성 라이브러리는 [package.json](./posuto/package.json)을 참조해주세요. </br>


</br>

## ⛓ 프론트엔드 소스트리

</br>

```
├── src
   ├── App.vue
   ├── api
   │   └── common
   ├── assets
   ├── components
   │   └── common
   ├── css
   ├── views
   ├── mixins
   ├── routes
   ├── store
   ├── utils
   └── main.js ...

```
### 소스트리 설명

+ 기존 프로젝트들(Eterno, Cocha 등)의 문제중 하나였던 소스트리 구성을 변경했습니다.(inflearn 강의를 참고함)
+ Axios를 이용한 API 호출은 api 폴더에 구성했습니다. API 각각 역할에 따라 유지보수에 용이하게 모듈화 했습니다.
+ 공통된 컴포넌트는 common 폴더에 구성했습니다. 추후 컴포넌트 규모가 커진다면 form, post 등으로 세부적으로 나눌 수 있을 것 같습니다.
+ 라우터에 의해 보여지는 컴포넌트는 views 폴더에 구성했습니다.

</br>
</br>

## 📂 프로젝트를 마치며

</br>

앞서 말씀드린대로, 기존 프로젝트들은 전혀 기술적/구조적 체계가 잡혀있지 않은, 그저 생각나는대로 '무지성' 코딩을 한 프로젝트라면, 이번 프로젝트는 처음으로 체계적으로 구성한 것에 의의가 있다고 생각합니다. </br>
프로젝트를 진행하며 발전한 기술들을 나열하겠습니다.

+ 개발환경 구성
    - Prettier, ESLint 와 configuration 파일들을 개발 환경에 맞게 구성 가능
+ Axios
    - Axios interceptor를 사용해 HTTP 헤더를 configuration
    - API 호출과 이후 작업을 async/await 문법을 이용해 동기적 처리를 보장
    - UX를 고려한 API 호출 시점에 대한 이해
    - API의 역할에 맞게 각각의 파일로 모듈화
+ Vue-Router
    - Webpack의 code splitting을 활용한 lazy loading을 구현
    - Global navigation guard를 활용한 권한 유무 판별
+ REST API
    - REST API로 CRUD 구성
    - JWT/Cookies 를 이용한 인증 분기처리
+ 환경변수
    - production mode 와 development mode 의 차이에 대해 이해하고 활용
+ 구조화
    - 재사용 로직이나, 컴포넌트들을 유지보수가 용이한 폴더트리 구조로 구조화

</br>

아래는 본 프로젝트에서 부족한 부분과 개선이 필요한 점에 대해 나열하겠습니다.



+ Jest를 이용한 유닛테스트에 익숙해져야 함
+ UX를 고려한 에러처리
+ DOM/UI 조작 자바스크립트 코드를 더 간결하게 작성
    - 이중반복, 복잡한 if문 등등 자료구조/알고리즘 공부가 필요해보임.

</br>
</br>

## 📍 Update 
+ 최초 접속시 서비스 이용 가이드를 적은 디폴트 포스트를 생성해 UX를 개선했습니다. (Version 1.0 done)
+ Vue3 + Typescript 마이그레이션 완료. (Version 2.0 done)
+ Vue3 + Typescript Script Setup 적용 / Gridstack => VueUse로 라이브러리 변경
</br>
</br>

## 🔍 Update log

</br>

### Vue3로 마이그레이션 한 이유
</br>

#### Composition API
+ Vue2의 Options API는 data, method 등등 인스턴스의 옵션들이 모두 this 바인딩을 기준으로 타입이 추론되므로, 타입스크립트와 적합하지 않다고 판단했습니다.(물론 Vue2 + Composition API로 일정부분 해결되는 문제이지만, 후술할 내용의 문제가 있음)

#### Vuex 4
+ Vuex3는 타입스크립트 친화적이지 않습니다. 컴포넌트 레벨에서 import한 스토어의 타입을 추론하려면, node_modules/vuex 의 vue.d.ts 파일을 삭제하고 vue.d.ts를 extend하는 새로운 d.ts 파일을 생성해 커스텀해야 합니다. 또한 오픈소스화 이후 다른 사람이 clone 했을 때, node_modules/vuex/vue.d.ts 파일을 다시 삭제해야 한다는 번거로움이 있습니다.

#### Script Setup
+ Script Setup은 Composition API을 유지하며 사용 가능한 Syntactic sugar입니다. 전역메소드 등으로 코드를 더 간결하게 만들 수 있다는 장점이 있습니다. 반응성을 부여한 변수 또는 선언한 함수를 따로 리턴하지 않아도 Template에서 사용 가능한 점이 가장 편했습니다.

</br>

### VueUse

</br>

+ 기존에는 드래그&드롭 + 그리드 라이브러리로, Gridstack을 사용했었습니다. 그러나 Gridstack은 포스트를 추가, 삭제 하는 과정에서 리프레쉬가 필수적이었고(라이브러리를 리로드 함에도 뷰단에서 적용할 수 없음), 이는 UX저하의 큰 요인중 하나라고 생각하여 고민하고 있었습니다. 그러던 중 우연히 단톡방에서 VueUse라는 유틸 라이브러리를 보았고, useDraggable과 useElementSize를 활용해 적용 가능하겠다고 생각했습니다. 덕분에, CRUD의 모든 기능을 리프레쉬 없이 구현했습니다.

</br>
</br>

## 📂 Version
- [Version 1.0](https://github.com/cre4tive97/posuto-vue2)
- [Version 2.0](https://github.com/cre4tive97/posuto_v2)

## 🔑 License
</br>
</br>

[MIT License](./LICENSE)