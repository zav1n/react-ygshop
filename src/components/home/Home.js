import React, { Component } from 'react'
import "./Home.scss"
import axios from "../../utils/axios"
import Swiper from "swiper"
import "swiper/css/swiper.css"
export default class Home extends Component {
    componentDidMount() {
        axios.get("getIndexLoopimg").then(res => {
            this.setState({
                swiper_list: res.wdata
            },()=>{
                new Swiper('.swiper-container', {
                    // direction: 'vertical', // 垂直切换选项
                    loop: true, // 循环模式选项

                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    }
                })
            })
        }).catch(err => console.log(err));
    }
    state = {
        swiper_list: [], //轮播图列表
    }
    render() {
        return (
            <div className="yg-index">
                {/* 首页顶部导航开始 */}
                <div className="yg-index-header">
                    <i className="icon icon-menu"></i>
                    <span className="index-header-title">云购商城</span>
                    <i className="icon icon-soso"></i>
                </div>
                {/* 首页顶部导航结束 */}
                {/* 首页轮播图开始 */}
                <div className="yg-index-slider">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.swiper_list.map(v => <div key={v.loopimg_url} className="swiper-slide"> <img src={v.loopimg_url} alt="" /></div>)
                            }

                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                {/* 首页轮播图结束 */}

            </div>
        )
    }
}
