# Section 03
## NodeJS

### 패키지
* 특정 목적을 갖는 프로그램의 단위 (보통 프로젝트라고 이야기함, e.g) 쇼핑몰 프로젝트
* Node.js에서 사용하는 프로그램의 단위는 패키지라고 부른다.

### init
```zsh
npm init
```

### run
```zsh
node index.js
node src/index.js
```

#### Script 지정 (패키지 기능)
* 일종의 매크로 -> `package.json`내 `srcipt`에 지정해 한 번에 실행
```json
...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node src/index.js" 
},
...
```

#### 실행
```zsh
node start
```


### Module System 
#### 모듈시스템 
* nodejs로 복잡한 프로그램을 만들기 위해 꼭 필요한 내용
* 모듈을 다루는 시스템 
* 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템

##### Javascript의 모듈 시스템 
* <strong>CommonJS (CJS)</strong>
* <strong>ES Module (ESM)</strong>
  * 최신 (react에서 사용)
  * package.json 내 `"type": "module"` 통해 설정 
    * 설정 후에는 commonJS 사용하려 할 경우 컴파일 에러, 기본적으로 함께 사용 불가 - `require is not defined in ES module scope, you can use import instead.`
* AMD 
* UMD

#### 모듈 
* 간단한 온라인 쇼핑몰을 만들어야 된다면?
  * 로그인, 회원 관리 등 여러 기능 필요 -> 하나의 파일로 관리할 수 없음 
  * 보통 기능별로 파일 나눠서 관리 e.g) user.js, cart.js, payment.js
  * 이 기능별로 나눠진 각각의 javascript 파일을 모듈이라고 함 
    * user.js : user 모듈


### 라이브러리
* 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것 
  * 날짜, 수학, 그래픽 라이브러리
* package-lock.json
  * 라이브러리 추가 시 생기는 파일 
  * 패키지가 사용하고 있는 라이브러리들의 버전이나 정보를 package.json보다 더 정확하고 엄밀하게 저장하는 파일 
  * 다른 이유: 더 정확한 버전을 저장하고 있음 (package.json: version range)
    * package.json과 package-lock.json의 버전 정보가 다르면 어떻게 될까? 
* node_modules
  * 설치한 라이브러리가 저장되는 저장소