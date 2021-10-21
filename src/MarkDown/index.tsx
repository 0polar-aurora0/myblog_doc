/*
 * @Author: fuzhenghao
 * @Date: 2021-10-13 15:50:02
 * @LastEditTime: 2021-10-13 16:59:48
 * @LastEditors: fuzhenghao
 * @Description: markDown内置组件，官网至https://github.com/remarkjs/react-markdown
 * @FilePath: \myBlog_frontEnd\src\components\MarkDown\index.tsx
 *
 */

import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
//直接添加了对删除线、表格、任务列表和 URL 的支持
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// let mackdown_content = require("@/assets/mackdown/mackdown_test.md").default;

type Iprops = Readonly<{
  mackdown_content: String;
}>;

export default class index extends Component<Iprops> {
  render() {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={this.props.mackdown_content as string}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    );
  }
}
