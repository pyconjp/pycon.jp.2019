PyCon JP 2019 Web Site

## Hosting

- Dev: https://pycon.jp/dev-2019/
- Prd: https://pycon.jp/2019/

## Setup

``` bash
$ yarn install
```

## Branch運用

masterにPRを出してください。masterは常にデプロイ可能な状態を保ってください。

本番にデプロイしたい場合はproductionにPRを切ってmergeしてください。(CircleCIでデプロイされます。)