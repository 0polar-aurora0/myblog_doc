/*
 * @Author: fuzhenghao
 * @Date: 2021-10-09 14:56:21
 * @LastEditTime: 2021-10-21 17:13:37
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myblog_doc\src\Card\index.tsx
 *
 */
import React, { Component } from 'react';
import styles from './index.less';

interface IProps {
  type: string;
  className?: string;
  title?: string;
  onClick?: React.MouseEventHandler<any>;
  spin?: boolean;
  style?: React.CSSProperties;
}

interface IState {
  card_status: 'move' | 'move_before';
}

export default class index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      card_status: 'move_before',
    };
  }
  render() {
    const { card_status } = this.state;
    return (
      <div
        onMouseEnter={() => {
          this.setState({
            card_status: 'move',
          });
        }}
        // onMouseLeave={() => {
        //   this.setState({
        //     card_status: "move_before",
        //   });
        // }}
        className={`${card_status === 'move' ? styles.card_swicth : ''} ${
          styles.card
        }`}
      >
        <div className={styles.card_before}>个人简介</div>
        <div className={styles.card_back}>个人简介</div>
      </div>
    );
  }
}
