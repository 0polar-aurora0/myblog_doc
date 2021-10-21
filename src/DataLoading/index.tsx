/*
 * @Author: fuzhenghao
 * @Date: 2021-10-14 09:27:20
 * @LastEditTime: 2021-10-14 09:55:55
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\components\PreLoading\index.tsx
 *
 */
import React, { Component } from 'react';

type IProps = Readonly<{ dataResourse_controleData: any }>;
type IState = {
  loadingState: number;
  animationTime: number;
};

export default class index extends Component<IProps, IState> {
  state: IState = { loadingState: 0, animationTime: 1000 };
  componentDidMount() {
    let { loadingState, animationTime } = this.state;
    let { dataResourse_controleData } = this.props;
    if (dataResourse_controleData) {
      this.setState({
        loadingState: loadingState + 1,
      });
      setTimeout(() => {
        this.setState({
          loadingState: loadingState + 1,
        });
      }, animationTime);
    }
  }
  render() {
    let { loadingState } = this.state;
    return this.state.loadingState ? (
      this.props.children
    ) : (
      <div>I'm loading {loadingState}</div>
    );
  }
}
