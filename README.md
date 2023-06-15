# Monorepo starter

## How to Update Packages

패키지를 업데이트 하고 싶으면 -r 옵션을 사용하는 것이 효과적입니다.

해당 옵션은 프로젝트 전체를 관찰하는 옵션입니다. add 의 경우 모든 프로젝트에 설치되며, update 를 사용하면 라이브러리가 적용된 프로젝트만 업데이트가 진행됩니다.

```zsh
    pnpm update <pacakge-name>@<update-version> -r
```

## How to Add New Packages

새로운 패키지를 추가 하고 싶으면 turbo gen 을 사용하는 것이 효과적입니다.

```zsh
    turbo gen workspace --name <package-name>
```

## How to Add update seperate library

특정 패키지에 라이브러리를 추가하고 싶으면 --filter package-name 을 사용하면 됩니다.

```zsh
    pnpm add <package-name> --filter <package-name>
```

--filter 명령어는 build dev start 들 개별 명령어 모두 사용됩니다.

## How to Add Component or Util file

turbo gen 을 사용하면, 기존에 제작된 컴포넌트를 통해 쉽게 새 파일을 생각할 수 있습니다.

```zsh
    turbo gen
```
