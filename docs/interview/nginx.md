# nginx 配置
1. uri 匹配规则

flow
location=>start: location匹配
op=>operation: 精准匹配
cond=>condition: Yes or No?
e=>end
location->op->cond
cond(yes)->e
cond(no)->op
asdf