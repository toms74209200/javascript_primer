# javascript_primer
JavaScript Primer の演習

## Usage

docker 及び docker-compose を使用します. 本リポジトリに `Dockerfile` は含まれないため, `../nodejs_deploy/` ディレクトリに以下の `Dockerfile` を設置してください.

**`Dockerfile`**

```Dockerfile
FROM node:12-alpine
```

以下のコマンドから docker container を起動します.
```bash
$ docker-compose up
```

このとき `docker-compose.yml` 内の `command` に記載されたコマンドを実行して終了します.

## Lisence

ソースコードの大部分は[参考文献](#refs)に基づきます. よってライセンス及び権利は参考文献に依存します.

## References<a name="refs"></a>

- [asciidwango/js-primer: JavaScript Primer - 迷わないための入門書](https://github.com/asciidwango/js-primer)  
  https://github.com/asciidwango/js-primer

- [JavaScript Primer - 迷わないための入門書 #jsprimer](https://jsprimer.net/)  
  https://jsprimer.net/

## Author

[toms74209200](<https://github.com/toms74209200>)
