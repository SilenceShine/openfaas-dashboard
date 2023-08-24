# Openfaas Dashboard

openfaas dashboard.

## i18n-ally config ，edit .vscode\settings.json

```json
{
    "i18n-ally.localesPaths": [
        "src/i18n"
    ],
    // 如下须要手动配置
    "i18n-ally.keystyle": "nested", // 翻译路径格式 (翻译后变量格式 nested：嵌套式  flat:扁平式)
    "i18n-ally.sortKeys": true,
    "i18n-ally.namespace": true,
    "i18n-ally.enabledParsers": [
        "ts"
    ], // 翻译文件可允许的格式，默认json
    "i18n-ally.sourceLanguage": "zh", // 翻译源语言 (源文件) 根据此语言文件翻译其他语言文件的变量和内容
    "i18n-ally.displayLanguage": "zh", // 显示语言 (显示文件/翻译文件)
    "i18n-ally.translate.engines": [
        "deepl",
        "google"
    ], // 翻译器
    "i18n-ally.extract.keygenStyle": "camelCase", // 翻译字段命名样式采用驼峰
    "i18n-ally.enabledFrameworks": [
        "vue"
    ],
}
```